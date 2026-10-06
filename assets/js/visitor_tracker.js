/**
 * Visitor Alert Tracker for nathybekele.github.io
 * Dispatches a visitor notification with geolocation, device, resolution,
 * and popup visibility/interaction status via FormSubmit.co.
 */
(function () {
  "use strict";

  if (window.__nbVisitorTrackerLoaded) return;
  window.__nbVisitorTrackerLoaded = true;

  // FormSubmit endpoint (using your encrypted token to keep your personal email private)
  const RECIPIENT_ENDPOINT = "https://formsubmit.co/ajax/c32b324251b6f1c1cf8c2732cbb14169";
  const SEND_DELAY_MS = 5000; // Wait 5s to capture initial interaction before sending

  let hasInteractedWithPopups = false;
  const interactedItems = new Set();
  let visitEmailSent = false;
  let interactionEmailSent = false;
  let cachedGeo = null;
  let timerId = null;

  function shouldTrack() {
    const isTest = window.location.search.includes("test_alert=1");

    // Filter automated crawlers and headless environments
    if (navigator.webdriver && !isTest) return false;

    // Filter local development unless testing
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isLocal && !isTest) return false;

    // Filter repeated visits in the same session
    if (sessionStorage.getItem("nb_visitor_alert_sent") && !isTest && !window.location.search.includes("force_alert=1")) {
      return false;
    }

    // Filter owner/admin sessions
    try {
      if (localStorage.getItem("nathy_admin_session") && !isTest) return false;
    } catch (e) {}

    return true;
  }

  function getDeviceInfo() {
    const ua = navigator.userAgent || "";
    let os = "Unknown OS";
    if (/iPad|iPhone|iPod/.test(ua)) os = "iOS";
    else if (/Macintosh|Mac OS X/.test(ua)) os = "macOS";
    else if (/Windows NT/.test(ua)) os = "Windows";
    else if (/Android/.test(ua)) os = "Android";
    else if (/Linux/.test(ua)) os = "Linux";
    else if (/CrOS/.test(ua)) os = "ChromeOS";

    let browser = "Unknown Browser";
    if (/Edg\//.test(ua)) browser = "Microsoft Edge";
    else if (/Chrome\//.test(ua) && !/Edg\//.test(ua)) browser = "Chrome";
    else if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) browser = "Safari";
    else if (/Firefox\//.test(ua)) browser = "Firefox";
    else if (/Opera|OPR\//.test(ua)) browser = "Opera";

    const isTouch = navigator.maxTouchPoints > 0;
    const screenWidth = window.screen.width;
    let deviceType = "Desktop";
    if (/Mobile|Android|iP(hone|od)/i.test(ua) || (isTouch && screenWidth < 768)) {
      deviceType = "Mobile";
    } else if (/iPad|Tablet/i.test(ua) || (isTouch && screenWidth >= 768 && screenWidth <= 1024)) {
      deviceType = "Tablet";
    }

    return { os, browser, deviceType };
  }

  function getScreenInfo() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const sw = window.screen.width;
    const sh = window.screen.height;
    const dpr = window.devicePixelRatio ? Math.round(window.devicePixelRatio * 100) / 100 : 1;

    let viewportCategory = "Mobile (<768px)";
    if (w >= 1380) viewportCategory = "Large Desktop (>=1380px)";
    else if (w >= 992) viewportCategory = "Laptop / Desktop (992px - 1379px)";
    else if (w >= 768) viewportCategory = "Tablet / Medium (768px - 991px)";

    return {
      resolution: `${sw} x ${sh} (DPR: ${dpr})`,
      viewport: `${w} x ${h}`,
      viewportCategory,
      isExpandedOnOpen: w >= 1380,
    };
  }

  async function fetchGeolocation() {
    if (cachedGeo) return cachedGeo;
    try {
      const res = await fetch("https://ipwho.is/");
      if (res.ok) {
        const data = await res.json();
        if (data && data.success !== false) {
          cachedGeo = {
            city: data.city || "Unknown City",
            country: data.country || "Unknown Country",
            region: data.region || "",
            isp: data.connection && data.connection.isp ? data.connection.isp : "N/A",
            timezone: data.timezone && data.timezone.id ? data.timezone.id : "N/A",
          };
          return cachedGeo;
        }
      }
    } catch (e) {
      // Fallback
    }

    try {
      const res2 = await fetch("https://ipapi.co/json/");
      if (res2.ok) {
        const data2 = await res2.json();
        cachedGeo = {
          city: data2.city || "Unknown City",
          country: data2.country_name || "Unknown Country",
          region: data2.region || "",
          isp: data2.org || "N/A",
          timezone: data2.timezone || "N/A",
        };
        return cachedGeo;
      }
    } catch (e) {}

    cachedGeo = {
      city: "Unknown City",
      country: "Unknown Country",
      region: "",
      isp: "N/A",
      timezone: "N/A",
    };
    return cachedGeo;
  }

  function markInteraction(name) {
    hasInteractedWithPopups = true;
    interactedItems.add(name);

    // If the visit alert was already sent with false, notify about the interaction
    if (visitEmailSent && !interactionEmailSent && !sessionStorage.getItem("nb_interaction_alert_sent")) {
      sendInteractionAlert();
    }
  }

  function attachPopupListeners() {
    const gh = document.querySelector(".github-item");
    const li = document.querySelector(".linkedin-item");

    if (gh && !gh.dataset.trackerBound) {
      gh.dataset.trackerBound = "true";
      ["mouseenter", "focusin", "touchstart", "click"].forEach((evt) => {
        gh.addEventListener(evt, () => markInteraction("GitHub"), { passive: true });
      });
    }

    if (li && !li.dataset.trackerBound) {
      li.dataset.trackerBound = "true";
      ["mouseenter", "focusin", "touchstart", "click"].forEach((evt) => {
        li.addEventListener(evt, () => markInteraction("LinkedIn"), { passive: true });
      });
    }
  }

  async function sendVisitAlert() {
    if (visitEmailSent) return;
    visitEmailSent = true;
    sessionStorage.setItem("nb_visitor_alert_sent", "true");

    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    const geo = await fetchGeolocation();
    const dev = getDeviceInfo();
    const scr = getScreenInfo();

    const popupOpenedInitial = scr.isExpandedOnOpen
      ? "true (Wide screen >= 1380px, auto-expanded side-by-side)"
      : "false (Screen < 1380px, collapsed into circular icon)";

    const popupInteracted = hasInteractedWithPopups ? `true (${Array.from(interactedItems).join(", ")})` : "false (Not hovered yet)";

    const payload = {
      _subject: `New Visitor: ${geo.city}, ${geo.country} (${dev.os} ${dev.deviceType})`,
      _template: "table",
      _captcha: "false",
      City: geo.city,
      Country: geo.country,
      Region: geo.region || "N/A",
      "Network / ISP": geo.isp,
      "Device & OS": `${dev.os} (${dev.browser})`,
      "Device Type": dev.deviceType,
      "Screen Resolution": scr.resolution,
      "Viewport Window": `${scr.viewport} (${scr.viewportCategory})`,
      "Pop-up Expanded on Open": popupOpenedInitial,
      "Pop-up Interacted": popupInteracted,
      "Landing Page": window.location.pathname || "/",
      Referrer: document.referrer || "Direct / Bookmark",
      "Visitor Timezone": geo.timezone,
      "Recorded At": new Date().toLocaleString(),
    };

    try {
      fetch(RECIPIENT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    } catch (e) {}
  }

  async function sendInteractionAlert() {
    if (interactionEmailSent) return;
    interactionEmailSent = true;
    sessionStorage.setItem("nb_interaction_alert_sent", "true");

    const geo = await fetchGeolocation();
    const dev = getDeviceInfo();
    const scr = getScreenInfo();

    const payload = {
      _subject: `Visitor Interaction: ${geo.city} opened ${Array.from(interactedItems).join(" & ")} popup`,
      _template: "table",
      _captcha: "false",
      "Visitor Location": `${geo.city}, ${geo.country}`,
      "Pop-up Viewed": Array.from(interactedItems).join(", "),
      "Device & OS": `${dev.os} (${dev.browser})`,
      "Viewport Window": `${scr.viewport} (${scr.viewportCategory})`,
      "Interaction Time": new Date().toLocaleString(),
    };

    try {
      fetch(RECIPIENT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    } catch (e) {}
  }

  function init() {
    if (!shouldTrack()) return;

    // Attach listeners to GitHub & LinkedIn items
    attachPopupListeners();

    // Re-check for elements in case they are injected dynamically
    const observer = new MutationObserver(() => {
      attachPopupListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Schedule visit alert after 5s to allow for immediate interaction
    timerId = setTimeout(sendVisitAlert, SEND_DELAY_MS);

    // If the visitor leaves before 5s, dispatch immediately
    window.addEventListener("pagehide", sendVisitAlert, { once: true });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        sendVisitAlert();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
