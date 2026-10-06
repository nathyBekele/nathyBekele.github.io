/**
 * Visitor Alert Tracker for nathybekele.github.io
 * Dispatches an instant visitor notification with academic network detection,
 * referring source, geolocation, device info, screen dimensions,
 * and popup visibility/interaction status via FormSubmit.co.
 */
(function () {
  "use strict";

  if (window.__nbVisitorTrackerLoaded) return;
  window.__nbVisitorTrackerLoaded = true;

  // FormSubmit endpoint (using your encrypted token to keep your personal email private)
  const RECIPIENT_ENDPOINT = "https://formsubmit.co/ajax/c32b324251b6f1c1cf8c2732cbb14169";

  let hasInteractedWithPopups = false;
  const interactedItems = new Set();
  let visitEmailSent = false;
  let interactionEmailSent = false;
  let cachedGeo = null;

  function shouldTrack() {
    const isTest = window.location.search.includes("test_alert=1");

    // Filter automated crawlers and headless environments
    if (navigator.webdriver && !isTest) return false;

    // Filter local development unless testing
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isLocal && !isTest) return false;

    // Filter repeated visits in the same session unless test/force
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
            org: data.connection && data.connection.org ? data.connection.org : "",
            domain: data.connection && data.connection.domain ? data.connection.domain : "",
            asn: data.connection && data.connection.asn ? String(data.connection.asn) : "",
            timezone: data.timezone && data.timezone.id ? data.timezone.id : "N/A",
          };
          return cachedGeo;
        }
      }
    } catch (e) {}

    try {
      const res2 = await fetch("https://ipapi.co/json/");
      if (res2.ok) {
        const data2 = await res2.json();
        cachedGeo = {
          city: data2.city || "Unknown City",
          country: data2.country_name || "Unknown Country",
          region: data2.region || "",
          isp: data2.org || "N/A",
          org: data2.org || "",
          domain: "",
          asn: data2.asn || "",
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
      org: "",
      domain: "",
      asn: "",
      timezone: "N/A",
    };
    return cachedGeo;
  }

  function detectAcademicNetwork(geo) {
    const textToScan = [geo.org || "", geo.isp || "", geo.domain || "", geo.asn || ""].join(" ").toLowerCase();
    const domain = (geo.domain || "").toLowerCase();

    // Check academic top-level or second-level domains (.edu, .ac.uk, .edu.et, etc.)
    const isEduDomain = /\.(edu|ac\.[a-z]{2,}|edu\.[a-z]{2,})$/.test(domain) || /\.(edu|ac\.[a-z]{2,}|edu\.[a-z]{2,})\./.test(domain);

    // Common academic and research network keywords across universities worldwide
    const academicKeywords = [
      "university",
      "universität",
      "universite",
      "universiteit",
      "universidad",
      "universita",
      "college",
      "institute of technology",
      "polytechnic",
      "polytechnique",
      "academy of science",
      "national lab",
      "research institute",
      "research center",
      "research council",
      "faculty of",
      "school of medicine",
      "campus network",
      "higher education",
      "academic",
      "observatory",
      "laboratory",
      "max planck",
      "inria",
      "cnrs",
      "fraunhofer",
      "cern",
      "eth zurich",
      "epfl",
      "kaist",
      "tsinghua",
      "peking univ",
      "oxford",
      "cambridge",
      "stanford",
      "harvard",
      "mit ",
      "berkeley",
      "princeton",
      "columbia",
      "carnegie mellon",
      "cmu",
      "eduroam",
      "geant",
      "switch",
      "dfn",
      "renater",
      "jisc",
      "canarie",
      "internet2",
      "cenic",
      "sunet",
      "heanet",
      "aarnet",
      "rediris",
      "garr",
      "belnet",
      "surfnet",
    ];

    const matchedKeyword = academicKeywords.find((kw) => textToScan.includes(kw));

    if (isEduDomain || matchedKeyword) {
      const institutionName = geo.org || geo.isp || geo.domain || "Academic Network";
      return {
        isAcademic: true,
        badge: "🎓 YES - Academic / University Network",
        institution: institutionName,
      };
    }

    return {
      isAcademic: false,
      badge: "No (Commercial / Consumer ISP)",
      institution: geo.isp || geo.org || "N/A",
    };
  }

  function analyzeReferrer() {
    const ref = document.referrer || "";
    const urlParams = new URLSearchParams(window.location.search);

    // Extract custom campaign / referral parameters
    const trackingTags = [];
    ["ref", "p", "prof", "c", "source", "from", "utm_source", "utm_medium", "utm_campaign"].forEach((param) => {
      const val = urlParams.get(param);
      if (val) trackingTags.push(`${param}=${val}`);
    });

    const trackingSummary = trackingTags.length > 0 ? trackingTags.join(", ") : "None";

    if (!ref) {
      return {
        sourceCategory:
          trackingTags.length > 0
            ? "📧 Email Link / Targeted Campaign (Direct or Email Client)"
            : "Direct Visit / Typed URL / Desktop Email App (Apple Mail, Outlook, Thunderbird, etc.)",
        referrerUrl: "(None / Direct)",
        trackingTags: trackingSummary,
      };
    }

    let refHostname = "";
    try {
      refHostname = new URL(ref).hostname.toLowerCase();
    } catch (e) {
      refHostname = ref.toLowerCase();
    }

    // Webmail clients
    if (refHostname.includes("mail.google.com")) {
      return {
        sourceCategory: "📧 Gmail (Webmail Link)",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("outlook.live.com") || refHostname.includes("outlook.office.com") || refHostname.includes("outlook.com")) {
      return {
        sourceCategory: "📧 Outlook / Office 365 (Webmail Link)",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("mail.yahoo.com")) {
      return {
        sourceCategory: "📧 Yahoo Mail (Webmail Link)",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("proton.me") || refHostname.includes("protonmail.com")) {
      return {
        sourceCategory: "📧 ProtonMail (Webmail Link)",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }

    // Search engines
    if (refHostname.includes("google.") && !refHostname.includes("scholar")) {
      return {
        sourceCategory: "🔍 Google Search",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("bing.com")) {
      return {
        sourceCategory: "🔍 Bing Search",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("duckduckgo.com")) {
      return {
        sourceCategory: "🔍 DuckDuckGo Search",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }

    // Professional & Academic networks
    if (refHostname.includes("linkedin.com") || refHostname.includes("lnkd.in")) {
      return {
        sourceCategory: "💼 LinkedIn",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("github.com")) {
      return {
        sourceCategory: "🐙 GitHub",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("twitter.com") || refHostname.includes("x.com") || refHostname.includes("t.co")) {
      return {
        sourceCategory: "🐦 X (Twitter)",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("scholar.google.")) {
      return {
        sourceCategory: "🎓 Google Scholar",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("arxiv.org")) {
      return {
        sourceCategory: "📄 arXiv",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }
    if (refHostname.includes("zenodo.org")) {
      return {
        sourceCategory: "📄 Zenodo",
        referrerUrl: ref,
        trackingTags: trackingSummary,
      };
    }

    return {
      sourceCategory: `🌐 External Site (${refHostname})`,
      referrerUrl: ref,
      trackingTags: trackingSummary,
    };
  }

  function markInteraction(name) {
    hasInteractedWithPopups = true;
    interactedItems.add(name);

    // If the visit alert was already sent, notify about the interaction
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

    const geo = await fetchGeolocation();
    const dev = getDeviceInfo();
    const scr = getScreenInfo();
    const academic = detectAcademicNetwork(geo);
    const refInfo = analyzeReferrer();

    const popupOpenedInitial = scr.isExpandedOnOpen
      ? "true (Wide screen >= 1380px, auto-expanded side-by-side)"
      : "false (Screen < 1380px, collapsed into circular icon)";

    const popupInteracted = hasInteractedWithPopups ? `true (${Array.from(interactedItems).join(", ")})` : "false (Not hovered yet)";

    // Prominent subject line: highlights academic visitors immediately
    const subjectPrefix = academic.isAcademic ? `🎓 [ACADEMIC VISITOR: ${academic.institution}]` : `New Visitor: ${geo.city}, ${geo.country}`;

    const payload = {
      _subject: `${subjectPrefix} (${dev.os} ${dev.deviceType})`,
      _template: "table",
      _captcha: "false",
      "Academic / University Network": academic.isAcademic ? `🎓 YES (${academic.institution})` : `No (${geo.isp || "Commercial ISP"})`,
      "Referring Source": refInfo.sourceCategory,
      "Referrer URL": refInfo.referrerUrl,
      "URL Tracking Tags": refInfo.trackingTags,
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
      "Visitor Timezone": geo.timezone,
      "Recorded At": new Date().toLocaleString(),
    };

    if (window.location.search.includes("test_alert=1")) {
      console.log("[VisitorTracker] 🚀 Dispatching instant visit alert payload:", payload);
    }

    try {
      fetch(RECIPIENT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
      })
        .then((res) => res.json())
        .then((data) => {
          if (window.location.search.includes("test_alert=1")) {
            console.log("[VisitorTracker] ✅ FormSubmit response:", data);
          }
        })
        .catch((err) => {
          if (window.location.search.includes("test_alert=1")) {
            console.error("[VisitorTracker] ❌ Error:", err);
          }
        });
    } catch (e) {}
  }

  async function sendInteractionAlert() {
    if (interactionEmailSent) return;
    interactionEmailSent = true;
    sessionStorage.setItem("nb_interaction_alert_sent", "true");

    const geo = await fetchGeolocation();
    const dev = getDeviceInfo();
    const scr = getScreenInfo();
    const academic = detectAcademicNetwork(geo);

    const subjectTag = academic.isAcademic ? `🎓 [Academic: ${academic.institution}]` : geo.city;

    const payload = {
      _subject: `Visitor Interaction: ${subjectTag} opened ${Array.from(interactedItems).join(" & ")} popup`,
      _template: "table",
      _captcha: "false",
      "Visitor Location": `${geo.city}, ${geo.country}`,
      "Academic Network": academic.isAcademic ? `🎓 YES (${academic.institution})` : "No",
      "Pop-up Viewed": Array.from(interactedItems).join(", "),
      "Device & OS": `${dev.os} (${dev.browser})`,
      "Viewport Window": `${scr.viewport} (${scr.viewportCategory})`,
      "Interaction Time": new Date().toLocaleString(),
    };

    if (window.location.search.includes("test_alert=1")) {
      console.log("[VisitorTracker] 🚀 Dispatching interaction alert payload:", payload);
    }

    try {
      fetch(RECIPIENT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
      })
        .then((res) => res.json())
        .then((data) => {
          if (window.location.search.includes("test_alert=1")) {
            console.log("[VisitorTracker] ✅ Interaction FormSubmit response:", data);
          }
        })
        .catch((err) => {
          if (window.location.search.includes("test_alert=1")) {
            console.error("[VisitorTracker] ❌ Interaction Error:", err);
          }
        });
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

    // Send visit alert immediately as soon as data is ready - no delay!
    sendVisitAlert();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
