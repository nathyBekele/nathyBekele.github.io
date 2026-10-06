---
layout: about
title: about
permalink: /
subtitle: <span class="subtitle-role">Software Engineer</span> <span class="subtitle-sep">•</span> <a href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia" target="_blank" rel="noopener noreferrer" class="subtitle-loc-link"><i class="fa-solid fa-location-dot"></i> Addis Ababa, Ethiopia</a> <span class="subtitle-sep">•</span> <a href="mailto:natnaelbekele142@gmail.com" class="subtitle-email-link"><i class="fa-regular fa-envelope"></i> natnaelbekele142@gmail.com</a>

profile:
  align: right
  image: natnael.jpg
  image_circular: false # crops the image to make it circular

selected_papers: true
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a software engineer at [Vula](https://vula.vc) building agentic pre-investment workflows and automations for investment firms based in UK and South Africa. I am also an aspiring researcher interested in how agents can be used in critical systems like finance and healthcare, especially when they run on open-weight models, since those can carry hidden intentions that are hard to detect.

Previously I was a competitive programmer, a regional finalist at ICPC 2021. I later led the competitive programming camp at [A2SV](https://a2sv.org) for the 2022, 2023 and 2024 batches, training students in DSA problem solving (Codeforces and LeetCode style), which helped over 100 students land internships at Google, AWS, Palantir, Bloomberg and others ([check placements here](https://www.a2sv.org/placements)).

<style>
  html, body {
    overflow-x: clip;
  }

  /* Keep main text clean & spacious */
  .post {
    position: relative;
  }

  /* Spacing between Bio and Selected Publications */
  .post article > h2 {
    margin-top: 3.5rem !important;
    margin-bottom: 1.25rem !important;
  }

  /* Interactive Publication Thumbnail Link */
  .publication-thumbnail-link {
    display: block !important;
    text-decoration: none !important;
    cursor: pointer !important;
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.2s ease;
  }

  .publication-thumbnail-link:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    filter: brightness(1.03);
  }

  .publication-thumbnail-link:active {
    transform: translateY(0) scale(1);
  }

  .publication-thumbnail-link figure {
    margin: 0 !important;
    cursor: pointer !important;
  }

  .publication-thumbnail-link img.preview {
    display: block !important;
    cursor: pointer !important;
    width: 100% !important;
    height: auto !important;
    pointer-events: auto !important;
  }

  /* Profile headshot in main text flow */
  .profile {
    display: block !important;
    float: right !important;
    width: 160px !important;
    max-width: 160px !important;
    margin-left: 1.5rem !important;
    margin-bottom: 1.5rem !important;
    position: relative !important;
  }

  .profile figure {
    margin: 0 !important;
    width: 160px !important;
    max-width: 160px !important;
  }

  .profile figure img {
    width: 160px !important;
    height: auto !important;
    border-radius: 8px !important;
    display: block !important;
  }

  /* Subtitle & Email under Title */
  .desc {
    margin-top: 0.25rem !important;
    margin-bottom: 1.25rem !important;
    font-size: 0.92rem !important;
    color: var(--global-text-color-light, #8b949e) !important;
    line-height: 1.5 !important;
  }

  .subtitle-role {
    font-weight: 600;
    color: var(--global-text-color, #e6edf3);
  }

  .subtitle-sep {
    margin: 0 5px;
    opacity: 0.4;
  }

  .subtitle-loc-link,
  .subtitle-email-link {
    color: var(--global-text-color-light, #8b949e) !important;
    text-decoration: none !important;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    font-size: 0.92rem;
    transition: color 0.2s ease, opacity 0.2s ease;
  }

  .subtitle-loc-link:hover,
  .subtitle-email-link:hover {
    color: var(--global-text-color, #e6edf3) !important;
    text-decoration: underline !important;
    opacity: 1;
  }

  /* =========================================================================
     Responsive Social Cards:
     - Wide Screens (>= 1380px): Permanently Expanded in the right empty space
     - Smaller Screens (< 1380px): Collapsed into icons under profile headshot;
       pop-up modals smoothly render on hover if there is enough space.
     ========================================================================= */

  /* Base popout card layout */
  .social-popout-card {
    background: var(--global-card-bg-color, #1e1e1e);
    border: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    text-align: left;
    color: var(--global-text-color);
  }

  .social-popout-card::after {
    display: none !important;
  }

  /* Completely disable arrow pointer on LinkedIn popup */
  .linkedin-item .social-popout-card::before {
    display: none !important;
  }

  .profile-social-item .social-icon-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    color: var(--global-text-color) !important;
    opacity: 0.9;
    transition: all 0.2s ease;
    text-decoration: none !important;
  }

  .profile-social-item:hover .social-icon-btn,
  .profile-social-item:focus-within .social-icon-btn {
    color: var(--global-theme-color) !important;
    opacity: 1;
    transform: scale(1.08);
  }

  /* Circling Border Beam Light */
  .border-beam-svg {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 36px !important;
    height: 36px !important;
    pointer-events: none !important;
    overflow: visible !important;
    border-radius: 8px !important;
    z-index: 2 !important;
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }

  .border-beam-glow {
    fill: none;
    stroke: #38bdf8;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-dasharray: 28 95;
    stroke-dashoffset: 0;
    opacity: 0;
    filter: drop-shadow(0 0 3px rgba(56, 189, 248, 0.85));
  }

  html[data-theme='light'] .border-beam-glow {
    stroke: #0284c7;
    filter: drop-shadow(0 0 2.5px rgba(2, 132, 199, 0.65));
  }

  .github-item .border-beam-glow {
    animation: border-beam-github 5.5s linear infinite;
  }

  .linkedin-item .border-beam-glow {
    animation: border-beam-linkedin 5.5s linear infinite;
  }

  .profile-social-item:hover .border-beam-svg,
  .profile-social-item:focus-within .border-beam-svg {
    opacity: 0 !important;
    visibility: hidden !important;
  }

  @keyframes border-beam-github {
    0% {
      opacity: 0;
      stroke-dashoffset: 0;
    }
    1.5% {
      opacity: 1;
      stroke-dashoffset: -10;
    }
    17% {
      opacity: 1;
      stroke-dashoffset: -110;
    }
    19.1% {
      opacity: 0;
      stroke-dashoffset: -123;
    }
    100% {
      opacity: 0;
      stroke-dashoffset: -123;
    }
  }

  @keyframes border-beam-linkedin {
    0%,
    15% {
      opacity: 0;
      stroke-dashoffset: 0;
    }
    16.5% {
      opacity: 1;
      stroke-dashoffset: -10;
    }
    32.5% {
      opacity: 1;
      stroke-dashoffset: -110;
    }
    34.5% {
      opacity: 0;
      stroke-dashoffset: -123;
    }
    100% {
      opacity: 0;
      stroke-dashoffset: -123;
    }
  }

  /* 1. Large Desktops (>= 1380px): Plenty of space on the right -> Permanently Expanded */
  @media (min-width: 1380px) {
    .border-beam-svg {
      display: none !important;
    }

    .container {
      margin-left: max(24px, calc(100vw - 1380px + 35px)) !important;
      margin-right: auto !important;
    }

    .profile-social-icons {
      position: absolute !important;
      left: calc(100% + 18px) !important;
      top: 0 !important;
      width: 331px !important;
      max-width: none !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 14px !important;
      font-size: 1.35rem;
      flex-shrink: 0;
      z-index: 100 !important;
    }

    .profile-social-item {
      position: relative;
      display: flex !important;
      flex-direction: row !important;
      align-items: flex-start !important;
      gap: 10px !important;
      width: 100% !important;
    }

    .profile-social-item .social-icon-btn {
      width: 32px !important;
      height: 32px !important;
      margin-top: 12px !important;
      flex-shrink: 0 !important;
    }

    .social-popout-card {
      position: relative !important;
      left: auto !important;
      right: auto !important;
      top: auto !important;
      bottom: auto !important;
      flex: 1 1 auto !important;
      width: calc(100% - 42px) !important;
      max-width: none !important;
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      transform: none !important;
      z-index: 10;
    }

    /* Left-pointing arrow towards social icon */
    .social-popout-card::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 20px;
      width: 12px;
      height: 12px;
      background: var(--global-card-bg-color, #1e1e1e);
      border-left: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
      border-bottom: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
      border-top: none;
      border-right: none;
      transform: rotate(45deg);
      z-index: 2;
    }

    .linkedin-item .social-popout-card::before {
      display: none !important;
    }

    .github-item .social-popout-card::before {
      background: #151515 !important;
      border-color: var(--global-divider-color, rgba(255, 255, 255, 0.12)) !important;
      top: 20px !important;
    }

    html[data-theme='light'] .github-item .social-popout-card::before {
      background: #fffefe !important;
      border-color: #e4e2e2 !important;
    }
  }

  /* 2. Smaller Desktops / Laptops (992px to 1379px): Collapsed into icons; Hover to render modal */
  @media (min-width: 992px) and (max-width: 1379px) {
    .container {
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .profile-social-icons {
      position: static !important;
      width: 100% !important;
      max-width: 160px !important;
      display: flex !important;
      flex-direction: row !important;
      justify-content: center !important;
      gap: 12px !important;
      margin-top: 10px !important;
      z-index: 100 !important;
    }

    .profile-social-item {
      position: relative !important;
      display: inline-flex !important;
    }

    .profile-social-item .social-icon-btn {
      width: 36px !important;
      height: 36px !important;
      margin-top: 0 !important;
      background: var(--global-card-bg-color, #1e1e1e) !important;
      border: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.15)) !important;
      border-radius: 8px !important;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15) !important;
      font-size: 1.15rem !important;
    }

    /* Pop out horizontally to the LEFT of the profile column with vertical headroom */
    .social-popout-card {
      position: absolute !important;
      right: calc(100% + 16px) !important;
      left: auto !important;
      top: auto !important;
      bottom: -30px !important;
      width: 325px !important;
      max-width: calc(100vw - 40px) !important;
      max-height: calc(100vh - 120px) !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transform: translateX(8px) !important;
      transition:
        opacity 0.22s ease,
        transform 0.22s ease,
        visibility 0.22s ease !important;
      z-index: 9999 !important;
      box-shadow:
        0 16px 40px rgba(0, 0, 0, 0.55),
        0 4px 16px rgba(0, 0, 0, 0.3) !important;
    }

    /* Invisible hover bridge between icon and popout card */
    .social-popout-card::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: -20px;
      width: 20px;
    }

    .profile-social-item:hover .social-popout-card,
    .profile-social-item:focus-within .social-popout-card {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      transform: translateX(0) !important;
    }

    .github-item .social-popout-card {
      bottom: -15px !important;
    }

    /* Right-pointing arrow toward the GitHub icon */
    .github-item .social-popout-card::before {
      content: '';
      position: absolute;
      top: auto !important;
      bottom: 23px !important;
      left: auto !important;
      right: -6px !important;
      width: 12px;
      height: 12px;
      background: #151515 !important;
      border-top: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
      border-right: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
      border-bottom: none !important;
      border-left: none !important;
      transform: rotate(45deg);
      z-index: 2;
    }

    html[data-theme='light'] .github-item .social-popout-card::before {
      background: #fffefe !important;
      border-color: #e4e2e2 !important;
    }

    /* Remove the arrow thing coming out of the LinkedIn icon */
    .linkedin-item .social-popout-card::before {
      display: none !important;
    }
  }

  /* 3. Mobile & Tablets (< 992px): Stacked Profile, Collapsed Icons */
  @media (max-width: 991px) {
    .profile {
      float: none !important;
      max-width: 100% !important;
      width: 100% !important;
      margin-left: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
    }

    .profile-social-icons {
      position: static !important;
      width: 100% !important;
      max-width: 160px !important;
      margin-top: 0.85rem !important;
      display: flex !important;
      flex-direction: row !important;
      justify-content: center !important;
      gap: 12px !important;
      font-size: 1.15rem;
      flex-shrink: 0;
    }

    .profile-social-item {
      position: relative !important;
      display: inline-flex !important;
    }

    .profile-social-item .social-icon-btn {
      width: 36px !important;
      height: 36px !important;
      margin-top: 0 !important;
      background: var(--global-card-bg-color, #1e1e1e) !important;
      border: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.15)) !important;
      border-radius: 8px !important;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15) !important;
    }

    .social-popout-card {
      position: absolute !important;
      top: calc(100% + 10px) !important;
      left: 50% !important;
      right: auto !important;
      width: 320px !important;
      max-width: calc(100vw - 32px) !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transform: translateX(-50%) translateY(6px) !important;
      transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease !important;
      z-index: 9999 !important;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.2) !important;
    }

    .profile-social-item:hover .social-popout-card,
    .profile-social-item:focus-within .social-popout-card {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      transform: translateX(-50%) translateY(0) !important;
    }

    .social-popout-card::before {
      content: '';
      position: absolute;
      top: -6px !important;
      left: 50% !important;
      margin-left: -6px !important;
      width: 12px;
      height: 12px;
      background: var(--global-card-bg-color, #1e1e1e);
      border-left: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
      border-top: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
      border-bottom: none !important;
      border-right: none !important;
      transform: rotate(45deg);
      z-index: 2;
    }

    .github-item .social-popout-card::before {
      background: #151515 !important;
      border-color: var(--global-divider-color, rgba(255, 255, 255, 0.12)) !important;
    }

    html[data-theme='light'] .github-item .social-popout-card::before {
      background: #fffefe !important;
      border-color: #e4e2e2 !important;
    }

    .linkedin-item .social-popout-card::before {
      display: none !important;
    }
  }

  /* Card Interior Styling */
  .social-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .social-card-icon {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    flex-shrink: 0;
  }

  .email-badge {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.18), rgba(249, 115, 22, 0.18));
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
  }

  .github-badge {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(99, 102, 241, 0.18));
    color: var(--global-text-color);
    border: 1px solid rgba(168, 85, 247, 0.3);
  }

  .linkedin-badge {
    background: rgba(10, 102, 194, 0.18);
    color: #0a66c2;
    border: 1px solid rgba(10, 102, 194, 0.3);
  }

  .social-card-meta {
    overflow: hidden;
  }

  .social-card-title {
    font-size: 13px;
    font-weight: 700;
    line-height: 1.25;
    color: var(--global-text-color);
  }

  .social-card-sub {
    font-size: 11px;
    color: var(--global-text-color-light);
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .social-card-status {
    font-size: 11px;
    color: var(--global-text-color);
    background: var(--global-code-bg-color, rgba(0, 0, 0, 0.05));
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    padding: 6px 9px;
    margin-bottom: 11px;
    display: flex;
    align-items: center;
    line-height: 1.35;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 6px rgba(34, 197, 94, 0.7);
    margin-right: 7px;
    flex-shrink: 0;
  }

  .github-card {
    padding: 0 !important;
    background: #151515 !important;
    border: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12)) !important;
    border-radius: 10px !important;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    overflow: hidden !important;
  }

  html[data-theme='light'] .github-card {
    background: #fffefe !important;
    border-color: #e4e2e2 !important;
  }

  .gh-svg-link {
    display: block !important;
    width: 100% !important;
    text-decoration: none !important;
    overflow: hidden !important;
    transition: filter 0.18s ease;
  }

  .gh-svg-link:hover {
    filter: brightness(1.04);
  }

  .gh-stats-svg {
    width: 100% !important;
    height: auto !important;
    display: block !important;
    border: none !important;
    outline: none !important;
  }

  :root .gh-stats-svg.only-light {
    display: block !important;
  }

  :root .gh-stats-svg.only-dark {
    display: none !important;
  }

  html[data-theme='dark'] .gh-stats-svg.only-light {
    display: none !important;
  }

  html[data-theme='dark'] .gh-stats-svg.only-dark {
    display: block !important;
  }

  /* LinkedIn Popout Card Specifics */
  .linkedin-card {
    max-width: none;
    min-height: auto !important;
    height: auto;
    padding: 0 !important;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: #14171a !important;
    border: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  html[data-theme='light'] .linkedin-card {
    background: #f8fafc !important;
    border: 1px solid #e4e2e2 !important;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05) !important;
  }

  .li-card-scroll {
    flex: 1 1 auto;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 6px;
    border-radius: 10px;
    scrollbar-width: thin;
    scrollbar-color: rgba(128, 128, 128, 0.4) transparent;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .li-card-scroll::-webkit-scrollbar {
    width: 5px;
  }

  .li-card-scroll::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.4);
    border-radius: 3px;
  }

  /* Isolated Section Cards (Experience & Education) */
  .li-isolated-card {
    flex-shrink: 0 !important;
    background: transparent !important;
    border: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.12));
    border-radius: 8px;
    padding: 11px 12px;
    box-shadow: none !important;
  }

  html[data-theme='light'] .li-isolated-card {
    background: transparent !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: none !important;
  }

  .li-card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 9px;
  }

  .li-card-head-title {
    font-size: 13.5px;
    font-weight: 700;
    color: var(--global-text-color);
    letter-spacing: -0.01em;
  }

  .li-card-head-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .li-icon-btn {
    background: transparent;
    border: none;
    color: var(--global-text-color-light, #8b949e);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.18s ease;
    font-size: 12px;
    padding: 0;
  }

  .li-icon-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    color: var(--global-text-color);
  }

  /* Entry row */
  .li-entry {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .li-logo-wrap {
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background: #ffffff;
    border: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.15));
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  html[data-theme='light'] .li-logo-wrap {
    border-color: #e2e8f0 !important;
  }

  .li-logo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .li-aau-logo .li-logo-img {
    object-fit: contain;
    padding: 2.5px;
  }

  .li-entry-content {
    flex: 1;
    min-width: 0;
  }

  .li-entry-role {
    font-size: 12px;
    font-weight: 600;
    color: var(--global-text-color);
    line-height: 1.25;
    margin-bottom: 2px;
  }

  .li-entry-company {
    font-size: 11px;
    font-weight: 400;
    color: var(--global-text-color);
    margin-bottom: 2px;
    line-height: 1.3;
  }

  /* Interactive hover links for companies and universities */
  .li-hover-link {
    color: inherit !important;
    text-decoration: none !important;
    display: inline !important;
    cursor: pointer !important;
    transition: color 0.16s ease;
  }

  .li-hover-link:hover {
    color: var(--global-theme-color, #22c55e) !important;
    text-decoration: underline !important;
  }

  .li-logo-link {
    display: flex !important;
    text-decoration: none !important;
    cursor: pointer !important;
    transition: transform 0.18s ease, filter 0.18s ease, box-shadow 0.18s ease;
  }

  .li-logo-link:hover {
    transform: scale(1.06);
    filter: brightness(1.08);
  }

  .li-entry-meta {
    font-size: 10px;
    font-weight: 400;
    color: var(--global-text-color-light, #8b949e);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 1px;
    line-height: 1.35;
  }

  .li-card-divider {
    height: 1px;
    background: var(--global-divider-color, rgba(255, 255, 255, 0.08));
    margin: 8px 0 8px 43px;
  }

  html[data-theme='light'] .li-card-divider {
    background: #e2e8f0 !important;
  }

  html[data-theme='light'] .li-card-head-title {
    color: #2f80ed !important;
  }

  html[data-theme='light'] .li-entry-role,
  html[data-theme='light'] .li-entry-role a {
    color: #2f80ed !important;
  }

  html[data-theme='light'] .li-entry-role a:hover {
    color: #1a60be !important;
  }

  html[data-theme='light'] .li-entry-company,
  html[data-theme='light'] .li-entry-company a {
    color: #1f2328 !important;
  }

  html[data-theme='light'] .li-entry-company a:hover {
    color: #2f80ed !important;
  }

  html[data-theme='light'] .li-entry-meta {
    color: #57606a !important;
  }

  .social-card-actions {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .social-card-btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 11.5px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 7px;
    border: 1px solid var(--global-divider-color);
    background: var(--global-code-bg-color, rgba(0, 0, 0, 0.05));
    color: var(--global-text-color) !important;
    text-decoration: none !important;
    cursor: pointer;
    transition: all 0.18s ease;
    line-height: 1.2;
  }

  .social-card-btn:hover {
    background: var(--global-theme-color) !important;
    border-color: var(--global-theme-color) !important;
    color: #ffffff !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .social-card-btn:hover i,
  .social-card-btn:hover span {
    color: #ffffff !important;
  }

  .social-card-footer {
    margin-top: 8px;
    padding-top: 7px;
    border-top: 1px dashed var(--global-divider-color);
    font-size: 10px;
    color: var(--global-text-color-light);
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 860px) {
    .profile {
      float: none !important;
      max-width: 100% !important;
      width: 100% !important;
      margin-left: 0 !important;
      margin-top: 1.5rem !important;
      margin-bottom: 2rem !important;
    }
    .profile figure {
      align-self: center !important;
    }
  }

  .social,
  .contact-note {
    display: none !important;
  }
  
  #shared-context-wrapper {
    position: relative;
    clear: both;
    display: none;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: transparent;
    border: 1px solid var(--global-divider-color, rgba(0, 0, 0, 0.08));
    border-radius: 12px;
  }
  
  #trust-graph-wrapper {
    margin-bottom: 0;
  }

  .shared-extras-container {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--global-divider-color);
  }

  .shared-extras-list {
    margin: 0;
    padding-left: 20px;
    color: var(--global-text-color);
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .shared-extras-list li {
    margin-bottom: 4px;
  }

  .trust-header {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .trust-header h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--global-text-color);
  }

  .trust-guide {
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    display: flex;
    align-items: center;
    gap: 6px;
    text-align: right;
  }

  .trust-guide i {
    color: var(--global-theme-color);
    font-size: 0.85rem;
  }
  
  .trust-guide strong {
    color: var(--global-text-color);
  }

  /* Graph Legend Footer */
  .trust-graph-legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    padding: 6px 14px;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    font-size: 11.5px;
    color: var(--global-text-color-light);
  }

  .trust-legend-main {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .trust-legend-label {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    font-size: 11.5px;
    color: var(--global-text-color);
  }

  .trust-legend-label i {
    color: var(--global-theme-color);
    font-size: 11px;
  }

  .trust-legend-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    padding: 2px 8px;
    border-radius: 6px;
  }

  .trust-legend-slow {
    color: hsl(16, 92%, 52%);
    font-weight: 600;
  }

  .trust-legend-fast {
    color: hsl(160, 96%, 44%);
    font-weight: 600;
  }

  .trust-legend-sub {
    color: var(--global-text-color-light);
    font-size: 10px;
  }

  .trust-legend-track {
    width: 48px;
    height: 4px;
    background: linear-gradient(90deg, hsl(16, 92%, 52%), hsl(44, 94%, 51%), hsl(76, 88%, 48%), hsl(114, 80%, 46%), hsl(160, 96%, 44%));
    border-radius: 2px;
    position: relative;
    overflow: hidden;
  }

  .trust-legend-track::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
    animation: legendStream 1.4s infinite linear;
  }

  @keyframes legendStream {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }

  .trust-legend-scale {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--global-text-color-light);
    font-size: 11px;
  }

  @media (max-width: 640px) {
    .trust-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
    .trust-graph-legend {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }
    .trust-legend-main {
      flex-wrap: wrap;
    }
  }

  .trust-header p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }

  #trust-svg-container {
    width: 100%;
    height: 280px;
    background: transparent;
    border-radius: 8px;
    overflow: visible;
  }

  /* Animations for graph loading and flow */
  @keyframes drawEdge {
    from { stroke-dasharray: 0, 1000; }
    to { stroke-dasharray: 1000, 0; }
  }

  @keyframes flowDash {
    to { stroke-dashoffset: -20; }
  }

  @keyframes popNode {
    0% { transform: scale(0); opacity: 0; }
    80% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  .trust-edge {
    fill: none;
    stroke: var(--global-theme-color);
    stroke-width: 2;
    stroke-opacity: 0.35;
    transition: stroke-width 0.2s, stroke-opacity 0.2s;
    animation: drawEdge 1.2s ease-out forwards;
  }

  /* Invisible thick stroke for easier hover on edges */
  .trust-edge-hover {
    fill: none;
    stroke: transparent;
    stroke-width: 30;
    cursor: pointer;
  }

  .trust-edge-flow {
    fill: none;
    stroke: var(--global-theme-color);
    stroke-width: 2;
    stroke-opacity: 0.6;
    stroke-dasharray: 6 4;
    animation: flowDash 0.8s linear infinite;
    pointer-events: none;
    opacity: 1; /* Always show the streaming animation */
    transition: opacity 0.3s;
  }

  /* Make flow thicker when hovering specific node/edge */
  .trust-edge-flow.active {
    stroke-width: 3.5px !important;
    stroke-opacity: 1 !important;
    opacity: 1;
    filter: drop-shadow(0 0 4px currentColor);
  }

  /* Edge Details Modal Polish */
  .trust-tooltip.edge-tooltip {
    width: 320px;
    max-width: calc(100% - 24px);
    padding: 14px 16px;
    text-align: left;
    border-radius: 12px;
    background: var(--global-card-bg-color, #1e1e1e);
    border: 1px solid var(--global-divider-color);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28), 0 2px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .trust-tooltip.edge-tooltip::after {
    left: var(--arrow-left, 50%);
    transform: translateX(-50%) rotate(45deg);
    background: var(--global-card-bg-color, #1e1e1e);
  }

  .trust-tooltip.edge-tooltip.trust-tooltip-top::after {
    box-shadow: 1px 1px 2px rgba(0,0,0,0.04);
  }

  .trust-edge-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .trust-edge-entities {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .trust-edge-avatar-duo {
    display: flex;
    align-items: center;
    position: relative;
    flex-shrink: 0;
  }

  .trust-edge-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--global-card-bg-color, #1e1e1e);
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  }

  .trust-edge-avatar:last-child {
    margin-left: -6px;
  }

  .trust-edge-duo-names {
    font-size: 12px;
    font-weight: 600;
    color: var(--global-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
  }

  .trust-edge-duo-names .name-sep {
    color: var(--global-theme-color);
    margin: 0 2px;
    font-weight: 700;
  }

  .trust-edge-tier-badge {
    font-size: 10.5px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 999px;
    letter-spacing: 0.2px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .trust-edge-tier-badge.tier-high {
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.28);
  }

  .trust-edge-tier-badge.tier-mid {
    background: rgba(40, 167, 69, 0.1);
    color: var(--global-theme-color);
    border: 1px solid color-mix(in srgb, var(--global-theme-color) 35%, transparent);
  }

  .trust-edge-tier-badge.tier-low {
    background: rgba(245, 158, 11, 0.12);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.28);
  }

  .trust-edge-desc {
    font-size: 13px;
    color: var(--global-text-color);
    line-height: 1.45;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .trust-edge-meter-box {
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .trust-edge-meter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    color: var(--global-text-color-light);
  }

  .trust-edge-meter-header .meter-title {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
  }

  .trust-edge-meter-header .meter-icon {
    font-size: 10px;
    color: var(--global-theme-color);
  }

  .trust-edge-meter-header .meter-icon.tier-high {
    color: #10b981;
  }

  .trust-edge-meter-header .meter-icon.tier-mid {
    color: var(--global-theme-color);
  }

  .trust-edge-meter-header .meter-icon.tier-low {
    color: #f59e0b;
  }

  .trust-edge-meter-header .meter-score {
    color: var(--global-text-color);
    font-size: 11px;
    font-weight: 500;
  }

  .trust-edge-meter-header .meter-score strong {
    font-weight: 700;
  }

  .trust-edge-meter-header .meter-duration {
    font-size: 10px;
    color: var(--global-text-color-light);
    margin-left: 2px;
  }

  .trust-edge-bars {
    display: flex;
    gap: 3px;
    width: 100%;
    height: 5px;
  }

  .trust-edge-bar-segment {
    flex: 1;
    height: 100%;
    border-radius: 2px;
    background: var(--global-divider-color);
    transition: background 0.2s, box-shadow 0.2s;
  }

  .trust-edge-bar-segment.active.tier-high {
    background: #10b981;
    box-shadow: 0 0 4px rgba(16, 185, 129, 0.45);
  }

  .trust-edge-bar-segment.active.tier-mid {
    background: var(--global-theme-color);
    box-shadow: 0 0 4px color-mix(in srgb, var(--global-theme-color) 45%, transparent);
  }

  .trust-edge-bar-segment.active.tier-low {
    background: #f59e0b;
    box-shadow: 0 0 4px rgba(245, 158, 11, 0.45);
  }

  .trust-node {
    transform-origin: center;
    animation: popNode 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    opacity: 0;
  }

  /* Delay node pop-in based on layer for a wave effect */
  .trust-node[data-layer="0"] { animation-delay: 0.1s; }
  .trust-node[data-layer="1"] { animation-delay: 0.4s; }
  .trust-node[data-layer="2"] { animation-delay: 0.7s; }
  .trust-node[data-layer="3"] { animation-delay: 1.0s; }
  .trust-node[data-layer="4"] { animation-delay: 1.3s; }

  .trust-node:hover circle {
    stroke-width: 4px;
    stroke: var(--global-theme-color);
  }

  .trust-node.hoverable {
    cursor: pointer;
  }

  .trust-tooltip {
    display: none;
    position: absolute;
    background: var(--global-card-bg-color, #fff);
    border: 1px solid var(--global-divider-color);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    padding: 12px 16px;
    border-radius: 10px;
    z-index: 1000;
    width: max-content;
    max-width: 250px;
    pointer-events: auto;
    font-family: inherit;
    transition: opacity 0.2s;
  }

  .trust-tooltip::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 12px;
    height: 12px;
    background: var(--global-card-bg-color, #fff);
    border-top: 1px solid var(--global-divider-color);
    border-left: 1px solid var(--global-divider-color);
    transform: rotate(45deg);
  }

  .trust-tooltip-top::after {
    top: auto;
    bottom: -6px;
    border-top: none;
    border-left: none;
    border-bottom: 1px solid var(--global-divider-color);
    border-right: 1px solid var(--global-divider-color);
  }

  /* Node Details Modal */
  .trust-tooltip.node-tooltip {
    width: 310px;
    max-width: calc(100% - 24px);
    padding: 12px 14px;
    text-align: left;
    border-radius: 12px;
    background: var(--global-card-bg-color, #1e1e1e);
    border: 1px solid var(--global-divider-color);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28), 0 2px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .trust-tooltip.node-tooltip::after {
    left: var(--arrow-left, 24px);
    transform: translateX(-50%) rotate(45deg);
    background: var(--global-card-bg-color, #1e1e1e);
  }

  .trust-node-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }

  .trust-node-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--global-divider-color);
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    flex-shrink: 0;
  }

  .trust-node-identity {
    flex: 1;
    min-width: 0;
  }

  .trust-node-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  }

  .trust-node-name {
    font-size: 14.5px;
    font-weight: 700;
    color: var(--global-text-color);
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trust-node-badge {
    font-size: 9.5px;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 999px;
    letter-spacing: 0.2px;
    white-space: nowrap;
    flex-shrink: 0;
    background: rgba(40, 167, 69, 0.1);
    color: var(--global-theme-color);
    border: 1px solid color-mix(in srgb, var(--global-theme-color) 35%, transparent);
  }

  .trust-node-badge.badge-visitor {
    background: rgba(59, 130, 246, 0.12);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
  }

  .trust-node-badge.badge-target {
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
  }

  .trust-node-role {
    font-size: 11.5px;
    color: var(--global-theme-color);
    line-height: 1.3;
    font-weight: 500;
    margin-top: 1px;
  }

  .trust-node-bio {
    font-size: 11.5px;
    color: var(--global-text-color);
    line-height: 1.4;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    padding: 6px 9px;
    border-radius: 7px;
    margin-bottom: 8px;
  }

  .trust-node-links-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .trust-node-link-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 8px;
    background: var(--global-bg-color);
    color: var(--global-text-color) !important;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    text-decoration: none !important;
    transition: all 0.2s ease;
  }

  .trust-node-link-chip i {
    font-size: 10.5px;
    color: var(--global-theme-color);
    transition: color 0.2s ease;
  }

  .trust-node-link-chip .chip-ext {
    font-size: 8.5px;
    opacity: 0.45;
    margin-left: -1px;
  }

  .trust-node-link-chip:hover {
    background: var(--global-theme-color);
    color: #ffffff !important;
    border-color: var(--global-theme-color);
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
  }

  .trust-node-link-chip:hover i,
  .trust-node-link-chip:hover .chip-ext {
    color: #ffffff !important;
    opacity: 1;
  }
</style>

<div id="shared-context-wrapper">
  <div id="trust-graph-wrapper">
    <div class="trust-header">
      <h3 id="trust-title">Shared Networks, Interests and Experiences</h3>
      <div class="trust-guide">
        <i class="fa-solid fa-circle-nodes"></i>
        <span>Hover <strong>nodes</strong> &amp; <strong>edges</strong></span>
      </div>
    </div>
    <div id="trust-svg-container" style="position: relative; overflow: visible;">
      <svg id="trust-svg" width="100%" height="100%" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid meet"></svg>
    </div>
    <div class="trust-graph-legend">
      <div class="trust-legend-main">
        <div class="trust-legend-label">
          <i class="fa-solid fa-bolt"></i>
          <span>Stream speed and color reflects <strong>connection strength</strong>:</span>
        </div>
        <div class="trust-legend-pill">
          <span class="trust-legend-slow">Slow</span>
          <span class="trust-legend-sub">(weak)</span>
          <div class="trust-legend-track"></div>
          <span class="trust-legend-fast">Fast</span>
          <span class="trust-legend-sub">(strong)</span>
        </div>
      </div>
      <div class="trust-legend-scale">
        <span>Scale <strong>1–10</strong></span>
      </div>
    </div>
  </div>
  <div id="trust-tooltip" class="trust-tooltip"></div>

  <div id="shared-extras-wrapper" class="shared-extras-container" style="display: none;"></div>
</div>

<script>
  function relocateSocialIcons() {
    const profile = document.querySelector('.profile');
    const contactIcons = document.querySelector('.contact-icons');
    if (!profile || !contactIcons) return;
    if (profile.querySelector('.profile-social-icons')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'profile-social-icons';

    // Build the interactive social items (GitHub and LinkedIn) with rich cards in the right gutter
    wrapper.innerHTML = `
      <div class="profile-social-item github-item">
        <a href="https://github.com/nathyBekele" aria-label="GitHub" title="GitHub stats & activity (hover to preview)" rel="external nofollow noopener" target="_blank" class="social-icon-btn">
          <i class="fa-brands fa-github"></i>
          <svg class="border-beam-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="border-beam-glow" x="1" y="1" width="34" height="34" rx="7.5" />
          </svg>
        </a>
        <div class="social-popout-card github-card">
          <a href="https://github.com/nathyBekele" target="_blank" rel="noopener noreferrer" class="gh-svg-link">
            <img
              class="only-light gh-stats-svg"
              alt="nathyBekele GitHub Stats"
              src="{{ 'assets/img/github_activity_light.svg' | relative_url }}"
            >
            <img
              class="only-dark gh-stats-svg"
              alt="nathyBekele GitHub Stats"
              src="{{ 'assets/img/github_activity_dark.svg' | relative_url }}"
            >
          </a>
        </div>
      </div>

      <div class="profile-social-item linkedin-item">
        <a href="https://www.linkedin.com/in/natnael-bekele-haile" aria-label="LinkedIn" title="Experience & Education (hover to preview)" rel="external nofollow noopener" target="_blank" class="social-icon-btn">
          <i class="fa-brands fa-linkedin"></i>
          <svg class="border-beam-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="border-beam-glow" x="1" y="1" width="34" height="34" rx="7.5" />
          </svg>
        </a>
        <div class="social-popout-card linkedin-card">
          <!-- Scrollable Area with Isolated Experience & Education Cards (Matching LinkedIn UI) -->
          <div class="li-card-scroll">
            
            <!-- Card 1: Isolated Experience Card -->
            <div class="li-isolated-card">
              <div class="li-card-head">
                <span class="li-card-head-title">Experience</span>
              </div>

              <!-- Experience 1: Vula -->
              <div class="li-entry">
                <a href="https://vula.vc" target="_blank" rel="noopener noreferrer" class="li-logo-wrap li-logo-link" title="Visit Vula">
                  <img src="{{ '/assets/img/logos/vula.png' | relative_url }}" alt="Vula" class="li-logo-img" />
                </a>
                <div class="li-entry-content">
                  <div class="li-entry-role">Software Engineer</div>
                  <div class="li-entry-company">
                    <a href="https://vula.vc" target="_blank" rel="noopener noreferrer" class="li-hover-link" title="Visit Vula">Vula</a> · Full-time
                  </div>
                  <div class="li-entry-meta">
                    <span>Oct 2024 – Present · 2 yrs 1 mo</span>
                  </div>
                  <div class="li-entry-meta">
                    <span>London Area, United Kingdom</span>
                  </div>
                </div>
              </div>

              <div class="li-card-divider"></div>

              <!-- Experience 2: Turing -->
              <div class="li-entry">
                <a href="https://www.turing.com" target="_blank" rel="noopener noreferrer" class="li-logo-wrap li-logo-link" title="Visit Turing">
                  <img src="{{ '/assets/img/logos/turing.png' | relative_url }}" alt="Turing" class="li-logo-img" />
                </a>
                <div class="li-entry-content">
                  <div class="li-entry-role">Python Developer</div>
                  <div class="li-entry-company">
                    <a href="https://www.turing.com" target="_blank" rel="noopener noreferrer" class="li-hover-link" title="Visit Turing">Turing</a> · Full-time
                  </div>
                  <div class="li-entry-meta">
                    <span>Sep 2023 – Oct 2024 · 1 yr 2 mos</span>
                  </div>
                  <div class="li-entry-meta">
                    <span>Palo Alto, California, United States · Remote</span>
                  </div>
                </div>
              </div>

              <div class="li-card-divider"></div>

              <!-- Experience 3: A2SV -->
              <div class="li-entry">
                <a href="https://a2sv.org" target="_blank" rel="noopener noreferrer" class="li-logo-wrap li-logo-link" title="Visit A2SV">
                  <img src="{{ '/assets/img/logos/a2sv.png' | relative_url }}" alt="A2SV | Africa to Silicon Valley" class="li-logo-img" />
                </a>
                <div class="li-entry-content">
                  <div class="li-entry-role">Head of Competitive Programming Education</div>
                  <div class="li-entry-company">
                    <a href="https://a2sv.org" target="_blank" rel="noopener noreferrer" class="li-hover-link" title="Visit A2SV">A2SV | Africa to Silicon Valley</a> · Full-time
                  </div>
                  <div class="li-entry-meta">
                    <span>Nov 2021 – Sep 2024 · 2 yrs 11 mos</span>
                  </div>
                  <div class="li-entry-meta">
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 2: Isolated Education Card -->
            <div class="li-isolated-card">
              <div class="li-card-head">
                <span class="li-card-head-title">Education</span>
              </div>

              <div class="li-entry">
                <a href="https://www.aau.edu.et" target="_blank" rel="noopener noreferrer" class="li-logo-wrap li-aau-logo li-logo-link" title="Visit Addis Ababa University">
                  <img src="{{ '/assets/img/logos/aau.png' | relative_url }}" alt="Addis Ababa University" class="li-logo-img" />
                </a>
                <div class="li-entry-content">
                  <div class="li-entry-role">
                    <a href="https://www.aau.edu.et" target="_blank" rel="noopener noreferrer" class="li-hover-link" title="Visit Addis Ababa University">Addis Ababa University</a>
                  </div>
                  <div class="li-entry-company">BS, Electrical and Computer Engineering</div>
                  <div class="li-entry-meta">
                    <span>2018 – 2023</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;

    const figure = profile.querySelector('figure');
    if (figure) {
      figure.after(wrapper);
    } else {
      profile.appendChild(wrapper);
    }

    const social = document.querySelector('.social');
    if (social) social.style.display = 'none';
  }

  window.copyEmailToClipboard = function(btn) {
    const email = 'natnaelbekele142@gmail.com';
    const originalContent = btn.innerHTML;
    const successContent = '<i class="fa-solid fa-check" style="color:#22c55e;"></i> <span style="color:#22c55e; font-weight:600;">Copied!</span>';
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        btn.innerHTML = successContent;
        setTimeout(() => { btn.innerHTML = originalContent; }, 2200);
      }).catch(() => fallbackCopy(email, btn, originalContent, successContent));
    } else {
      fallbackCopy(email, btn, originalContent, successContent);
    }
  };

  function fallbackCopy(text, btn, originalContent, successContent) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      btn.innerHTML = successContent;
      setTimeout(() => { btn.innerHTML = originalContent; }, 2200);
    } catch (e) {
      console.error('Failed to copy', e);
    }
    document.body.removeChild(textarea);
  }

  function linkPublicationThumbnails() {
    const pubContainers = document.querySelectorAll('.publications');
    if (!pubContainers.length) return;

    pubContainers.forEach((container) => {
      const items = container.querySelectorAll('ol.bibliography > li, .bibliography > li');
      items.forEach((item) => {
        const abbr = item.querySelector('.col.abbr, .abbr');
        if (!abbr) return;

        // Skip if already enclosed in link
        if (abbr.querySelector('a.publication-thumbnail-link')) return;

        const previewImg = abbr.querySelector('img.preview') || abbr.querySelector('img');
        if (!previewImg) return;

        // Determine research link
        let researchUrl = '';
        let paperTitle = 'Read research paper';

        const titleEl = item.querySelector('.title');
        if (titleEl && titleEl.textContent) {
          paperTitle = titleEl.textContent.trim();
        }

        // 1. Check for PDF button
        const links = item.querySelectorAll('.links a');
        for (const a of links) {
          const text = (a.textContent || '').trim().toUpperCase();
          const href = a.getAttribute('href') || '';
          if (text === 'PDF' || href.toLowerCase().endsWith('.pdf')) {
            researchUrl = href;
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
            break;
          }
        }

        // 2. Fallback to DOI button
        if (!researchUrl) {
          for (const a of links) {
            const text = (a.textContent || '').trim().toUpperCase();
            const href = a.getAttribute('href') || '';
            if (text === 'DOI' || href.includes('doi.org')) {
              researchUrl = href;
              break;
            }
          }
        }

        // 3. Fallback to HTML or other publication link
        if (!researchUrl && links.length > 0) {
          researchUrl = links[0].getAttribute('href') || '';
        }

        // Default fallback
        if (!researchUrl) {
          researchUrl = '{{ "/assets/pdf/The_Geometry_of_Dormant_Defection.pdf" | relative_url }}';
        }

        // Remove data-zoomable attribute so medium-zoom doesn't zoom preview image
        previewImg.removeAttribute('data-zoomable');
        previewImg.classList.remove('zoomable');

        // Create clean clone to detach medium-zoom click listener
        const cleanImg = previewImg.cloneNode(true);
        cleanImg.removeAttribute('data-zoomable');
        cleanImg.style.cursor = 'pointer';

        if (previewImg.parentNode) {
          previewImg.parentNode.replaceChild(cleanImg, previewImg);
        }

        // Create enclosing link
        const link = document.createElement('a');
        link.href = researchUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'publication-thumbnail-link';
        link.title = `Open "${paperTitle}" in a new tab`;
        link.setAttribute('aria-label', `Open "${paperTitle}" in a new tab`);

        // Wrap figure or picture or cleanImg
        const figure = abbr.querySelector('figure');
        const targetNode = figure || abbr.querySelector('picture') || cleanImg;
        if (targetNode && targetNode.parentNode) {
          targetNode.parentNode.insertBefore(link, targetNode);
          link.appendChild(targetNode);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", () => {
      relocateSocialIcons();
      linkPublicationThumbnails();
    });
  } else {
    relocateSocialIcons();
    linkPublicationThumbnails();
  }
  window.addEventListener("load", linkPublicationThumbnails);
  setTimeout(linkPublicationThumbnails, 150);
  setTimeout(linkPublicationThumbnails, 600);

  document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('c');
    
    // Only execute and show if the 'c' URL parameter exists
    if (!ref) return;

    fetch('{{ "/assets/json/connections.json" | relative_url }}')
      .then(res => res.json())
      .then(data => {
        if (data[ref]) {
          renderGraph(data[ref]);
        }
      })
      .catch(err => console.error("Error loading connections:", err));
  });

  function renderGraph(data) {
    const mainWrapper = document.getElementById('shared-context-wrapper');
    mainWrapper.style.display = 'block';
    
    // Set headers
    document.getElementById('trust-title').textContent = `Shared Networks, Interests and Experiences with ${data.visitor.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/, '')}`;

    // Handle Shared Extras
    const extrasWrapper = document.getElementById('shared-extras-wrapper');
    let hasExtras = false;
    let extrasHtml = '';

    if (data.shared_bullets && data.shared_bullets.length > 0) {
      extrasHtml += data.shared_bullets.map(bullet => 
        `<li>${bullet}</li>`
      ).join('');
      hasExtras = true;
    }

    if (hasExtras) {
      extrasWrapper.innerHTML = `<ul class="shared-extras-list">${extrasHtml}</ul>`;
      extrasWrapper.style.display = 'block';
    }

    // Parse and group nodes by layer
    const nodes = [];
    const visitorNode = { ...data.visitor, layer: 0, type: 'visitor' };
    nodes.push(visitorNode);
    
    if (data.nodes) {
      data.nodes.forEach(n => nodes.push({ ...n, type: 'mutual' }));
    }

    const maxLayer = nodes.length > 1 ? Math.max(...nodes.map(n => n.layer)) : 0;
    const targetLayer = maxLayer + 1;
    
    const targetNode = { ...data.target, layer: targetLayer, type: 'target' };
    nodes.push(targetNode);

    // Resolve relative URL for any node image using Jekyll's baseurl
    nodes.forEach(n => {
      if (n.image && n.image.startsWith('/')) {
        n.image = '{{ "" | relative_url }}' + n.image.substring(1);
      }
    });

    const layerMap = {};
    nodes.forEach(n => {
      if(!layerMap[n.layer]) layerMap[n.layer] = [];
      layerMap[n.layer].push(n);
    });

    // Assign SVG coordinate positions
    const width = 800;
    const height = 280;
    const xOffset = width / (targetLayer + 1);

    nodes.forEach(n => {
      n.x = (n.layer + 0.5) * xOffset;
      const siblings = layerMap[n.layer];
      const yOffset = height / (siblings.length + 1);
      const idx = siblings.indexOf(n);
      n.y = (idx + 1) * yOffset;
    });

    // Calculate dynamic node radius based on available space
    let maxSiblings = 1;
    Object.values(layerMap).forEach(siblings => {
      if (siblings.length > maxSiblings) maxSiblings = siblings.length;
    });
    
    // Max radius based on height (vertical space) and width (horizontal space)
    const maxRadiusY = (height / (maxSiblings + 1)) * 0.35;
    const maxRadiusX = (width / (targetLayer + 1)) * 0.25;
    const radius = Math.max(8, Math.min(28, maxRadiusY, maxRadiusX));

    // 10 distinct, recognizable color steps from weak (coral-orange) to strong (radiant emerald)
    // 1: Coral Orange (16°) -> 2: Pure Orange (30°) -> 3: Amber (44°) -> 4: Solar Yellow (58°) ->
    // 5: Chartreuse (76°) -> 6: Fresh Lime (96°) -> 7: Meadow Green (114°) ->
    // 8: Emerald Green (130°) -> 9: Deep Jade (146°) -> 10: Radiant Emerald (160°)
    const STRENGTH_HUES = [16, 30, 44, 58, 76, 96, 114, 130, 146, 160];
    const STRENGTH_SATS = [92, 95, 94, 95, 88, 85, 80, 85, 90, 96];
    const STRENGTH_LIGHTS = [52, 52, 51, 48, 48, 46, 46, 45, 43, 44];

    // Helper to calculate exact 10-step spectrum color and opacity
    // Shifts naturally with recognizable variants; weaker connections fade away with lower opacity and softer line weights
    function getStrengthColor(level) {
      const s = Math.max(1, Math.min(10, parseInt(level, 10) || 5));
      const idx = s - 1;
      const t = idx / 9; // 0.0 at level 1, 1.0 at level 10
      const hue = STRENGTH_HUES[idx];
      const sat = STRENGTH_SATS[idx];
      const light = STRENGTH_LIGHTS[idx];
      
      // Base line opacity: fades away for weak connections (0.16) up to clear/prominent (0.45)
      const baseOpacity = +(0.16 + t * 0.29).toFixed(2);
      // Animated flow opacity: soft/faded flow for weak connections (0.38) up to crisp radiant flow (0.95)
      const flowOpacity = +(0.38 + t * 0.57).toFixed(2);
      
      const color = `hsl(${hue}, ${sat}%, ${light}%)`;
      return { s, idx, t, hue, sat, light, color, baseOpacity, flowOpacity };
    }

    // Render edges with cubic bezier curves
    const svg = document.getElementById('trust-svg');
    let edgesHtml = '';
    
    if (data.edges) {
      data.edges.forEach(e => {
        const source = nodes.find(n => n.id === e.source);
        const target = nodes.find(n => n.id === e.target);
        if(source && target) {
          const dx = target.x - source.x;
          // Cubic Bezier curve control points
          const path = `M ${source.x} ${source.y} C ${source.x + dx/2} ${source.y}, ${target.x - dx/2} ${target.y}, ${target.x} ${target.y}`;
          
          // Strength level (1 to 10): higher = faster streaming animation and firmer line presence
          const strength = Math.max(1, Math.min(10, parseInt(e.strength, 10) || 5));
          // Speed: strength 1 -> 2.4s (slow, generic), strength 10 -> 0.35s (fast, strong)
          const duration = (2.4 - (strength - 1) * (2.05 / 9)).toFixed(2);
          const edgeWidth = (1.4 + (strength - 1) * (1.6 / 9)).toFixed(1);
          const flowWidth = (1.6 + (strength - 1) * (1.2 / 9)).toFixed(1);

          const spec = getStrengthColor(strength);

          let tierClass = 'tier-low';
          if (strength >= 8) {
            tierClass = 'tier-high';
          } else if (strength >= 5) {
            tierClass = 'tier-mid';
          }

          // Base static edge with 10-step spectrum color and opacity
          edgesHtml += `<path d="${path}" class="trust-edge ${tierClass}" data-source="${source.id}" data-target="${target.id}" data-strength="${strength}" data-tier="${tierClass}" data-base-width="${edgeWidth}" data-base-opacity="${spec.baseOpacity}" data-color="${spec.color}" style="stroke: ${spec.color}; stroke-width: ${edgeWidth}px; stroke-opacity: ${spec.baseOpacity};"/>`;
          // Animated overlay edge (flowing dashes with speed, color, and opacity tailored to strength 1-10)
          edgesHtml += `<path d="${path}" class="trust-edge-flow ${tierClass}" data-source="${source.id}" data-target="${target.id}" data-strength="${strength}" data-tier="${tierClass}" data-base-width="${flowWidth}" data-base-opacity="${spec.flowOpacity}" data-color="${spec.color}" style="animation: flowDash ${duration}s linear infinite; stroke: ${spec.color}; stroke-width: ${flowWidth}px; stroke-opacity: ${spec.flowOpacity};"/>`;
          // Invisible thick edge for hover interaction, rendered last (on top of edges, below nodes)
          edgesHtml += `<path d="${path}" class="trust-edge-hover" data-source="${source.id}" data-target="${target.id}" data-strength="${strength}" data-tier="${tierClass}" data-duration="${duration}" data-context="${e.context || ''}" pointer-events="stroke"/>`;
        }
      });
    }

    // Render nodes
    let defsHtml = `<defs>`;
    let nodesHtml = '';
    
    nodes.forEach(n => {
      // Clip path for circular image
      defsHtml += `<clipPath id="clip-${n.id}"><circle cx="${n.x}" cy="${n.y}" r="${radius}"/></clipPath>`;
      
      const isHoverable = true;
      const hoverClass = isHoverable ? 'hoverable' : '';
      
      // Node styling based on type
      const strokeColor = n.type === 'visitor' ? 'var(--global-theme-color)' : (n.type === 'target' ? 'var(--global-text-color)' : 'var(--global-bg-color)');
      const labelType = n.type === 'visitor' ? 'You' : (n.type === 'target' ? 'Me' : n.layer + '° Connection');

      const nameFontSize = Math.max(7, radius * 0.45);
      const labelFontSize = Math.max(6, radius * 0.35);

      nodesHtml += `<g class="trust-node ${hoverClass}" data-id="${n.id}" data-layer="${n.layer}" style="transform-origin: ${n.x}px ${n.y}px;" pointer-events="bounding-box">
        <circle cx="${n.x}" cy="${n.y}" r="${radius + 2}" fill="var(--global-divider-color)" stroke="${strokeColor}" stroke-width="${Math.max(1, radius * 0.1)}"></circle>
        <image x="${n.x - radius}" y="${n.y - radius}" width="${radius*2}" height="${radius*2}" href="${n.image}" clip-path="url(#clip-${n.id})" preserveAspectRatio="xMidYMid slice" pointer-events="none"></image>
        <text x="${n.x}" y="${n.y + radius + nameFontSize + 5}" text-anchor="middle" font-size="${nameFontSize}" fill="var(--global-text-color)" font-weight="bold" pointer-events="none">${n.name}</text>
        <text x="${n.x}" y="${n.y + radius + nameFontSize + labelFontSize + 8}" text-anchor="middle" font-size="${labelFontSize}" fill="var(--global-text-color-light)" pointer-events="none">${labelType}</text>
      </g>`;
    });
    defsHtml += `</defs>`;

    svg.innerHTML = defsHtml + edgesHtml + nodesHtml;

    // Helper to resolve link labels and domain-specific icons
    function getLinkMeta(item) {
      if (!item) return null;
      let url = typeof item === 'string' ? item : item.url;
      let name = (typeof item === 'object' && item.name) ? item.name : '';
      let icon = 'fa-solid fa-globe';

      if (!url) return null;

      const lower = url.toLowerCase();
      if (lower.includes('linkedin.com')) {
        icon = 'fa-brands fa-linkedin';
        if (!name) name = 'LinkedIn';
      } else if (lower.includes('twitter.com') || lower.includes('x.com')) {
        icon = 'fa-brands fa-x-twitter';
        if (!name) name = 'X / Twitter';
      } else if (lower.includes('github.com')) {
        icon = 'fa-brands fa-github';
        if (!name) name = 'GitHub';
      } else if (lower.includes('scholar.google.com') || lower.includes('scholar')) {
        icon = 'fa-solid fa-graduation-cap';
        if (!name) name = 'Scholar';
      } else if (lower.includes('sled') || lower.includes('lab') || lower.includes('eecs.umich.edu') || lower.includes('.edu')) {
        icon = 'fa-solid fa-flask';
        if (!name) name = 'Lab Profile';
      } else if (lower.includes('safe.ai')) {
        icon = 'fa-solid fa-shield-halved';
        if (!name) name = 'CAIS';
      } else if (lower.includes('a2sv.org')) {
        icon = 'fa-solid fa-code';
        if (!name) name = 'A2SV';
      } else if (lower.startsWith('mailto:')) {
        icon = 'fa-solid fa-envelope';
        if (!name) name = 'Email';
      } else {
        if (!name) {
          try {
            const u = new URL(url);
            name = u.hostname.replace(/^www\./, '');
          } catch (err) {
            name = 'Website';
          }
        }
      }

      return { name, url, icon };
    }

    // Setup tooltip interactions
    const tooltip = document.getElementById('trust-tooltip');
    const container = document.getElementById('shared-context-wrapper');
    let tooltipTimeout;

    function hideTooltip() {
      tooltip.style.display = 'none';
      tooltip.className = 'trust-tooltip';
      tooltip.style.pointerEvents = 'auto';
      document.querySelectorAll('.trust-edge').forEach(edge => {
        edge.style.strokeWidth = (edge.getAttribute('data-base-width') || '2') + 'px';
        edge.style.strokeOpacity = edge.getAttribute('data-base-opacity') || '0.35';
      });
      document.querySelectorAll('.trust-edge-flow').forEach(edge => {
        edge.classList.remove('active');
        edge.style.strokeWidth = (edge.getAttribute('data-base-width') || '2') + 'px';
        edge.style.strokeOpacity = edge.getAttribute('data-base-opacity') || '0.6';
      });
    }

    document.querySelectorAll('.trust-node.hoverable').forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        clearTimeout(tooltipTimeout);
        const id = el.getAttribute('data-id');
        const nodeData = nodes.find(n => n.id === id);
        if(!nodeData) return;

        let badgeText = '';
        let badgeClass = '';
        if (nodeData.type === 'visitor') {
          badgeText = 'You';
          badgeClass = 'badge-visitor';
        } else if (nodeData.type === 'target') {
          badgeText = 'Me';
          badgeClass = 'badge-target';
        } else {
          badgeText = (nodeData.layer || 1) + '° Connection';
          badgeClass = 'badge-connection';
        }

        let links = [];
        if (Array.isArray(nodeData.links)) {
          links = nodeData.links.map(getLinkMeta).filter(Boolean);
        } else if (nodeData.url) {
          const single = getLinkMeta(nodeData.url);
          if (single) links.push(single);
        }

        const bioHtml = nodeData.bio ? `<div class="trust-node-bio">${nodeData.bio}</div>` : '';
        const linksHtml = links.length > 0 ? `
          <div class="trust-node-links-grid">
            ${links.map(l => `
              <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="trust-node-link-chip">
                <i class="${l.icon}"></i>
                <span>${l.name}</span>
                <i class="fa-solid fa-arrow-up-right-from-square chip-ext"></i>
              </a>
            `).join('')}
          </div>
        ` : '';

        tooltip.innerHTML = `
          <div class="trust-node-header">
            <img src="${nodeData.image}" class="trust-node-avatar" alt="${nodeData.name}">
            <div class="trust-node-identity">
              <div class="trust-node-title-row">
                <div class="trust-node-name">${nodeData.name}</div>
                <div class="trust-node-badge ${badgeClass}">${badgeText}</div>
              </div>
              <div class="trust-node-role">${nodeData.role || ''}</div>
            </div>
          </div>
          ${bioHtml}
          ${linksHtml}
        `;
        
        tooltip.className = 'trust-tooltip node-tooltip';
        tooltip.style.display = 'block';
        tooltip.style.pointerEvents = 'auto'; // ensure node tooltip is clickable

        // Tooltip Positioning logic relative to shared-context-wrapper
        const rect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const nodeCenterX = rect.left - containerRect.left + (rect.width / 2);
        const nodeCenterY = rect.top - containerRect.top + (rect.height / 2);
        const tooltipW = tooltip.offsetWidth || 320;
        const tooltipH = tooltip.offsetHeight || 160;
        
        let x = nodeCenterX - (tooltipW / 2);
        if (x < 12) x = 12;
        if (x + tooltipW > containerRect.width - 12) {
          x = containerRect.width - tooltipW - 12;
        }

        let arrowX = nodeCenterX - x;
        if (arrowX < 24) arrowX = 24;
        if (arrowX > tooltipW - 24) arrowX = tooltipW - 24;
        tooltip.style.setProperty('--arrow-left', arrowX + 'px');

        // Vertical position: if node is in bottom half (e.g. nodeCenterY > 140), flip above node
        let isTop = false;
        let y;
        if (nodeCenterY > 140 && (rect.top - containerRect.top) > tooltipH + 15) {
          y = (rect.top - containerRect.top) - tooltipH - 12;
          isTop = true;
        } else {
          y = (rect.bottom - containerRect.top) + 12;
          isTop = false;
        }

        if (isTop) {
          tooltip.classList.add('trust-tooltip-top');
        } else {
          tooltip.classList.remove('trust-tooltip-top');
        }

        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
        
        // Highlight connected edges
        document.querySelectorAll('.trust-edge').forEach(edge => {
          edge.style.strokeOpacity = '0.08';
        });
        document.querySelectorAll('.trust-edge-flow').forEach(edge => {
          edge.classList.remove('active');
          edge.style.strokeOpacity = '0.12';
        });
        
        document.querySelectorAll('.trust-edge, .trust-edge-flow, .trust-edge-hover').forEach(edge => {
          const sourceId = edge.getAttribute('data-source');
          const targetId = edge.getAttribute('data-target');
          if (sourceId === id || targetId === id) {
            if (edge.classList.contains('trust-edge')) {
              const baseW = parseFloat(edge.getAttribute('data-base-width') || '2');
              edge.style.strokeWidth = (baseW + 1.2) + 'px';
              edge.style.strokeOpacity = '1';
            } else if (edge.classList.contains('trust-edge-flow')) {
              edge.classList.add('active');
            }
          }
        });
      });

      el.addEventListener('mouseleave', () => {
        tooltipTimeout = setTimeout(hideTooltip, 250);
      });
    });

    // Keep tooltip visible when hovering over it (so user can click links)
    tooltip.addEventListener('mouseenter', () => { clearTimeout(tooltipTimeout); });
    tooltip.addEventListener('mouseleave', () => { tooltipTimeout = setTimeout(hideTooltip, 250); });

    // Handle Edge Hovering
    document.querySelectorAll('.trust-edge-hover').forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        clearTimeout(tooltipTimeout);
        const context = el.getAttribute('data-context');
        if (!context) return;
        const strength = Math.max(1, Math.min(10, parseInt(el.getAttribute('data-strength'), 10) || 5));
        const duration = el.getAttribute('data-duration') || '0.80';
        const sourceId = el.getAttribute('data-source');
        const targetId = el.getAttribute('data-target');
        const sourceNode = nodes.find(n => n.id === sourceId);
        const targetNode = nodes.find(n => n.id === targetId);

        const spec = getStrengthColor(strength);

        let tierClass = 'tier-low';
        let tierText = 'Network Tie';
        if (strength >= 8) {
          tierClass = 'tier-high';
          tierText = 'Strong Tie';
        } else if (strength >= 5) {
          tierClass = 'tier-mid';
          tierText = 'Direct Link';
        }

        const cleanName = (name) => (name || '').replace(/^(Prof\.|Dr\.)\s*/, '').trim();
        const sourceClean = sourceNode ? cleanName(sourceNode.name) : '';
        const targetClean = targetNode ? cleanName(targetNode.name) : '';

        // 10 distinct colored segments matching the exact 1-10 spectrum
        let segmentsHtml = '';
        for (let i = 1; i <= 10; i++) {
          const segSpec = getStrengthColor(i);
          const isActive = i <= strength;
          const activeStyle = isActive ? `background: ${segSpec.color}; box-shadow: 0 0 5px ${segSpec.color}88;` : '';
          segmentsHtml += `<div class="trust-edge-bar-segment ${isActive ? 'active' : ''}" style="${activeStyle}"></div>`;
        }

        const tierBadgeStyle = `color: ${spec.color}; border-color: ${spec.color}55; background: ${spec.color}18;`;
        const meterIconStyle = `color: ${spec.color};`;
        
        // Setup tooltip content
        tooltip.innerHTML = `
          <div class="trust-edge-header">
            <div class="trust-edge-entities">
              <div class="trust-edge-avatar-duo">
                <img src="${sourceNode ? sourceNode.image : ''}" class="trust-edge-avatar" alt="">
                <img src="${targetNode ? targetNode.image : ''}" class="trust-edge-avatar" alt="">
              </div>
              <div class="trust-edge-duo-names">
                <span>${sourceClean}</span><span class="name-sep">&</span><span>${targetClean}</span>
              </div>
            </div>
            <div class="trust-edge-tier-badge" style="${tierBadgeStyle}">
              ${tierText}
            </div>
          </div>
          <div class="trust-edge-desc">
            ${context}
          </div>
          <div class="trust-edge-meter-box">
            <div class="trust-edge-meter-header">
              <span class="meter-title">
                <i class="fa-solid fa-bolt meter-icon" style="${meterIconStyle}"></i> Flow Speed & Affinity
              </span>
              <span class="meter-score">
                Level <strong>${strength}</strong>/10
                <span class="meter-duration">(${duration}s)</span>
              </span>
            </div>
            <div class="trust-edge-bars">
              ${segmentsHtml}
            </div>
          </div>
        `;
        tooltip.className = 'trust-tooltip edge-tooltip';
        tooltip.style.display = 'block';
        tooltip.style.pointerEvents = 'none';

        // Highlight logic
        document.querySelectorAll('.trust-edge').forEach(edge => {
          if (edge.getAttribute('data-source') === sourceId && edge.getAttribute('data-target') === targetId) {
            const baseW = parseFloat(edge.getAttribute('data-base-width') || '2');
            edge.style.strokeWidth = (baseW + 1.5) + 'px';
            edge.style.strokeOpacity = '1';
          } else {
            edge.style.strokeOpacity = '0.08';
          }
        });
        
        document.querySelectorAll('.trust-edge-flow').forEach(edge => {
          if (edge.getAttribute('data-source') === sourceId && edge.getAttribute('data-target') === targetId) {
            edge.classList.add('active');
            edge.style.strokeOpacity = '1';
          } else {
            edge.classList.remove('active');
            edge.style.strokeOpacity = '0.10';
          }
        });

        // Position on first enter
        updateEdgeTooltipPosition(e);
      });
      
      el.addEventListener('mousemove', (e) => {
        updateEdgeTooltipPosition(e);
      });

      function updateEdgeTooltipPosition(e) {
        const containerRect = container.getBoundingClientRect();
        const cursorX = e.clientX - containerRect.left;
        const cursorY = e.clientY - containerRect.top;
        const tooltipW = tooltip.offsetWidth || 320;
        const tooltipH = tooltip.offsetHeight || 135;
        
        let x = cursorX - (tooltipW / 2);
        if (x < 12) x = 12;
        if (x + tooltipW > containerRect.width - 12) {
          x = containerRect.width - tooltipW - 12;
        }

        let arrowX = cursorX - x;
        if (arrowX < 20) arrowX = 20;
        if (arrowX > tooltipW - 20) arrowX = tooltipW - 20;
        tooltip.style.setProperty('--arrow-left', arrowX + 'px');

        // Vertical position: if in lower half of SVG (cursorY > 140), position cleanly ABOVE the edge
        // If in upper half, position cleanly BELOW the edge
        let isTop = false;
        let y;
        if (cursorY > 140 && cursorY > tooltipH + 10) {
          y = cursorY - tooltipH - 14;
          isTop = true;
        } else {
          y = cursorY + 14;
          isTop = false;
        }

        if (isTop) {
          tooltip.classList.add('trust-tooltip-top');
        } else {
          tooltip.classList.remove('trust-tooltip-top');
        }

        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
      }
      
      el.addEventListener('mouseleave', () => {
        tooltipTimeout = setTimeout(hideTooltip, 250);
      });
    });
  }
</script>
