const fs = require("fs");
const path = require("path");
const { GIFEncoder, quantize, applyPalette } = require("gifenc");

const WIDTH = 460;
const HEIGHT = 295;
const FPS = 24;
const DURATION_SEC = 2.5;
const TOTAL_FRAMES = Math.round(FPS * DURATION_SEC); // 60 frames

const outDir = path.join(__dirname, "..", "assets", "img", "publication_preview");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Deterministic PRNG
function pseudoRandom(seed) {
  let s = Math.sin(seed) * 10000;
  return s - Math.floor(s);
}

// Generate clusters with constellation network topology
const NUM_BENIGN = 17;
const NUM_DEFECT = 17;

const benignNodes = [];
for (let i = 0; i < NUM_BENIGN; i++) {
  const angle = (i / NUM_BENIGN) * Math.PI * 2 + pseudoRandom(i * 7 + 1) * 0.7;
  const dist = 12 + pseudoRandom(i * 13 + 3) * 32;
  benignNodes.push({
    baseX: 125 + Math.cos(angle) * dist * 1.25,
    baseY: 120 + Math.sin(angle) * dist * 0.95,
    r: 1.8 + pseudoRandom(i * 19 + 5) * 1.6,
    speedX: 1.0, // Integer multiples for seamless looping
    speedY: 1.0,
    phase: pseudoRandom(i * 31 + 13) * Math.PI * 2,
    orbitR: 2.5 + pseudoRandom(i * 37 + 17) * 3.0,
  });
}

const defectNodes = [];
for (let i = 0; i < NUM_DEFECT; i++) {
  const angle = (i / NUM_DEFECT) * Math.PI * 2 + pseudoRandom(i * 7 + 101) * 0.7;
  const dist = 12 + pseudoRandom(i * 13 + 103) * 32;
  defectNodes.push({
    baseX: 315 + Math.cos(angle) * dist * 1.25,
    baseY: 116 + Math.sin(angle) * dist * 0.95,
    r: 1.8 + pseudoRandom(i * 19 + 105) * 1.6,
    speedX: 1.0,
    speedY: 1.0,
    phase: pseudoRandom(i * 31 + 113) * Math.PI * 2,
    orbitR: 2.5 + pseudoRandom(i * 37 + 117) * 3.0,
  });
}

// High-fidelity FrameBuffer with smooth anti-aliased primitives
class FrameBuffer {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.data = new Uint8Array(width * height * 4);
  }

  clear(r, g, b) {
    for (let i = 0; i < this.data.length; i += 4) {
      this.data[i] = r;
      this.data[i + 1] = g;
      this.data[i + 2] = b;
      this.data[i + 3] = 255;
    }
  }

  setPixel(x, y, r, g, b, a = 1.0) {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    if (ix < 0 || ix >= this.width || iy < 0 || iy >= this.height || a <= 0.01) return;
    const idx = (iy * this.width + ix) * 4;
    const curA = Math.min(1.0, a);
    const invA = 1.0 - curA;
    this.data[idx] = Math.round(this.data[idx] * invA + r * curA);
    this.data[idx + 1] = Math.round(this.data[idx + 1] * invA + g * curA);
    this.data[idx + 2] = Math.round(this.data[idx + 2] * invA + b * curA);
    this.data[idx + 3] = 255;
  }

  // Smooth Antialiased Circle with multi-stop radial glow
  drawGlowCircle(cx, cy, radius, [r, g, b], alpha = 1.0, glowRadius = 0) {
    const maxR = radius + glowRadius;
    const minX = Math.max(0, Math.floor(cx - maxR));
    const maxX = Math.min(this.width - 1, Math.ceil(cx + maxR));
    const minY = Math.max(0, Math.floor(cy - maxR));
    const maxY = Math.min(this.height - 1, Math.ceil(cy + maxR));

    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const dx = x - cx;
        const dy = y - cy;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d <= radius) {
          const edgeA = d > radius - 0.9 ? Math.max(0, radius - d + 0.1) : 1.0;
          this.setPixel(x, y, r, g, b, alpha * edgeA);
        } else if (glowRadius > 0 && d <= maxR) {
          const glowNorm = 1.0 - (d - radius) / glowRadius;
          const glowA = Math.pow(glowNorm, 2.2) * 0.42;
          this.setPixel(x, y, r, g, b, alpha * glowA);
        }
      }
    }
  }

  // Smooth sub-pixel line with optional dash and glow
  drawSmoothLine(x0, y0, x1, y1, [r, g, b], alpha = 1.0, thickness = 1.0, dashLen = 0, gapLen = 0) {
    const dx = x1 - x0;
    const dy = y1 - y0;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 0.001) return;

    const steps = Math.ceil(len * 2.0);
    const halfThick = thickness * 0.5;
    const rad = Math.max(0.65, halfThick);

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const currentDist = t * len;

      if (dashLen > 0 && gapLen > 0) {
        const cycle = currentDist % (dashLen + gapLen);
        if (cycle > dashLen) continue;
      }

      const px = x0 + dx * t;
      const py = y0 + dy * t;
      this.drawGlowCircle(px, py, rad, [r, g, b], alpha, 0);
    }
  }

  drawFilledRect(x0, y0, w, h, [r, g, b], alpha = 1.0) {
    const minX = Math.max(0, Math.floor(x0));
    const maxX = Math.min(this.width, Math.ceil(x0 + w));
    const minY = Math.max(0, Math.floor(y0));
    const maxY = Math.min(this.height, Math.ceil(y0 + h));
    for (let y = minY; y < maxY; y++) {
      for (let x = minX; x < maxX; x++) {
        this.setPixel(x, y, r, g, b, alpha);
      }
    }
  }

  // Rounded rectangle panel
  drawRoundedPanel(x, y, w, h, rad, fillCol, borderCol, alphaFill = 0.85, alphaBorder = 0.9) {
    if (fillCol && alphaFill > 0) {
      this.drawFilledRect(x + rad, y, w - rad * 2, h, fillCol, alphaFill);
      this.drawFilledRect(x, y + rad, rad, h - rad * 2, fillCol, alphaFill);
      this.drawFilledRect(x + w - rad, y + rad, rad, h - rad * 2, fillCol, alphaFill);
      this.drawGlowCircle(x + rad, y + rad, rad, fillCol, alphaFill, 0);
      this.drawGlowCircle(x + w - rad, y + rad, rad, fillCol, alphaFill, 0);
      this.drawGlowCircle(x + rad, y + h - rad, rad, fillCol, alphaFill, 0);
      this.drawGlowCircle(x + w - rad, y + h - rad, rad, fillCol, alphaFill, 0);
    }
    if (borderCol && alphaBorder > 0) {
      this.drawSmoothLine(x + rad, y, x + w - rad, y, borderCol, alphaBorder, 1);
      this.drawSmoothLine(x + rad, y + h, x + w - rad, y + h, borderCol, alphaBorder, 1);
      this.drawSmoothLine(x, y + rad, x, y + h - rad, borderCol, alphaBorder, 1);
      this.drawSmoothLine(x + w, y + rad, x + w, y + h - rad, borderCol, alphaBorder, 1);
    }
  }
}

// Clean Pixel Typography System
const PIXEL_GLYPHS = {
  A: [0b0110, 0b1001, 0b1111, 0b1001, 0b1001],
  B: [0b1110, 0b1001, 0b1110, 0b1001, 0b1110],
  C: [0b0111, 0b1000, 0b1000, 0b1000, 0b0111],
  D: [0b1110, 0b1001, 0b1001, 0b1001, 0b1110],
  E: [0b1111, 0b1000, 0b1110, 0b1000, 0b1111],
  F: [0b1111, 0b1000, 0b1110, 0b1000, 0b1000],
  G: [0b0111, 0b1000, 0b1011, 0b1001, 0b0111],
  H: [0b1001, 0b1001, 0b1111, 0b1001, 0b1001],
  I: [0b1110, 0b0100, 0b0100, 0b0100, 0b1110],
  J: [0b0011, 0b0001, 0b0001, 0b1001, 0b0110],
  K: [0b1001, 0b1010, 0b1100, 0b1010, 0b1001],
  L: [0b1000, 0b1000, 0b1000, 0b1000, 0b1111],
  M: [0b10001, 0b11011, 0b10101, 0b10001, 0b10001],
  N: [0b1001, 0b1101, 0b1011, 0b1001, 0b1001],
  O: [0b0110, 0b1001, 0b1001, 0b1001, 0b0110],
  P: [0b1110, 0b1001, 0b1110, 0b1000, 0b1000],
  Q: [0b0110, 0b1001, 0b1001, 0b1010, 0b0101],
  R: [0b1110, 0b1001, 0b1110, 0b1010, 0b1001],
  S: [0b0111, 0b1000, 0b0110, 0b0001, 0b1110],
  T: [0b1111, 0b0100, 0b0100, 0b0100, 0b0100],
  U: [0b1001, 0b1001, 0b1001, 0b1001, 0b0110],
  V: [0b1001, 0b1001, 0b1001, 0b0110, 0b0100],
  W: [0b10001, 0b10001, 0b10101, 0b11011, 0b10001],
  X: [0b1001, 0b1001, 0b0110, 0b1001, 0b1001],
  Y: [0b1001, 0b1001, 0b0110, 0b0100, 0b0100],
  Z: [0b1111, 0b0010, 0b0100, 0b1000, 0b1111],
  0: [0b0110, 0b1001, 0b1001, 0b1001, 0b0110],
  1: [0b0100, 0b1100, 0b0100, 0b0100, 0b1110],
  2: [0b1110, 0b0001, 0b0110, 0b1000, 0b1111],
  3: [0b1110, 0b0001, 0b0110, 0b0001, 0b1110],
  4: [0b1001, 0b1001, 0b1111, 0b0001, 0b0001],
  5: [0b1111, 0b1000, 0b1110, 0b0001, 0b1110],
  6: [0b0111, 0b1000, 0b1110, 0b1001, 0b0110],
  7: [0b1111, 0b0001, 0b0010, 0b0100, 0b0100],
  8: [0b0110, 0b1001, 0b0110, 0b1001, 0b0110],
  9: [0b0110, 0b1001, 0b0111, 0b0001, 0b1110],
  ":": [0b0, 0b1, 0b0, 0b1, 0b0],
  ".": [0b0, 0b0, 0b0, 0b0, 0b1],
  ",": [0b0, 0b0, 0b0, 0b01, 0b10],
  "/": [0b0001, 0b0010, 0b0100, 0b1000, 0b0000],
  "-": [0b0, 0b0, 0b1110, 0b0, 0b0],
  "+": [0b0000, 0b0100, 0b1110, 0b0100, 0b0000],
  "=": [0b0000, 0b1110, 0b0000, 0b1110, 0b0000],
  "%": [0b1001, 0b0010, 0b0100, 0b1001, 0b0000],
  "•": [0b0, 0b0110, 0b0110, 0b0, 0b0],
  "[": [0b110, 0b100, 0b100, 0b100, 0b110],
  "]": [0b011, 0b001, 0b001, 0b001, 0b011],
  " ": [0b0, 0b0, 0b0, 0b0, 0b0],
};

function renderText(fb, text, startX, startY, [r, g, b], alpha = 1.0, scale = 1) {
  let currX = startX;
  const upper = text.toUpperCase();
  for (let i = 0; i < upper.length; i++) {
    const ch = upper[i];
    const glyph = PIXEL_GLYPHS[ch] || PIXEL_GLYPHS[" "];
    const glyphWidth = ch === "M" || ch === "W" ? 5 : ch === ":" || ch === "." || ch === "," ? 2 : ch === "[" || ch === "]" ? 3 : 4;

    for (let row = 0; row < 5; row++) {
      const bitRow = glyph[row] || 0;
      for (let col = 0; col < glyphWidth; col++) {
        const isSet = (bitRow >> (glyphWidth - 1 - col)) & 1;
        if (isSet) {
          fb.drawFilledRect(currX + col * scale, startY + row * scale, scale, scale, [r, g, b], alpha);
        }
      }
    }
    currX += (glyphWidth + 1) * scale;
  }
  return currX;
}

// Color Palette Definition
const C_BG = [7, 11, 20]; // #070b14
const C_PANEL = [12, 18, 32];
const C_BORDER = [30, 48, 80];
const C_GRID_DOT = [20, 32, 54];

// Benign / Dormant (Cyan / Teal)
const C_CYAN_CORE = [165, 243, 252];
const C_CYAN_MID = [6, 182, 212];
const C_CYAN_DARK = [14, 116, 144];

// Defection / Triggered (Crimson / Rose)
const C_ROSE_CORE = [254, 205, 211];
const C_ROSE_MID = [244, 63, 94];
const C_ROSE_DARK = [159, 18, 57];

// Probe Hyperplane (Ultraviolet)
const C_VIOLET_CORE = [245, 208, 254];
const C_VIOLET_MID = [192, 132, 252];
const C_VIOLET_DEEP = [147, 51, 234];

// Accent Colors
const C_GOLD = [250, 204, 21];
const C_GREEN = [52, 211, 153];
const C_TEXT_MUTED = [100, 116, 139];
const C_TEXT_LIGHT = [226, 232, 240];
const C_WHITE = [255, 255, 255];

console.log(`Generating high-definition publication preview GIF (${TOTAL_FRAMES} frames)...`);
const gif = GIFEncoder();
const fb = new FrameBuffer(WIDTH, HEIGHT);

for (let f = 0; f < TOTAL_FRAMES; f++) {
  const t = f / TOTAL_FRAMES;
  const loopAngle = t * Math.PI * 2;
  const pulse0 = Math.sin(loopAngle);
  const pulse1 = Math.cos(loopAngle);

  // 1. Clean Obsidian Canvas
  fb.clear(C_BG[0], C_BG[1], C_BG[2]);

  // Ambient Dot Matrix Grid in latent area
  for (let gx = 22; gx <= WIDTH - 22; gx += 18) {
    for (let gy = 38; gy <= 204; gy += 16) {
      const distFromCenter = Math.hypot(gx - 230, gy - 120);
      const dotA = Math.max(0.15, 0.48 - distFromCenter / 320);
      fb.setPixel(gx, gy, C_GRID_DOT[0], C_GRID_DOT[1], C_GRID_DOT[2], dotA);
    }
  }

  // 2. Latent Coordinate Crosshairs
  fb.drawSmoothLine(30, 120, 430, 120, [20, 32, 54], 0.35, 1, 4, 4);
  fb.drawSmoothLine(230, 40, 230, 202, [20, 32, 54], 0.35, 1, 4, 4);

  // 3. Top HUD Status Bar
  fb.drawRoundedPanel(12, 8, WIDTH - 24, 22, 3, [11, 17, 30], C_BORDER, 0.9, 0.85);

  // Live indicator
  const liveAlpha = 0.65 + 0.35 * Math.sin(loopAngle * 2);
  fb.drawGlowCircle(22, 19, 2.2, C_GREEN, liveAlpha, 3);
  renderText(fb, "PROBE TELEMETRY", 30, 16, C_TEXT_LIGHT, 0.95, 1);
  renderText(fb, "QWEN-2.5-CODER", 146, 16, C_TEXT_MUTED, 0.85, 1);
  renderText(fb, "D=3584", 256, 16, C_CYAN_MID, 0.9, 1);

  // AUROC Badge
  fb.drawRoundedPanel(350, 11, 98, 16, 2, [30, 27, 75], [99, 102, 241], 0.95, 0.9);
  renderText(fb, "AUROC 99.8%", 358, 16, C_GOLD, 1.0, 1);

  // 4. Cluster Dynamics
  const benignCx = 125 + pulse0 * 3.0;
  const benignCy = 120 + pulse1 * 2.2;

  const defectCx = 315 - pulse0 * 3.0;
  const defectCy = 116 - pulse1 * 2.2;

  const curBenign = benignNodes.map((p) => {
    const px = p.baseX + Math.sin(loopAngle * p.speedX + p.phase) * p.orbitR;
    const py = p.baseY + Math.cos(loopAngle * p.speedY + p.phase) * (p.orbitR * 0.8);
    return { x: px, y: py, r: p.r };
  });

  const curDefect = defectNodes.map((p) => {
    const px = p.baseX + Math.sin(loopAngle * p.speedX + p.phase) * p.orbitR;
    const py = p.baseY + Math.cos(loopAngle * p.speedY + p.phase) * (p.orbitR * 0.8);
    return { x: px, y: py, r: p.r };
  });

  // 5. Halos
  fb.drawGlowCircle(benignCx, benignCy, 10, C_CYAN_MID, 0.22, 42);
  fb.drawGlowCircle(defectCx, defectCy, 10, C_ROSE_MID, 0.22, 42);

  // 6. Constellation Edges
  for (let i = 0; i < curBenign.length; i++) {
    for (let j = i + 1; j < curBenign.length; j++) {
      const dist = Math.hypot(curBenign[i].x - curBenign[j].x, curBenign[i].y - curBenign[j].y);
      if (dist < 30) {
        const edgeA = Math.pow(1.0 - dist / 30, 1.5) * 0.32;
        fb.drawSmoothLine(curBenign[i].x, curBenign[i].y, curBenign[j].x, curBenign[j].y, C_CYAN_MID, edgeA, 1);
      }
    }
  }

  for (let i = 0; i < curDefect.length; i++) {
    for (let j = i + 1; j < curDefect.length; j++) {
      const dist = Math.hypot(curDefect[i].x - curDefect[j].x, curDefect[i].y - curDefect[j].y);
      if (dist < 30) {
        const edgeA = Math.pow(1.0 - dist / 30, 1.5) * 0.32;
        fb.drawSmoothLine(curDefect[i].x, curDefect[i].y, curDefect[j].x, curDefect[j].y, C_ROSE_MID, edgeA, 1);
      }
    }
  }

  // 7. Linear Probe Hyperplane
  const hypTilt = Math.sin(loopAngle) * 8;
  const hypX0 = 220 + hypTilt;
  const hypY0 = 40;
  const hypX1 = 236 - hypTilt;
  const hypY1 = 198;

  // Decision margin bands
  const marginW = 26;
  fb.drawSmoothLine(hypX0 - marginW, hypY0, hypX1 - marginW, hypY1, C_CYAN_DARK, 0.32, 1, 5, 4);
  fb.drawSmoothLine(hypX0 + marginW, hypY0, hypX1 + marginW, hypY1, C_ROSE_DARK, 0.32, 1, 5, 4);

  // Orthogonal projection lines
  const hdx = hypX1 - hypX0;
  const hdy = hypY1 - hypY0;
  const hlen = Math.hypot(hdx, hdy);
  const unx = -hdy / hlen;
  const uny = hdx / hlen;

  const bDot = (benignCx - hypX0) * unx + (benignCy - hypY0) * uny;
  const bProjX = benignCx - bDot * unx;
  const bProjY = benignCy - bDot * uny;
  fb.drawSmoothLine(benignCx, benignCy, bProjX, bProjY, C_CYAN_CORE, 0.45, 1, 3, 3);
  fb.drawGlowCircle(bProjX, bProjY, 1.8, C_CYAN_CORE, 0.75, 2);

  const dDot = (defectCx - hypX0) * unx + (defectCy - hypY0) * uny;
  const dProjX = defectCx - dDot * unx;
  const dProjY = defectCy - dDot * uny;
  fb.drawSmoothLine(defectCx, defectCy, dProjX, dProjY, C_ROSE_CORE, 0.45, 1, 3, 3);
  fb.drawGlowCircle(dProjX, dProjY, 1.8, C_ROSE_CORE, 0.75, 2);

  // Hyperplane laser glow
  fb.drawSmoothLine(hypX0, hypY0, hypX1, hypY1, C_VIOLET_DEEP, 0.25, 7);
  fb.drawSmoothLine(hypX0, hypY0, hypX1, hypY1, C_VIOLET_MID, 0.55, 3.2);
  fb.drawSmoothLine(hypX0, hypY0, hypX1, hypY1, C_VIOLET_CORE, 0.95, 1.2);

  // Normal vector arrow
  const midHypX = (hypX0 + hypX1) / 2;
  const midHypY = (hypY0 + hypY1) / 2;
  const arrowLen = 24;
  const arrowX = midHypX + unx * arrowLen;
  const arrowY = midHypY + uny * arrowLen;

  fb.drawSmoothLine(midHypX, midHypY, arrowX, arrowY, C_VIOLET_CORE, 0.9, 1.4);
  fb.drawGlowCircle(arrowX, arrowY, 2.5, C_VIOLET_CORE, 1.0, 3);
  renderText(fb, "W_PROBE", arrowX - 10, arrowY - 12, C_VIOLET_CORE, 0.9, 1);

  // 8. Nodes
  curBenign.forEach((p) => {
    fb.drawGlowCircle(p.x, p.y, p.r, C_CYAN_CORE, 0.95, 4);
  });
  fb.drawGlowCircle(benignCx, benignCy, 3.5, [255, 255, 255], 1.0, 7);
  fb.drawGlowCircle(benignCx, benignCy, 1.8, C_CYAN_CORE, 1.0, 0);

  curDefect.forEach((p) => {
    fb.drawGlowCircle(p.x, p.y, p.r, C_ROSE_CORE, 0.95, 4);
  });
  fb.drawGlowCircle(defectCx, defectCy, 3.5, [255, 255, 255], 1.0, 7);
  fb.drawGlowCircle(defectCx, defectCy, 1.8, C_ROSE_CORE, 1.0, 0);

  // 9. Manifold Badges
  fb.drawRoundedPanel(20, 44, 114, 17, 2, [8, 30, 45], [14, 116, 144], 0.85, 0.8);
  fb.drawGlowCircle(28, 52, 1.8, C_CYAN_MID, 1.0, 2);
  renderText(fb, "DORMANT BASIN (L16)", 34, 50, C_CYAN_CORE, 0.95, 1);

  fb.drawRoundedPanel(312, 44, 128, 17, 2, [45, 12, 24], [190, 24, 93], 0.85, 0.8);
  fb.drawGlowCircle(320, 52, 1.8, C_ROSE_MID, 1.0, 2);
  renderText(fb, "DEFECTED SUB-MANIFOLD", 326, 50, C_ROSE_CORE, 0.95, 1);

  // 10. Bottom Spectrogram (Layer Sweep)
  fb.drawRoundedPanel(12, 212, WIDTH - 24, 72, 3, [10, 16, 28], C_BORDER, 0.92, 0.85);
  renderText(fb, "LAYER-WISE SEPARABILITY (L0-L28)", 22, 218, C_TEXT_LIGHT, 0.9, 1);

  const graphX0 = 36;
  const graphX1 = WIDTH - 34;
  const graphYBase = 272;
  const graphHeight = 40;

  fb.drawSmoothLine(graphX0, graphYBase, graphX1, graphYBase, [26, 40, 68], 0.6, 1);
  fb.drawSmoothLine(graphX0, graphYBase - graphHeight, graphX1, graphYBase - graphHeight, [26, 40, 68], 0.35, 1, 3, 3);

  renderText(fb, "L0", graphX0 - 4, graphYBase + 3, C_TEXT_MUTED, 0.7, 1);
  renderText(fb, "L14", graphX0 + (14 / 28) * (graphX1 - graphX0) - 6, graphYBase + 3, C_CYAN_MID, 0.8, 1);
  renderText(fb, "L28", graphX1 - 10, graphYBase + 3, C_TEXT_MUTED, 0.7, 1);

  const layerPoints = [];
  for (let l = 0; l <= 28; l++) {
    const lx = graphX0 + (l / 28) * (graphX1 - graphX0);
    let score = 0.5 + 0.498 / (1.0 + Math.exp(-(l - 13.5) * 0.85));
    if (l < 10) score += Math.sin(l * 1.5) * 0.02 - 0.01;
    const ly = graphYBase - (score - 0.48) * (graphHeight / 0.52);
    layerPoints.push({ x: lx, y: ly, score });
  }

  // Gradient area fill
  for (let i = 0; i < layerPoints.length - 1; i++) {
    const p0 = layerPoints[i];
    const p1 = layerPoints[i + 1];
    const sliceX0 = Math.floor(p0.x);
    const sliceX1 = Math.ceil(p1.x);

    for (let x = sliceX0; x <= sliceX1; x++) {
      const prog = (x - p0.x) / Math.max(1, p1.x - p0.x);
      const curCurveY = p0.y + (p1.y - p0.y) * prog;
      for (let y = Math.floor(curCurveY); y < graphYBase; y++) {
        const heightNorm = (graphYBase - y) / graphHeight;
        const fillA = Math.pow(heightNorm, 1.8) * 0.22;
        fb.setPixel(x, y, C_CYAN_MID[0], C_CYAN_MID[1], C_CYAN_MID[2], fillA);
      }
    }
  }

  // Curve Line
  for (let i = 0; i < layerPoints.length - 1; i++) {
    const p0 = layerPoints[i];
    const p1 = layerPoints[i + 1];
    fb.drawSmoothLine(p0.x, p0.y, p1.x, p1.y, C_CYAN_MID, 0.4, 3.5);
    fb.drawSmoothLine(p0.x, p0.y, p1.x, p1.y, C_CYAN_CORE, 0.95, 1.4);
  }

  // Peak Layer 16 marker
  const peakP = layerPoints[16];
  fb.drawGlowCircle(peakP.x, peakP.y, 2.5, C_GOLD, 1.0, 4);
  fb.drawSmoothLine(peakP.x, peakP.y, peakP.x, graphYBase, C_GOLD, 0.4, 1, 2, 2);

  // Radar Scan Laser Beam sweeping across layers
  const scanT = f / TOTAL_FRAMES;
  const scanX = graphX0 + scanT * (graphX1 - graphX0);
  const scanLayer = Math.min(28, Math.round(scanT * 28));

  const scanPIndex = Math.min(layerPoints.length - 2, Math.floor(scanT * 28));
  const frac = scanT * 28 - scanPIndex;
  const scanCurY = layerPoints[scanPIndex].y + (layerPoints[scanPIndex + 1].y - layerPoints[scanPIndex].y) * frac;

  fb.drawSmoothLine(scanX, 226, scanX, graphYBase, C_VIOLET_MID, 0.35, 2.5);
  fb.drawSmoothLine(scanX, 226, scanX, graphYBase, C_WHITE, 0.85, 1);
  fb.drawGlowCircle(scanX, scanCurY, 3.0, C_VIOLET_CORE, 1.0, 5);

  if (scanLayer >= 14 && scanLayer <= 18) {
    renderText(fb, `DEFECT EMERGENCE [L${scanLayer}]`, 268, 218, C_GOLD, 0.95, 1);
  }

  // Quantize and write frame
  const palette = quantize(fb.data, 256);
  const index = applyPalette(fb.data, palette);
  gif.writeFrame(index, WIDTH, HEIGHT, {
    palette,
    delay: Math.round(1000 / FPS),
    transparent: false,
  });
}

gif.finish();

const buffer = gif.bytes();
const outFile = path.join(outDir, "geometry_of_defection.gif");
fs.writeFileSync(outFile, buffer);
console.log(`Saved optimized publication thumbnail to ${outFile} (${(buffer.length / 1024).toFixed(1)} KB)`);
