---
layout: page
permalink: /admin/
title: site control center
description: Private administrative control center for Natnael B. Haile (natnaelbekele142@gmail.com).
nav: false
robots: noindex, nofollow
---

<style>
  .admin-container {
    max-width: 960px;
    margin: 0 auto;
  }
  .admin-card {
    border: 1px solid var(--global-divider-color, #e0e0e0);
    border-radius: 12px;
    background: var(--global-card-bg-color, #ffffff);
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease;
  }
  .admin-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 20px;
  }
  .admin-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .admin-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.78rem;
    font-weight: 600;
    gap: 6px;
  }
  .badge-success {
    background: rgba(40, 167, 69, 0.12);
    color: #28a745;
    border: 1px solid rgba(40, 167, 69, 0.3);
  }
  .badge-warning {
    background: rgba(255, 193, 7, 0.15);
    color: #d39e00;
    border: 1px solid rgba(255, 193, 7, 0.3);
  }
  .badge-muted {
    background: rgba(108, 117, 125, 0.12);
    color: #6c757d;
    border: 1px solid rgba(108, 117, 125, 0.25);
  }

  /* Filter navigation bar inside admin */
  .admin-nav-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--global-divider-color, #eee);
    padding-bottom: 12px;
  }
  .admin-nav-btn {
    padding: 7px 14px;
    border-radius: 20px;
    border: 1px solid var(--global-divider-color, #ddd);
    background: var(--global-card-bg-color, #fff);
    color: var(--global-text-color, #444);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .admin-nav-btn:hover {
    background: var(--global-hover-color, #2f80ed);
    color: #ffffff;
    border-color: var(--global-hover-color, #2f80ed);
  }
  .admin-nav-btn.active {
    background: var(--global-theme-color, #2f80ed);
    color: #ffffff;
    border-color: var(--global-theme-color, #2f80ed);
    box-shadow: 0 2px 8px rgba(47, 128, 237, 0.3);
  }

  /* Section header banner */
  .section-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--global-divider-color, #eee);
  }
  .section-banner h4 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .section-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .btn-mini {
    padding: 3px 8px;
    font-size: 0.74rem;
    font-weight: 600;
    border-radius: 6px;
    border: 1px solid var(--global-divider-color, #ccc);
    background: var(--global-card-bg-color, #fff);
    color: var(--global-text-color, #555);
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .btn-mini:hover {
    background: var(--global-theme-color, #2f80ed);
    color: #fff;
    border-color: var(--global-theme-color, #2f80ed);
  }

  /* Switch Toggle styling */
  .switch-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid var(--global-divider-color, #eee);
    background: var(--global-bg-color, #fafafa);
    margin-bottom: 10px;
    transition: all 0.18s ease;
  }
  .switch-container:hover {
    border-color: var(--global-theme-color, #2f80ed);
    background: var(--global-card-bg-color, #ffffff);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  .switch-info {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-grow: 1;
    min-width: 0;
  }
  .switch-icon {
    font-size: 1.25rem;
    width: 32px;
    text-align: center;
    color: var(--global-theme-color, #2f80ed);
    flex-shrink: 0;
  }
  .switch-details {
    min-width: 0;
  }
  .switch-details h5 {
    margin: 0 0 3px 0;
    font-size: 0.98rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .switch-details p {
    margin: 0;
    font-size: 0.82rem;
    color: var(--global-text-color-light, #666);
    line-height: 1.35;
  }
  .switch-meta {
    font-size: 0.72rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 2px;
    color: var(--global-text-color-light, #888);
  }

  /* Sub-item Indented Tree Hierarchy (for CV sub-items) */
  .sub-item-group {
    margin-left: 28px;
    margin-top: -4px;
    margin-bottom: 14px;
    padding-left: 14px;
    border-left: 2px dashed var(--global-theme-color, #2f80ed);
  }
  .sub-item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-radius: 6px;
    border: 1px solid var(--global-divider-color, #eee);
    background: var(--global-bg-color, #fafafa);
    margin-bottom: 6px;
    font-size: 0.88rem;
    transition: all 0.15s ease;
  }
  .sub-item-container:hover {
    background: var(--global-card-bg-color, #ffffff);
    border-color: var(--global-theme-color, #2f80ed);
  }

  /* Pure CSS Toggle Switch */
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 26px;
    flex-shrink: 0;
  }
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .25s ease;
    border-radius: 26px;
  }
  .toggle-slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .25s ease;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  }
  input:checked + .toggle-slider {
    background-color: var(--global-theme-color, #2f80ed);
  }
  input:focus + .toggle-slider {
    box-shadow: 0 0 1px var(--global-theme-color, #2f80ed);
  }
  input:checked + .toggle-slider:before {
    transform: translateX(22px);
  }

  /* Compact switch for sub-items */
  .toggle-switch-sm {
    width: 40px;
    height: 22px;
  }
  .toggle-switch-sm .toggle-slider:before {
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 3px;
  }
  .toggle-switch-sm input:checked + .toggle-slider:before {
    transform: translateX(18px);
  }

  /* Admin Buttons */
  .admin-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    font-size: 0.92rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .btn-primary-custom {
    background: var(--global-theme-color, #2f80ed);
    color: #ffffff !important;
  }
  .btn-primary-custom:hover:not(:disabled) {
    background: var(--global-hover-color, #1a6ed8);
    box-shadow: 0 4px 12px rgba(47, 128, 237, 0.35);
  }
  .btn-outline-custom {
    background: transparent;
    color: var(--global-text-color, #333) !important;
    border: 1px solid var(--global-divider-color, #ccc);
  }
  .btn-outline-custom:hover:not(:disabled) {
    background: var(--global-hover-color, rgba(47, 128, 237, 0.08));
    border-color: var(--global-theme-color, #2f80ed);
    color: var(--global-theme-color, #2f80ed) !important;
  }
  .btn-danger-custom {
    background: rgba(220, 53, 69, 0.1);
    color: #dc3545 !important;
    border: 1px solid rgba(220, 53, 69, 0.3);
  }
  .btn-danger-custom:hover:not(:disabled) {
    background: #dc3545;
    color: #ffffff !important;
  }
  .admin-btn:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  /* Search & Filter bar */
  .admin-search-box {
    position: relative;
    margin-bottom: 16px;
  }
  .admin-search-box input {
    width: 100%;
    padding: 9px 14px 9px 38px;
    border-radius: 8px;
    border: 1px solid var(--global-divider-color, #ddd);
    background: var(--global-bg-color, #fafafa);
    color: var(--global-text-color);
    font-size: 0.88rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .admin-search-box input:focus {
    border-color: var(--global-theme-color, #2f80ed);
    background: var(--global-card-bg-color, #fff);
  }
  .admin-search-box i {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    font-size: 0.88rem;
  }

  /* Action Bar sticky at bottom when changes exist */
  .action-bar-container {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 960px;
    z-index: 1050;
    display: none;
  }
  .action-bar {
    background: var(--global-card-bg-color, #ffffff);
    border: 2px solid var(--global-theme-color, #2f80ed);
    border-radius: 12px;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.22);
  }

  /* Status message box */
  .status-box {
    padding: 12px 16px;
    border-radius: 8px;
    margin-top: 14px;
    font-size: 0.88rem;
    line-height: 1.45;
    display: none;
  }
  .status-info {
    background: rgba(47, 128, 237, 0.1);
    color: #2f80ed;
    border: 1px solid rgba(47, 128, 237, 0.25);
  }
  .status-success {
    background: rgba(40, 167, 69, 0.12);
    color: #28a745;
    border: 1px solid rgba(40, 167, 69, 0.3);
  }
  .status-error {
    background: rgba(220, 53, 69, 0.12);
    color: #dc3545;
    border: 1px solid rgba(220, 53, 69, 0.3);
  }

  /* Keyboard shortcut hint */
  .shortcut-hint {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.78rem;
    color: var(--global-text-color-light, #777);
  }
  kbd {
    background-color: var(--global-code-bg-color, #eee);
    border: 1px solid var(--global-divider-color, #ccc);
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    color: var(--global-text-color);
    font-size: 0.72rem;
    padding: 2px 5px;
  }
</style>

<div class="admin-container">

  <!-- TOP HEADER -->
  <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap" style="gap: 12px;">
    <div>
      <h1 class="mb-1" style="font-size: 2rem; font-weight: 800; letter-spacing: -0.5px;">
        Site Control Center
      </h1>
      <p class="text-muted mb-0" style="font-size: 0.95rem;">
        Master toggle dashboard for pages, blog articles, preprints, projects, repositories, and CV sections.
      </p>
    </div>
    <div>
      <span class="shortcut-hint">
        <i class="fa-solid fa-bolt" style="color: var(--global-theme-color);"></i>
        Direct Shortcut: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd>
      </span>
    </div>
  </div>

  <!-- 1. GITHUB AUTHENTICATION CARD -->
  <div class="admin-card" id="authSection">
    <div class="admin-header-row">
      <div class="admin-title">
        <i class="fa-brands fa-github" style="color: var(--global-theme-color, #2f80ed);"></i>
        <span>GitHub Integration & Deployment</span>
      </div>
      <div id="authStatusBadge">
        <span class="admin-badge badge-warning"><i class="fa-solid fa-lock"></i> Not Authenticated</span>
      </div>
    </div>

    <!-- Logged Out View -->
    <div id="loggedOutView">
      <p style="font-size: 0.9rem; color: var(--global-text-color-light, #666); margin-bottom: 14px;">
        To push visibility changes live to GitHub Pages, provide your GitHub Personal Access Token (PAT) with <code>repo</code> scope. Your token is stored locally in your browser's <code>localStorage</code> and never sent anywhere else.
      </p>

      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <input 
          type="password" 
          id="patInput" 
          placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" 
          style="flex: 1; min-width: 280px; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--global-divider-color, #ccc); background: var(--global-bg-color, #fff); color: var(--global-text-color); font-family: monospace; font-size: 0.88rem;"
          autocomplete="off"
        >
        <button class="admin-btn btn-primary-custom" id="authBtn" onclick="loginWithGitHub()">
          <i class="fa-solid fa-key"></i> Connect to GitHub
        </button>
      </div>

      <div style="margin-top: 10px; font-size: 0.8rem; color: var(--global-text-color-light, #888);">
        Need a token? <a href="https://github.com/settings/tokens/new?scopes=repo&description=nathyBekele-site-admin" target="_blank" rel="noopener noreferrer">Generate classic token with 'repo' scope</a>.
      </div>
    </div>

    <!-- Logged In View -->
    <div id="loggedInView" style="display: none;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img id="userAvatar" src="" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid var(--global-theme-color, #2f80ed);">
          <div>
            <div style="font-weight: 600;" id="userName">Natnael Bekele</div>
            <div style="font-size: 0.78rem; color: var(--global-text-color-light, #777);" id="userHandle">@nathyBekele</div>
          </div>
        </div>
        <button class="admin-btn btn-danger-custom" onclick="logoutGitHub()">
          <i class="fa-solid fa-right-from-bracket"></i> Disconnect
        </button>
      </div>
    </div>

    <div id="authStatusMsg" class="status-box"></div>
  </div>

  <!-- CATEGORY QUICK FILTER BUTTONS -->
  <div class="admin-nav-tabs">
    <button class="admin-nav-btn active" onclick="switchCategoryTab('all', this)">
      <i class="fa-solid fa-layer-group"></i> All Controls
    </button>
    <button class="admin-nav-btn" onclick="switchCategoryTab('nav', this)">
      <i class="fa-solid fa-compass"></i> Navigation Tabs (<span id="count_nav_stat">5</span>)
    </button>
    <button class="admin-nav-btn" onclick="switchCategoryTab('blog', this)">
      <i class="fa-solid fa-newspaper"></i> Blog Articles (<span id="count_blog_stat">9</span>)
    </button>
    <button class="admin-nav-btn" onclick="switchCategoryTab('preprints', this)">
      <i class="fa-solid fa-graduation-cap"></i> Preprints (<span id="count_preprints_stat">1</span>)
    </button>
    <button class="admin-nav-btn" onclick="switchCategoryTab('projects', this)">
      <i class="fa-solid fa-diagram-project"></i> Projects (<span id="count_projects_stat">9</span>)
    </button>
    <button class="admin-nav-btn" onclick="switchCategoryTab('repos', this)">
      <i class="fa-brands fa-github"></i> Repositories (<span id="count_repos_stat">6</span>)
    </button>
    <button class="admin-nav-btn" onclick="switchCategoryTab('cv', this)">
      <i class="fa-solid fa-file-invoice"></i> CV Customizer (<span id="count_cv_stat">7</span>)
    </button>
  </div>

  <!-- SEARCH BOX -->
  <div class="admin-search-box">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" id="adminFilterInput" placeholder="Quick search any page, article, project, repo, or CV entry..." oninput="filterAdminItems()">
  </div>

  <!-- ========================================== -->
  <!-- 1. NAVIGATION TABS (FULL-PAGE TOGGLES)     -->
  <!-- ========================================== -->
  <div class="admin-card category-card" id="card_nav">
    <div class="section-banner">
      <div>
        <h4><i class="fa-solid fa-compass" style="color: var(--global-theme-color);"></i> Navigation Tabs (Layer 1)</h4>
        <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: var(--global-text-color-light, #666);">
          Toggle entire pages on or off. Toggled-off pages are removed from the top navigation bar.
        </p>
      </div>
      <div class="section-actions">
        <span id="stat_nav" class="admin-badge badge-success">5/5 Visible</span>
        <button class="btn-mini" onclick="setGroupState('nav', true)">Show All</button>
        <button class="btn-mini" onclick="setGroupState('nav', false)">Hide All</button>
      </div>
    </div>

    <!-- Nav Tab 1: Blog -->
    <div class="switch-container admin-item" data-search="blog technical articles publications medium">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-newspaper"></i></div>
        <div class="switch-details">
          <h5>blog <span class="badge badge-light" style="font-size: 0.72rem;">_pages/blog.md</span></h5>
          <p>Technical articles & syndicated Medium publications</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_tab_blog" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_tab_blog" onchange="onNavToggleChange('blog')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- Nav Tab 2: Preprints -->
    <div class="switch-container admin-item" data-search="preprints academic research papers arxiv publications">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-graduation-cap"></i></div>
        <div class="switch-details">
          <h5>preprints <span class="badge badge-light" style="font-size: 0.72rem;">_pages/publications.md</span></h5>
          <p>Academic research papers, sleeper agents interpretability paper, and arXiv preprints</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_tab_preprints" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_tab_preprints" onchange="onNavToggleChange('preprints')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- Nav Tab 3: Projects -->
    <div class="switch-container admin-item" data-search="projects portfolio software ai engineering">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-diagram-project"></i></div>
        <div class="switch-details">
          <h5>projects <span class="badge badge-light" style="font-size: 0.72rem;">_pages/projects.md</span></h5>
          <p>Interactive portfolio showcase of engineering, AI systems, and fullstack projects</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_tab_projects" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_tab_projects" onchange="onNavToggleChange('projects')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- Nav Tab 4: Repositories -->
    <div class="switch-container admin-item" data-search="repositories github code open source stars">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-brands fa-github"></i></div>
        <div class="switch-details">
          <h5>repositories <span class="badge badge-light" style="font-size: 0.72rem;">_pages/repositories.md</span></h5>
          <p>Pinned open-source GitHub repositories with star history charts and pinned cards</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_tab_repositories" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_tab_repositories" onchange="onNavToggleChange('repositories')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- Nav Tab 5: CV -->
    <div class="switch-container admin-item" data-search="cv curriculum vitae resume experience education skills awards references">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-file-invoice"></i></div>
        <div class="switch-details">
          <h5>CV <span class="badge badge-light" style="font-size: 0.72rem;">_pages/cv.md</span></h5>
          <p>Comprehensive interactive Curriculum Vitae with direct PDF download button</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_tab_cv" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_tab_cv" onchange="onNavToggleChange('cv')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- 2. BLOG ARTICLES (ITEM-LEVEL TOGGLES)      -->
  <!-- ========================================== -->
  <div class="admin-card category-card" id="card_blog">
    <div class="section-banner">
      <div>
        <h4><i class="fa-solid fa-newspaper" style="color: var(--global-theme-color);"></i> Blog Articles (Layer 2)</h4>
        <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: var(--global-text-color-light, #666);">
          Toggle individual blog articles on or off without deleting files. Toggled-off articles are hidden from the blog list.
        </p>
      </div>
      <div class="section-actions">
        <span id="stat_blog" class="admin-badge badge-success">9/9 Visible</span>
        <button class="btn-mini" onclick="setGroupState('blog_posts', true)">Show All</button>
        <button class="btn-mini" onclick="setGroupState('blog_posts', false)">Hide All</button>
      </div>
    </div>

    <div id="blogPostsList">
      <!-- 1 -->
      <div class="switch-container admin-item" data-search="your open-source ai model might be a sleeper agent safety interpretability">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-shield-halved"></i></div>
          <div class="switch-details">
            <h5>Your Open-Source AI Model Might Be a Sleeper Agent</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Sep 28, 2026</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">AI Safety</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Interpretability</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_your-open-source-ai-model-might-be-a-sleeper-agent" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_your-open-source-ai-model-might-be-a-sleeper-agent" onchange="onItemToggleChange('posts', 'your-open-source-ai-model-might-be-a-sleeper-agent')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 2 -->
      <div class="switch-container admin-item" data-search="contract advisor rag towards building a high-precision legal expert llm app">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-scale-balanced"></i></div>
          <div class="switch-details">
            <h5>Contract Advisor RAG: Towards Building A High-Precision Legal Expert LLM APP</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Feb 27, 2024</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">RAG</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">LegalTech</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_contract-advisor-rag" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_contract-advisor-rag" onchange="onItemToggleChange('posts', 'contract-advisor-rag')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 3 -->
      <div class="switch-container admin-item" data-search="text-to-visual transformation in digital advertising genai">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
          <div class="switch-details">
            <h5>Text-to-Visual Transformation in Digital Advertising</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Feb 19, 2024</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">GenAI</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">AdTech</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_text-to-visual-transformation-in-digital-advertising" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_text-to-visual-transformation-in-digital-advertising" onchange="onItemToggleChange('posts', 'text-to-visual-transformation-in-digital-advertising')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 4 -->
      <div class="switch-container admin-item" data-search="building dapp on ethereum blockchain using flutter and react">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-brands fa-ethereum"></i></div>
          <div class="switch-details">
            <h5>Building dApp on Ethereum Blockchain using Flutter and React</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Feb 11, 2024</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Web3</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Ethereum</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_building-dapp-on-ethereum-blockchain-using-flutter-and-react" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_building-dapp-on-ethereum-blockchain-using-flutter-and-react" onchange="onItemToggleChange('posts', 'building-dapp-on-ethereum-blockchain-using-flutter-and-react')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 5 -->
      <div class="switch-container admin-item" data-search="llm finetuning enabling quality embedding and text generation for amharic language nlp">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-language"></i></div>
          <div class="switch-details">
            <h5>LLM Finetuning: Enabling Quality Embedding and Text Generation for Amharic Language</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Feb 05, 2024</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">NLP</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Amharic</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_llm-finetuning-amharic-language" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_llm-finetuning-amharic-language" onchange="onItemToggleChange('posts', 'llm-finetuning-amharic-language')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 6 -->
      <div class="switch-container admin-item" data-search="precision rag prompt tuning for building enterprise grade rag systems">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-crosshairs"></i></div>
          <div class="switch-details">
            <h5>Precision RAG: Prompt Tuning For Building Enterprise Grade RAG Systems</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Jan 21, 2024</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Enterprise AI</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">RAG</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_precision-rag-prompt-tuning-enterprise-systems" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_precision-rag-prompt-tuning-enterprise-systems" onchange="onItemToggleChange('posts', 'precision-rag-prompt-tuning-enterprise-systems')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 7 -->
      <div class="switch-container admin-item" data-search="the end-to-end web3 dapps certificate generation distribution algorand">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-certificate"></i></div>
          <div class="switch-details">
            <h5>The End-to-End Web3 dApps: Certificate Generation with Algorand</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Jan 14, 2024</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Algorand</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Web3</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_end-to-end-web3-dapps-algorand" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_end-to-end-web3-dapps-algorand" onchange="onItemToggleChange('posts', 'end-to-end-web3-dapps-algorand')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 8 -->
      <div class="switch-container admin-item" data-search="redash chatbot add-on llm-based chatbot for advanced data analytics and visualization">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-chart-line"></i></div>
          <div class="switch-details">
            <h5>Redash Chatbot Add-on: LLM Chatbot for Data Analytics</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Jan 07, 2024</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Analytics</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">BI</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_redash-chatbot-add-on" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_redash-chatbot-add-on" onchange="onItemToggleChange('posts', 'redash-chatbot-add-on')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 9 -->
      <div class="switch-container admin-item" data-search="data warehousing the engine of business intelligence bi">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-database"></i></div>
          <div class="switch-details">
            <h5>Data Warehousing: The Engine of Business Intelligence</h5>
            <div class="switch-meta">
              <span><i class="fa-regular fa-calendar"></i> Dec 27, 2023</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">Data Engineering</span>
              <span class="badge badge-secondary" style="font-size: 0.68rem;">BI</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_post_data-warehousing-business-intelligence" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_post_data-warehousing-business-intelligence" onchange="onItemToggleChange('posts', 'data-warehousing-business-intelligence')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- 3. PREPRINTS (ITEM-LEVEL TOGGLES)          -->
  <!-- ========================================== -->
  <div class="admin-card category-card" id="card_preprints">
    <div class="section-banner">
      <div>
        <h4><i class="fa-solid fa-graduation-cap" style="color: var(--global-theme-color);"></i> Preprints & Research Papers (Layer 2)</h4>
        <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: var(--global-text-color-light, #666);">
          Toggle individual BibTeX entries on or off. Hidden preprints are omitted from the preprints list and home page.
        </p>
      </div>
      <div class="section-actions">
        <span id="stat_preprints" class="admin-badge badge-success">1/1 Visible</span>
        <button class="btn-mini" onclick="setGroupState('preprints', true)">Show All</button>
        <button class="btn-mini" onclick="setGroupState('preprints', false)">Hide All</button>
      </div>
    </div>

    <!-- Preprint 1 -->
    <div class="switch-container admin-item" data-search="the geometry of dormant defection layer-wise dynamics linear probes sleeper agents arxiv">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-brain"></i></div>
        <div class="switch-details">
          <h5>The Geometry of Dormant Defection <span class="badge badge-light" style="font-size: 0.72rem;">bekele2026geometry</span></h5>
          <p>Layer-Wise Dynamics and Defensive Design of Linear Probes for Latent Sleeper Agents</p>
          <div class="switch-meta">
            <span><i class="fa-regular fa-calendar"></i> 2026</span>
            <span class="badge badge-secondary" style="font-size: 0.68rem;">arXiv</span>
            <span class="badge badge-secondary" style="font-size: 0.68rem;">AI Safety</span>
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_preprint_bekele2026geometry" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_preprint_bekele2026geometry" onchange="onItemToggleChange('preprints', 'bekele2026geometry')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- 4. PROJECTS (ITEM-LEVEL TOGGLES)           -->
  <!-- ========================================== -->
  <div class="admin-card category-card" id="card_projects">
    <div class="section-banner">
      <div>
        <h4><i class="fa-solid fa-diagram-project" style="color: var(--global-theme-color);"></i> Portfolio Projects (Layer 2)</h4>
        <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: var(--global-text-color-light, #666);">
          Toggle individual portfolio project cards on or off from <code>/projects/</code>.
        </p>
      </div>
      <div class="section-actions">
        <span id="stat_projects" class="admin-badge badge-success">9/9 Visible</span>
        <button class="btn-mini" onclick="setGroupState('projects', true)">Show All</button>
        <button class="btn-mini" onclick="setGroupState('projects', false)">Hide All</button>
      </div>
    </div>

    <div id="projectsList">
      <!-- 1 -->
      <div class="switch-container admin-item" data-search="latent sleeper agent linear probing geometry of defection interpretability">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-atom"></i></div>
          <div class="switch-details">
            <h5>Latent Sleeper Agent Linear Probing <span class="badge badge-light" style="font-size: 0.72rem;">0_geometry_of_defection</span></h5>
            <p>Empirical investigation into the geometry of deceptive misalignment and dormant defection in LLMs.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_0_geometry_of_defection" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_0_geometry_of_defection" onchange="onItemToggleChange('projects', '0_geometry_of_defection')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 2 -->
      <div class="switch-container admin-item" data-search="amharic hate speech detection nlp deep learning">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-shield-virus"></i></div>
          <div class="switch-details">
            <h5>Amharic Hate Speech Detection <span class="badge badge-light" style="font-size: 0.72rem;">8_hate_speech_amharic</span></h5>
            <p>Fine-tuned transformer models for social media hate speech detection in low-resource Amharic language.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_8_hate_speech_amharic" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_8_hate_speech_amharic" onchange="onItemToggleChange('projects', '8_hate_speech_amharic')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 3 -->
      <div class="switch-container admin-item" data-search="afrochat native african llm assistant rag amharic oromo tigrinya">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-comments"></i></div>
          <div class="switch-details">
            <h5>AfroChat <span class="badge badge-light" style="font-size: 0.72rem;">1_afrochat</span></h5>
            <p>AI assistant fine-tuned for high-fidelity reasoning across major African languages with RAG.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_1_afrochat" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_1_afrochat" onchange="onItemToggleChange('projects', '1_afrochat')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 4 -->
      <div class="switch-container admin-item" data-search="adot algorithmic trading bot automated execution web3">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-chart-line"></i></div>
          <div class="switch-details">
            <h5>Adot <span class="badge badge-light" style="font-size: 0.72rem;">2_adot</span></h5>
            <p>Algorithmic trading engine with automated backtesting, risk mitigation, and low-latency execution.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_2_adot" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_2_adot" onchange="onItemToggleChange('projects', '2_adot')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 5 -->
      <div class="switch-container admin-item" data-search="cursor spend tracker chrome extension api analytics cost intelligence">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-coins"></i></div>
          <div class="switch-details">
            <h5>Cursor Spend Tracker <span class="badge badge-light" style="font-size: 0.72rem;">9_cursor_spend_tracker</span></h5>
            <p>Developer tooling and cost intelligence extension for monitoring Cursor IDE AI usage.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_9_cursor_spend_tracker" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_9_cursor_spend_tracker" onchange="onItemToggleChange('projects', '9_cursor_spend_tracker')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 6 -->
      <div class="switch-container admin-item" data-search="promptkit interactive prompt engineering toolkit playground">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-terminal"></i></div>
          <div class="switch-details">
            <h5>promptKit <span class="badge badge-light" style="font-size: 0.72rem;">5_promptkit</span></h5>
            <p>Interactive toolkit for designing, versioning, evaluating, and stress-testing system prompts.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_5_promptkit" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_5_promptkit" onchange="onItemToggleChange('projects', '5_promptkit')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 7 -->
      <div class="switch-container admin-item" data-search="vitalai clinical decision support healthcare ai">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-heart-pulse"></i></div>
          <div class="switch-details">
            <h5>VitalAI <span class="badge badge-light" style="font-size: 0.72rem;">6_vitalai</span></h5>
            <p>Intelligent health diagnostics and clinical decision support system.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_6_vitalai" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_6_vitalai" onchange="onItemToggleChange('projects', '6_vitalai')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 8 -->
      <div class="switch-container admin-item" data-search="redash chatbot add-on sql bi natural language analytics">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-robot"></i></div>
          <div class="switch-details">
            <h5>Redash Chatbot Add-on <span class="badge badge-light" style="font-size: 0.72rem;">7_redash_chatbot</span></h5>
            <p>Interactive conversational analytics extension for Redash converting English to SQL.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_7_redash_chatbot" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_7_redash_chatbot" onchange="onItemToggleChange('projects', '7_redash_chatbot')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 9 -->
      <div class="switch-container admin-item" data-search="rateeat restaurant dish discovery and recommendation system">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-solid fa-utensils"></i></div>
          <div class="switch-details">
            <h5>RateEat <span class="badge badge-light" style="font-size: 0.72rem;">3_rateeat</span></h5>
            <p>AI-driven dish discovery, dietary filtering, and crowdsourced restaurant reviews platform.</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_project_3_rateeat" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_project_3_rateeat" onchange="onItemToggleChange('projects', '3_rateeat')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- 5. SELECTED REPOSITORIES (ITEM-LEVEL)      -->
  <!-- ========================================== -->
  <div class="admin-card category-card" id="card_repos">
    <div class="section-banner">
      <div>
        <h4><i class="fa-brands fa-github" style="color: var(--global-theme-color);"></i> Selected Repositories (Layer 2)</h4>
        <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: var(--global-text-color-light, #666);">
          Toggle specific pinned repository cards on or off in <code>/repositories/</code>.
        </p>
      </div>
      <div class="section-actions">
        <span id="stat_repos" class="admin-badge badge-success">6/6 Visible</span>
        <button class="btn-mini" onclick="setGroupState('repos', true)">Show All</button>
        <button class="btn-mini" onclick="setGroupState('repos', false)">Hide All</button>
      </div>
    </div>

    <div id="reposList">
      <!-- 1 -->
      <div class="switch-container admin-item" data-search="geometry-of-dormant-defection latent sleeper agent interpretability">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-brands fa-github"></i></div>
          <div class="switch-details">
            <h5>nathyBekele/geometry-of-dormant-defection</h5>
            <p>Layer-wise dynamics & linear probes for latent sleeper agents</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_repo_geometry-of-dormant-defection" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_repo_nathyBekele/geometry-of-dormant-defection" onchange="onItemToggleChange('repos', 'nathyBekele/geometry-of-dormant-defection')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 2 -->
      <div class="switch-container admin-item" data-search="promptkit interactive prompt engineering toolkit">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-brands fa-github"></i></div>
          <div class="switch-details">
            <h5>nathyBekele/promptKit</h5>
            <p>Prompt engineering toolkit & sandbox</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_repo_promptKit" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_repo_nathyBekele/promptKit" onchange="onItemToggleChange('repos', 'nathyBekele/promptKit')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 3 -->
      <div class="switch-container admin-item" data-search="redash-chatbot-add-on bi natural language analytics sql">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-brands fa-github"></i></div>
          <div class="switch-details">
            <h5>nathyBekele/redash-chatbot-add-on</h5>
            <p>Conversational BI analytics add-on for Redash</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_repo_redash-chatbot-add-on" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_repo_nathyBekele/redash-chatbot-add-on" onchange="onItemToggleChange('repos', 'nathyBekele/redash-chatbot-add-on')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 4 -->
      <div class="switch-container admin-item" data-search="amharic-rag-ad-builder nlp generative advertising">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-brands fa-github"></i></div>
          <div class="switch-details">
            <h5>nathyBekele/amharic-rag-ad-builder</h5>
            <p>Text-to-visual digital advertising generator with Amharic RAG</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_repo_amharic-rag-ad-builder" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_repo_nathyBekele/amharic-rag-ad-builder" onchange="onItemToggleChange('repos', 'nathyBekele/amharic-rag-ad-builder')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 5 -->
      <div class="switch-container admin-item" data-search="logistics-dapp-on-ethereum web3 smart contracts flutter">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-brands fa-github"></i></div>
          <div class="switch-details">
            <h5>nathyBekele/logistics-dApp-on-ethereum</h5>
            <p>Decentralized supply chain tracker on Ethereum</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_repo_logistics-dApp-on-ethereum" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_repo_nathyBekele/logistics-dApp-on-ethereum" onchange="onItemToggleChange('repos', 'nathyBekele/logistics-dApp-on-ethereum')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- 6 -->
      <div class="switch-container admin-item" data-search="vitalai healthcare ai clinical decision support">
        <div class="switch-info">
          <div class="switch-icon"><i class="fa-brands fa-github"></i></div>
          <div class="switch-details">
            <h5>nathyBekele/vitalAI</h5>
            <p>Intelligent health diagnostics & symptom assessment platform</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span id="badge_repo_vitalAI" class="admin-badge badge-success">Visible</span>
          <label class="toggle-switch">
            <input type="checkbox" id="toggle_repo_nathyBekele/vitalAI" onchange="onItemToggleChange('repos', 'nathyBekele/vitalAI')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- 6. CV CUSTOMIZER (SECTIONS & SUB-ITEMS)    -->
  <!-- ========================================== -->
  <div class="admin-card category-card" id="card_cv">
    <div class="section-banner">
      <div>
        <h4><i class="fa-solid fa-file-invoice" style="color: var(--global-theme-color);"></i> CV Customizer (Sections & Sub-items)</h4>
        <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: var(--global-text-color-light, #666);">
          Toggle entire CV sections (synced with sidebar TOC), or selectively toggle sub-items inside Experience, Projects, and References.
        </p>
      </div>
      <div class="section-actions">
        <span id="stat_cv" class="admin-badge badge-success">7/7 Sections Visible</span>
        <button class="btn-mini" onclick="setGroupState('cv_sections', true)">Show All Sections</button>
        <button class="btn-mini" onclick="setGroupState('cv_sections', false)">Hide All Sections</button>
      </div>
    </div>

    <!-- CV Section 1: Education -->
    <div class="switch-container admin-item" data-search="cv education addis ababa university bsc degree">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-graduation-cap"></i></div>
        <div class="switch-details">
          <h5>Education <span class="badge badge-light" style="font-size: 0.72rem;">CV Section</span></h5>
          <p>Addis Ababa University B.Sc. Electrical & Computer Engineering</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_cv_section_Education" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_cv_section_Education" onchange="onCvSectionToggleChange('Education')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- CV Section 2: Experience (with nested sub-items!) -->
    <div class="switch-container admin-item" data-search="cv experience work vula turing a2sv">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-briefcase"></i></div>
        <div class="switch-details">
          <h5>Experience <span class="badge badge-light" style="font-size: 0.72rem;">CV Section (3 roles)</span></h5>
          <p>Professional engineering roles with granular sub-item toggles below</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_cv_section_Experience" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_cv_section_Experience" onchange="onCvSectionToggleChange('Experience')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- Experience Sub-items -->
    <div class="sub-item-group" id="sub_group_experience">
      <!-- Vula -->
      <div class="sub-item-container admin-item" data-search="cv experience vula fullstack developer investment platform">
        <div>
          <strong>Vula</strong> <span class="badge badge-secondary" style="font-size: 0.68rem; margin-left: 4px;">Fullstack Developer</span>
          <div style="font-size: 0.75rem; color: #777;">2024 – Present (Remote, Cape Town)</div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_exp_Vula" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_exp_Vula" onchange="onCvSubItemToggleChange('experience', 'Vula')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- Turing -->
      <div class="sub-item-container admin-item" data-search="cv experience turing python developer sft rlhf llm">
        <div>
          <strong>Turing</strong> <span class="badge badge-secondary" style="font-size: 0.68rem; margin-left: 4px;">Python Developer</span>
          <div style="font-size: 0.75rem; color: #777;">2023 – 2024 (Remote, Palo Alto)</div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_exp_Turing" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_exp_Turing" onchange="onCvSubItemToggleChange('experience', 'Turing')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- A2SV -->
      <div class="sub-item-container admin-item" data-search="cv experience a2sv africa to silicon valley competitive programming coach google">
        <div>
          <strong>Africa to Silicon Valley (A2SV, Backed by Google)</strong> <span class="badge badge-secondary" style="font-size: 0.68rem; margin-left: 4px;">Coach</span>
          <div style="font-size: 0.75rem; color: #777;">2021 – 2023 (Addis Ababa)</div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_exp_A2SV" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_exp_A2SV" onchange="onCvSubItemToggleChange('experience', 'Africa to Silicon Valley')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>

    <!-- CV Section 3: Skills -->
    <div class="switch-container admin-item" data-search="cv skills languages frameworks developer tools databases cloud">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-code"></i></div>
        <div class="switch-details">
          <h5>Skills <span class="badge badge-light" style="font-size: 0.72rem;">CV Section</span></h5>
          <p>Languages, Frameworks, Developer Tools, and Cloud technologies</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_cv_section_Skills" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_cv_section_Skills" onchange="onCvSectionToggleChange('Skills')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- CV Section 4: Awards -->
    <div class="switch-container admin-item" data-search="cv awards honors icpc a2sv codeforces leetcode">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-trophy"></i></div>
        <div class="switch-details">
          <h5>Awards <span class="badge badge-light" style="font-size: 0.72rem;">CV Section</span></h5>
          <p>Honors, competitive programming achievements, ICPC regional awards</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_cv_section_Awards" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_cv_section_Awards" onchange="onCvSectionToggleChange('Awards')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- CV Section 5: Projects (with nested sub-items!) -->
    <div class="switch-container admin-item" data-search="cv projects portfolio sleeper agents hate speech afrochat adot cursor promptkit vitalai redash rateeat">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-laptop-code"></i></div>
        <div class="switch-details">
          <h5>Projects <span class="badge badge-light" style="font-size: 0.72rem;">CV Section (9 items)</span></h5>
          <p>Projects listed in CV with individual sub-item toggles below</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_cv_section_Projects" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_cv_section_Projects" onchange="onCvSectionToggleChange('Projects')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- CV Projects Sub-items -->
    <div class="sub-item-group" id="sub_group_projects">
      <!-- 1 -->
      <div class="sub-item-container admin-item" data-search="cv project sleeper agents geometry of dormant defection">
        <div><strong>The Geometry of Dormant Defection</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_defection" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_defection" onchange="onCvSubItemToggleChange('projects', 'The Geometry of Dormant Defection')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 2 -->
      <div class="sub-item-container admin-item" data-search="cv project amharic hate speech detection">
        <div><strong>Amharic Hate Speech Detection</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_hate_speech" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_hate_speech" onchange="onCvSubItemToggleChange('projects', 'Amharic Hate Speech Detection')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 3 -->
      <div class="sub-item-container admin-item" data-search="cv project afrochat">
        <div><strong>AfroChat</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_afrochat" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_afrochat" onchange="onCvSubItemToggleChange('projects', 'AfroChat')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 4 -->
      <div class="sub-item-container admin-item" data-search="cv project adot">
        <div><strong>Adot</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_adot" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_adot" onchange="onCvSubItemToggleChange('projects', 'Adot')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 5 -->
      <div class="sub-item-container admin-item" data-search="cv project cursor spend tracker">
        <div><strong>Cursor Spend Tracker</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_cursor" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_cursor" onchange="onCvSubItemToggleChange('projects', 'Cursor Spend Tracker')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 6 -->
      <div class="sub-item-container admin-item" data-search="cv project promptkit">
        <div><strong>promptKit</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_promptkit" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_promptkit" onchange="onCvSubItemToggleChange('projects', 'promptKit')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 7 -->
      <div class="sub-item-container admin-item" data-search="cv project vitalai">
        <div><strong>VitalAI</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_vitalai" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_vitalai" onchange="onCvSubItemToggleChange('projects', 'VitalAI')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 8 -->
      <div class="sub-item-container admin-item" data-search="cv project redash chatbot add-on">
        <div><strong>Redash Chatbot Add-on</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_redash" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_redash" onchange="onCvSubItemToggleChange('projects', 'Redash Chatbot Add-on')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 9 -->
      <div class="sub-item-container admin-item" data-search="cv project rateeat">
        <div><strong>RateEat</strong></div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_proj_rateeat" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_proj_rateeat" onchange="onCvSubItemToggleChange('projects', 'RateEat')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>

    <!-- CV Section 6: Preprints -->
    <div class="switch-container admin-item" data-search="cv preprints research papers publications">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-newspaper"></i></div>
        <div class="switch-details">
          <h5>Preprints <span class="badge badge-light" style="font-size: 0.72rem;">CV Section</span></h5>
          <p>Academic preprints and publications list in CV</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_cv_section_Preprints" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_cv_section_Preprints" onchange="onCvSectionToggleChange('Preprints')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- CV Section 7: References (with nested sub-items!) -->
    <div class="switch-container admin-item" data-search="cv references alex goff nic rawhani jelani nelson adis ojeda fitsum andarge emre varol">
      <div class="switch-info">
        <div class="switch-icon"><i class="fa-solid fa-users"></i></div>
        <div class="switch-details">
          <h5>References <span class="badge badge-light" style="font-size: 0.72rem;">CV Section (6 contacts)</span></h5>
          <p>Toggles references section & Tocbot sidebar link, with individual contact toggles below</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span id="badge_cv_section_References" class="admin-badge badge-success">Visible</span>
        <label class="toggle-switch">
          <input type="checkbox" id="toggle_cv_section_References" onchange="onCvSectionToggleChange('References')" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- References Sub-items -->
    <div class="sub-item-group" id="sub_group_references">
      <!-- 1 -->
      <div class="sub-item-container admin-item" data-search="cv reference alex goff cto vula">
        <div>
          <strong>Alex Goff</strong>
          <span style="font-size: 0.75rem; color: #777; margin-left: 6px;">Co-founder & CTO of Vula</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_ref_Alex Goff" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_ref_Alex Goff" onchange="onCvSubItemToggleChange('references', 'Alex Goff')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 2 -->
      <div class="sub-item-container admin-item" data-search="cv reference nic rawhani ceo vula">
        <div>
          <strong>Nic Rawhani</strong>
          <span style="font-size: 0.75rem; color: #777; margin-left: 6px;">Co-founder & CEO of Vula</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_ref_Nic Rawhani" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_ref_Nic Rawhani" onchange="onCvSubItemToggleChange('references', 'Nic Rawhani')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 3 -->
      <div class="sub-item-container admin-item" data-search="cv reference jelani nelson uc berkeley addiscoder professor">
        <div>
          <strong>Prof. Jelani Nelson</strong>
          <span style="font-size: 0.75rem; color: #777; margin-left: 6px;">Professor & Chair at UC Berkeley; Founder of AddisCoder</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_ref_Prof. Jelani Nelson" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_ref_Prof. Jelani Nelson" onchange="onCvSubItemToggleChange('references', 'Prof. Jelani Nelson')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 4 -->
      <div class="sub-item-container admin-item" data-search="cv reference adis ojeda mit theseus group adot">
        <div>
          <strong>Adis Ojeda</strong>
          <span style="font-size: 0.75rem; color: #777; margin-left: 6px;">MIT Alumni; Founder & CEO of Theseus Group</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_ref_Adis Ojeda" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_ref_Adis Ojeda" onchange="onCvSubItemToggleChange('references', 'Adis Ojeda')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 5 -->
      <div class="sub-item-container admin-item" data-search="cv reference fitsum andarge aau dean ecse professor">
        <div>
          <strong>Dr. Fitsum Andarge</strong>
          <span style="font-size: 0.75rem; color: #777; margin-left: 6px;">Associate Professor & Dean of ECSE at AAU</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_ref_Dr. Fitsum Andarge" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_ref_Dr. Fitsum Andarge" onchange="onCvSubItemToggleChange('references', 'Dr. Fitsum Andarge')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <!-- 6 -->
      <div class="sub-item-container admin-item" data-search="cv reference emre varol ceo a2sv">
        <div>
          <strong>Emre Varol</strong>
          <span style="font-size: 0.75rem; color: #777; margin-left: 6px;">CEO of Africa to Silicon Valley (A2SV)</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="badge_cv_ref_Emre Varol" class="admin-badge badge-success" style="font-size: 0.72rem; padding: 2px 8px;">Visible</span>
          <label class="toggle-switch toggle-switch-sm">
            <input type="checkbox" id="toggle_cv_ref_Emre Varol" onchange="onCvSubItemToggleChange('references', 'Emre Varol')" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- STICKY ACTION BAR -->
  <div class="action-bar-container" id="actionBarContainer">
    <div class="action-bar">
      <div>
        <div style="font-weight: 700; font-size: 1.05rem;" id="pendingSummaryText">No pending changes</div>
        <div style="font-size: 0.8rem; color: var(--global-text-color-light, #777);" id="pendingDetailText">All switches match current state</div>
      </div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <button class="admin-btn btn-outline-custom" id="resetBtn" onclick="resetToLiveState()" disabled>
          <i class="fa-solid fa-rotate-left"></i> Reset
        </button>
        <button class="admin-btn btn-primary-custom" id="saveBtn" onclick="saveAndDeployToGitHub()" disabled>
          <i class="fa-solid fa-cloud-arrow-up"></i> Save & Deploy to GitHub
        </button>
      </div>
    </div>
  </div>

  <div id="deployStatusMsg" class="status-box"></div>

</div>

<script>
  // ==========================================
  // CONFIGURATION & CONSTANTS
  // ==========================================
  const REPO_OWNER = 'nathyBekele';
  const REPO_NAME = 'nathyBekele.github.io';
  const AUTHORIZED_USER = 'nathybekele';
  const VISIBILITY_FILE_PATH = '_data/visibility.yml';

  // Navigation pages metadata
  const TABS = {
    blog: { path: '_pages/blog.md', title: 'blog', url: '/blog/', currentSha: null },
    preprints: { path: '_pages/publications.md', title: 'preprints', url: '/publications/', currentSha: null },
    projects: { path: '_pages/projects.md', title: 'projects', url: '/projects/', currentSha: null },
    repositories: { path: '_pages/repositories.md', title: 'repositories', url: '/repositories/', currentSha: null },
    cv: { path: '_pages/cv.md', title: 'CV', url: '/cv/', currentSha: null }
  };

  // Pre-configured item lists for statistics and groups
  const ALL_BLOG_POSTS = [
    'your-open-source-ai-model-might-be-a-sleeper-agent',
    'contract-advisor-rag',
    'text-to-visual-transformation-in-digital-advertising',
    'building-dapp-on-ethereum-blockchain-using-flutter-and-react',
    'llm-finetuning-amharic-language',
    'precision-rag-prompt-tuning-enterprise-systems',
    'end-to-end-web3-dapps-algorand',
    'redash-chatbot-add-on',
    'data-warehousing-business-intelligence'
  ];

  const ALL_PREPRINTS = ['bekele2026geometry'];

  const ALL_PROJECTS = [
    '0_geometry_of_defection',
    '8_hate_speech_amharic',
    '1_afrochat',
    '2_adot',
    '9_cursor_spend_tracker',
    '5_promptkit',
    '6_vitalai',
    '7_redash_chatbot',
    '3_rateeat'
  ];

  const ALL_REPOS = [
    'nathyBekele/geometry-of-dormant-defection',
    'nathyBekele/promptKit',
    'nathyBekele/redash-chatbot-add-on',
    'nathyBekele/amharic-rag-ad-builder',
    'nathyBekele/logistics-dApp-on-ethereum',
    'nathyBekele/vitalAI'
  ];

  const ALL_CV_SECTIONS = [
    'Education',
    'Experience',
    'Skills',
    'Awards',
    'Projects',
    'Preprints',
    'References'
  ];

  const CV_EXP_MAP = {
    'Vula': 'Vula',
    'Turing': 'Turing',
    'Africa to Silicon Valley': 'A2SV'
  };

  const CV_PROJ_MAP = {
    'The Geometry of Dormant Defection': 'defection',
    'Amharic Hate Speech Detection': 'hate_speech',
    'AfroChat': 'afrochat',
    'Adot': 'adot',
    'Cursor Spend Tracker': 'cursor',
    'promptKit': 'promptkit',
    'VitalAI': 'vitalai',
    'Redash Chatbot Add-on': 'redash',
    'RateEat': 'rateeat'
  };

  const CV_REF_MAP = {
    'Alex Goff': 'Alex Goff',
    'Nic Rawhani': 'Nic Rawhani',
    'Prof. Jelani Nelson': 'Prof. Jelani Nelson',
    'Adis Ojeda': 'Adis Ojeda',
    'Dr. Fitsum Andarge': 'Dr. Fitsum Andarge',
    'Emre Varol': 'Emre Varol'
  };

  // State
  let githubToken = localStorage.getItem('nathy_admin_pat') || '';
  let visibilityFileSha = null;

  // Initial State from Jekyll template
  const initialVisibilityConfig = {
    hidden_posts: {{ site.data.visibility.hidden_posts | jsonify | default: '[]' }},
    hidden_preprints: {{ site.data.visibility.hidden_preprints | jsonify | default: '[]' }},
    hidden_projects: {{ site.data.visibility.hidden_projects | jsonify | default: '[]' }},
    hidden_repos: {{ site.data.visibility.hidden_repos | jsonify | default: '[]' }},
    cv: {
      hidden_sections: {{ site.data.visibility.cv.hidden_sections | jsonify | default: '[]' }},
      hidden_experience: {{ site.data.visibility.cv.hidden_experience | jsonify | default: '[]' }},
      hidden_projects: {{ site.data.visibility.cv.hidden_projects | jsonify | default: '[]' }},
      hidden_references: {{ site.data.visibility.cv.hidden_references | jsonify | default: '[]' }}
    }
  };

  // Overwrite with local preview storage if present
  try {
    const localStore = JSON.parse(localStorage.getItem('nathy_visibility_config') || '{}');
    if (localStore && typeof localStore === 'object') {
      if (Array.isArray(localStore.hidden_posts)) initialVisibilityConfig.hidden_posts = localStore.hidden_posts;
      if (Array.isArray(localStore.hidden_preprints)) initialVisibilityConfig.hidden_preprints = localStore.hidden_preprints;
      if (Array.isArray(localStore.hidden_projects)) initialVisibilityConfig.hidden_projects = localStore.hidden_projects;
      if (Array.isArray(localStore.hidden_repos)) initialVisibilityConfig.hidden_repos = localStore.hidden_repos;
      if (localStore.cv) {
        if (Array.isArray(localStore.cv.hidden_sections)) initialVisibilityConfig.cv.hidden_sections = localStore.cv.hidden_sections;
        if (Array.isArray(localStore.cv.hidden_experience)) initialVisibilityConfig.cv.hidden_experience = localStore.cv.hidden_experience;
        if (Array.isArray(localStore.cv.hidden_projects)) initialVisibilityConfig.cv.hidden_projects = localStore.cv.hidden_projects;
        if (Array.isArray(localStore.cv.hidden_references)) initialVisibilityConfig.cv.hidden_references = localStore.cv.hidden_references;
      }
    }
  } catch(e) {}

  // Live state vs Pending state
  let liveNavState = { blog: true, preprints: true, projects: true, repositories: true, cv: true };
  let pendingNavState = { ...liveNavState };

  let liveVisibility = JSON.parse(JSON.stringify(initialVisibilityConfig));
  let pendingVisibility = JSON.parse(JSON.stringify(initialVisibilityConfig));

  // ==========================================
  // INITIALIZATION
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    syncAllCheckboxesFromPending();
    updateUI();

    if (githubToken) {
      document.getElementById('patInput').value = githubToken;
      loginWithGitHub(true);
    }

    // Global keyboard shortcut
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        window.location.href = "{{ '/admin/' | relative_url }}";
      }
    });
  });

  // ==========================================
  // AUTHENTICATION
  // ==========================================
  async function loginWithGitHub(isSilent = false) {
    const inputToken = document.getElementById('patInput').value.trim();
    const statusMsg = document.getElementById('authStatusMsg');
    const authBtn = document.getElementById('authBtn');

    if (!inputToken) {
      showStatus(statusMsg, 'Please enter a valid Personal Access Token.', 'error');
      return;
    }

    authBtn.disabled = true;
    authBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Authenticating...';

    try {
      const userResp = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': `Bearer ${inputToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!userResp.ok) throw new Error('Invalid token or insufficient permissions.');
      const userData = await userResp.json();

      if (userData.login.toLowerCase() !== AUTHORIZED_USER.toLowerCase()) {
        throw new Error(`Unauthorized user @${userData.login}. Only repository owner @${REPO_OWNER} can manage this site.`);
      }

      githubToken = inputToken;
      localStorage.setItem('nathy_admin_pat', githubToken);

      document.getElementById('loggedOutView').style.display = 'none';
      document.getElementById('loggedInView').style.display = 'block';
      document.getElementById('userName').textContent = userData.name || userData.login;
      document.getElementById('userHandle').textContent = `@${userData.login}`;
      document.getElementById('userAvatar').src = userData.avatar_url;
      document.getElementById('authStatusBadge').innerHTML = '<span class="admin-badge badge-success"><i class="fa-solid fa-circle-check"></i> Connected as @' + userData.login + '</span>';

      if (!isSilent) {
        showStatus(statusMsg, `Authenticated successfully as @${userData.login}. Loading live GitHub configuration...`, 'success');
      }

      await fetchLiveStateFromGitHub();

    } catch (err) {
      console.error(err);
      localStorage.removeItem('nathy_admin_pat');
      document.getElementById('loggedOutView').style.display = 'block';
      document.getElementById('loggedInView').style.display = 'none';
      document.getElementById('authStatusBadge').innerHTML = '<span class="admin-badge badge-warning"><i class="fa-solid fa-lock"></i> Not Authenticated</span>';
      showStatus(statusMsg, err.message, 'error');
    } finally {
      authBtn.disabled = false;
      authBtn.innerHTML = '<i class="fa-solid fa-key"></i> Connect to GitHub';
    }
  }

  function logoutGitHub() {
    localStorage.removeItem('nathy_admin_pat');
    githubToken = '';
    document.getElementById('patInput').value = '';
    document.getElementById('loggedOutView').style.display = 'block';
    document.getElementById('loggedInView').style.display = 'none';
    document.getElementById('authStatusBadge').innerHTML = '<span class="admin-badge badge-warning"><i class="fa-solid fa-lock"></i> Not Authenticated</span>';
    document.getElementById('saveBtn').disabled = true;
    showStatus(document.getElementById('authStatusMsg'), 'Disconnected from GitHub. Reconnect anytime with your token.', 'info');
  }

  // ==========================================
  // FETCH LIVE DATA FROM GITHUB
  // ==========================================
  async function fetchLiveStateFromGitHub() {
    if (!githubToken) return;

    // 1. Fetch nav tab states from markdown files
    for (const [key, tab] of Object.entries(TABS)) {
      try {
        const resp = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${tab.path}`, {
          headers: {
            'Authorization': `Bearer ${githubToken}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        if (resp.ok) {
          const data = await resp.json();
          tab.currentSha = data.sha;
          const rawContent = decodeURIComponent(escape(atob(data.content.replace(/\s/g, ''))));
          const navMatch = rawContent.match(/^nav:\s*(true|false)/m);
          if (navMatch) {
            liveNavState[key] = (navMatch[1] === 'true');
          }
        }
      } catch (e) {
        console.warn(`Could not fetch ${tab.path}:`, e);
      }
    }

    // 2. Fetch visibility.yml from GitHub
    try {
      const visResp = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${VISIBILITY_FILE_PATH}`, {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (visResp.ok) {
        const data = await visResp.json();
        visibilityFileSha = data.sha;
        const yamlText = decodeURIComponent(escape(atob(data.content.replace(/\s/g, ''))));
        const parsed = parseSimpleYaml(yamlText);
        liveVisibility = parsed;
      }
    } catch (e) {
      console.warn('Could not fetch visibility file:', e);
    }

    pendingNavState = { ...liveNavState };
    pendingVisibility = JSON.parse(JSON.stringify(liveVisibility));
    syncAllCheckboxesFromPending();
    updateUI();
  }

  // ==========================================
  // TOGGLE HANDLERS
  // ==========================================
  function onNavToggleChange(tabKey) {
    const isChecked = document.getElementById(`toggle_tab_${tabKey}`).checked;
    pendingNavState[tabKey] = isChecked;
    saveLocalPreview();
    updateUI();
  }

  function onItemToggleChange(type, key) {
    const isVisible = document.getElementById(`toggle_${type === 'posts' ? 'post' : type === 'preprints' ? 'preprint' : type === 'projects' ? 'project' : 'repo'}_${key}`).checked;
    const arrayName = type === 'posts' ? 'hidden_posts' : type === 'preprints' ? 'hidden_preprints' : type === 'projects' ? 'hidden_projects' : 'hidden_repos';
    
    if (isVisible) {
      // Remove from hidden
      pendingVisibility[arrayName] = pendingVisibility[arrayName].filter(item => item !== key);
    } else {
      // Add to hidden
      if (!pendingVisibility[arrayName].includes(key)) {
        pendingVisibility[arrayName].push(key);
      }
    }
    saveLocalPreview();
    updateUI();
  }

  function onCvSectionToggleChange(sectionName) {
    const isVisible = document.getElementById(`toggle_cv_section_${sectionName}`).checked;
    if (isVisible) {
      pendingVisibility.cv.hidden_sections = pendingVisibility.cv.hidden_sections.filter(s => s !== sectionName);
    } else {
      if (!pendingVisibility.cv.hidden_sections.includes(sectionName)) {
        pendingVisibility.cv.hidden_sections.push(sectionName);
      }
    }
    saveLocalPreview();
    updateUI();
  }

  function onCvSubItemToggleChange(subType, key) {
    const arrayKey = `hidden_${subType}`;
    let isVisible = false;
    
    if (subType === 'experience') {
      const code = CV_EXP_MAP[key] || key;
      isVisible = document.getElementById(`toggle_cv_exp_${code}`).checked;
    } else if (subType === 'projects') {
      const code = CV_PROJ_MAP[key] || key;
      isVisible = document.getElementById(`toggle_cv_proj_${code}`).checked;
    } else if (subType === 'references') {
      isVisible = document.getElementById(`toggle_cv_ref_${key}`).checked;
    }

    if (isVisible) {
      pendingVisibility.cv[arrayKey] = pendingVisibility.cv[arrayKey].filter(item => item !== key);
    } else {
      if (!pendingVisibility.cv[arrayKey].includes(key)) {
        pendingVisibility.cv[arrayKey].push(key);
      }
    }
    saveLocalPreview();
    updateUI();
  }

  // ==========================================
  // BULK GROUP TOGGLE ACTIONS
  // ==========================================
  function setGroupState(group, makeVisible) {
    if (group === 'nav') {
      Object.keys(TABS).forEach(k => pendingNavState[k] = makeVisible);
    } else if (group === 'blog_posts') {
      pendingVisibility.hidden_posts = makeVisible ? [] : [...ALL_BLOG_POSTS];
    } else if (group === 'preprints') {
      pendingVisibility.hidden_preprints = makeVisible ? [] : [...ALL_PREPRINTS];
    } else if (group === 'projects') {
      pendingVisibility.hidden_projects = makeVisible ? [] : [...ALL_PROJECTS];
    } else if (group === 'repos') {
      pendingVisibility.hidden_repos = makeVisible ? [] : [...ALL_REPOS];
    } else if (group === 'cv_sections') {
      pendingVisibility.cv.hidden_sections = makeVisible ? [] : [...ALL_CV_SECTIONS];
    }
    syncAllCheckboxesFromPending();
    saveLocalPreview();
    updateUI();
  }

  // ==========================================
  // SYNC CHECKBOXES & BADGES
  // ==========================================
  function syncAllCheckboxesFromPending() {
    // 1. Navigation
    Object.keys(TABS).forEach(tab => {
      const cb = document.getElementById(`toggle_tab_${tab}`);
      if (cb) cb.checked = pendingNavState[tab];
    });

    // 2. Blog posts
    ALL_BLOG_POSTS.forEach(slug => {
      const cb = document.getElementById(`toggle_post_${slug}`);
      if (cb) cb.checked = !pendingVisibility.hidden_posts.includes(slug);
    });

    // 3. Preprints
    ALL_PREPRINTS.forEach(key => {
      const cb = document.getElementById(`toggle_preprint_${key}`);
      if (cb) cb.checked = !pendingVisibility.hidden_preprints.includes(key);
    });

    // 4. Projects
    ALL_PROJECTS.forEach(slug => {
      const cb = document.getElementById(`toggle_project_${slug}`);
      if (cb) cb.checked = !pendingVisibility.hidden_projects.includes(slug);
    });

    // 5. Repos
    ALL_REPOS.forEach(repo => {
      const cb = document.getElementById(`toggle_repo_${repo}`);
      if (cb) cb.checked = !pendingVisibility.hidden_repos.includes(repo);
    });

    // 6. CV sections
    ALL_CV_SECTIONS.forEach(sec => {
      const cb = document.getElementById(`toggle_cv_section_${sec}`);
      if (cb) cb.checked = !pendingVisibility.cv.hidden_sections.includes(sec);
    });

    // 7. CV sub-items: Experience
    Object.keys(CV_EXP_MAP).forEach(expKey => {
      const code = CV_EXP_MAP[expKey];
      const cb = document.getElementById(`toggle_cv_exp_${code}`);
      if (cb) cb.checked = !pendingVisibility.cv.hidden_experience.includes(expKey);
    });

    // 8. CV sub-items: Projects
    Object.keys(CV_PROJ_MAP).forEach(projKey => {
      const code = CV_PROJ_MAP[projKey];
      const cb = document.getElementById(`toggle_cv_proj_${code}`);
      if (cb) cb.checked = !pendingVisibility.cv.hidden_projects.includes(projKey);
    });

    // 9. CV sub-items: References
    Object.keys(CV_REF_MAP).forEach(refKey => {
      const cb = document.getElementById(`toggle_cv_ref_${refKey}`);
      if (cb) cb.checked = !pendingVisibility.cv.hidden_references.includes(refKey);
    });
  }

  function updateUI() {
    let changeList = [];

    // Helper for badges
    const setBadge = (elId, isVisible) => {
      const el = document.getElementById(elId);
      if (!el) return;
      el.className = isVisible ? 'admin-badge badge-success' : 'admin-badge badge-muted';
      el.textContent = isVisible ? 'Visible' : 'Hidden';
    };

    // Nav tabs
    let visibleNavCount = 0;
    Object.keys(TABS).forEach(tab => {
      const isVisible = pendingNavState[tab];
      setBadge(`badge_tab_${tab}`, isVisible);
      if (isVisible) visibleNavCount++;
      if (pendingNavState[tab] !== liveNavState[tab]) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} navigation tab: ${tab}`);
      }
    });
    document.getElementById('stat_nav').textContent = `${visibleNavCount}/${Object.keys(TABS).length} Visible`;

    // Blog posts
    let visibleBlogCount = 0;
    ALL_BLOG_POSTS.forEach(slug => {
      const isVisible = !pendingVisibility.hidden_posts.includes(slug);
      setBadge(`badge_post_${slug}`, isVisible);
      if (isVisible) visibleBlogCount++;
      const wasVisible = !liveVisibility.hidden_posts.includes(slug);
      if (isVisible !== wasVisible) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} blog: ${slug}`);
      }
    });
    document.getElementById('stat_blog').textContent = `${visibleBlogCount}/${ALL_BLOG_POSTS.length} Visible`;

    // Preprints
    let visiblePreprintsCount = 0;
    ALL_PREPRINTS.forEach(key => {
      const isVisible = !pendingVisibility.hidden_preprints.includes(key);
      setBadge(`badge_preprint_${key}`, isVisible);
      if (isVisible) visiblePreprintsCount++;
      const wasVisible = !liveVisibility.hidden_preprints.includes(key);
      if (isVisible !== wasVisible) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} preprint: ${key}`);
      }
    });
    document.getElementById('stat_preprints').textContent = `${visiblePreprintsCount}/${ALL_PREPRINTS.length} Visible`;

    // Projects
    let visibleProjectsCount = 0;
    ALL_PROJECTS.forEach(slug => {
      const isVisible = !pendingVisibility.hidden_projects.includes(slug);
      setBadge(`badge_project_${slug}`, isVisible);
      if (isVisible) visibleProjectsCount++;
      const wasVisible = !liveVisibility.hidden_projects.includes(slug);
      if (isVisible !== wasVisible) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} project: ${slug}`);
      }
    });
    document.getElementById('stat_projects').textContent = `${visibleProjectsCount}/${ALL_PROJECTS.length} Visible`;

    // Repos
    let visibleReposCount = 0;
    ALL_REPOS.forEach(repo => {
      const isVisible = !pendingVisibility.hidden_repos.includes(repo);
      const shortName = repo.split('/')[1];
      setBadge(`badge_repo_${shortName}`, isVisible);
      if (isVisible) visibleReposCount++;
      const wasVisible = !liveVisibility.hidden_repos.includes(repo);
      if (isVisible !== wasVisible) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} repository: ${shortName}`);
      }
    });
    document.getElementById('stat_repos').textContent = `${visibleReposCount}/${ALL_REPOS.length} Visible`;

    // CV sections
    let visibleCvSectionsCount = 0;
    ALL_CV_SECTIONS.forEach(sec => {
      const isVisible = !pendingVisibility.cv.hidden_sections.includes(sec);
      setBadge(`badge_cv_section_${sec}`, isVisible);
      if (isVisible) visibleCvSectionsCount++;
      const wasVisible = !liveVisibility.cv.hidden_sections.includes(sec);
      if (isVisible !== wasVisible) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} CV section: ${sec}`);
      }
    });
    document.getElementById('stat_cv').textContent = `${visibleCvSectionsCount}/${ALL_CV_SECTIONS.length} Sections Visible`;

    // CV Sub-items: Experience
    Object.keys(CV_EXP_MAP).forEach(k => {
      const isVisible = !pendingVisibility.cv.hidden_experience.includes(k);
      setBadge(`badge_cv_exp_${CV_EXP_MAP[k]}`, isVisible);
      const wasVisible = !liveVisibility.cv.hidden_experience.includes(k);
      if (isVisible !== wasVisible) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} CV role: ${k}`);
      }
    });

    // CV Sub-items: Projects
    Object.keys(CV_PROJ_MAP).forEach(k => {
      const isVisible = !pendingVisibility.cv.hidden_projects.includes(k);
      setBadge(`badge_cv_proj_${CV_PROJ_MAP[k]}`, isVisible);
      const wasVisible = !liveVisibility.cv.hidden_projects.includes(k);
      if (isVisible !== wasVisible) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} CV project: ${k}`);
      }
    });

    // CV Sub-items: References
    Object.keys(CV_REF_MAP).forEach(k => {
      const isVisible = !pendingVisibility.cv.hidden_references.includes(k);
      setBadge(`badge_cv_ref_${k}`, isVisible);
      const wasVisible = !liveVisibility.cv.hidden_references.includes(k);
      if (isVisible !== wasVisible) {
        changeList.push(`${isVisible ? 'Show' : 'Hide'} CV reference: ${k}`);
      }
    });

    // Action Bar UI
    const barContainer = document.getElementById('actionBarContainer');
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const summaryText = document.getElementById('pendingSummaryText');
    const detailText = document.getElementById('pendingDetailText');

    if (barContainer) {
      barContainer.style.display = changeList.length > 0 ? 'block' : 'none';
    }

    if (changeList.length > 0) {
      saveBtn.disabled = !githubToken;
      resetBtn.disabled = false;
      summaryText.innerHTML = `<span style="color: var(--global-theme-color);"><i class="fa-solid fa-pen-to-square"></i> ${changeList.length} Pending Change(s)</span>`;
      detailText.textContent = changeList.slice(0, 3).join(' • ') + (changeList.length > 3 ? ` ...and ${changeList.length - 3} more` : '');
    } else {
      saveBtn.disabled = true;
      resetBtn.disabled = true;
      summaryText.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #28a745;"></i> No pending changes';
      detailText.textContent = 'All switches match live GitHub state';
    }
  }

  function resetToLiveState() {
    pendingNavState = { ...liveNavState };
    pendingVisibility = JSON.parse(JSON.stringify(liveVisibility));
    syncAllCheckboxesFromPending();
    saveLocalPreview();
    updateUI();
    showStatus(document.getElementById('deployStatusMsg'), 'Reset all toggles to live GitHub state.', 'info');
  }

  // ==========================================
  // SAVE & DEPLOY TO GITHUB
  // ==========================================
  async function saveAndDeployToGitHub() {
    if (!githubToken) {
      alert('Please authenticate with GitHub first.');
      return;
    }

    const saveBtn = document.getElementById('saveBtn');
    const statusMsg = document.getElementById('deployStatusMsg');

    saveBtn.disabled = true;
    saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Committing to GitHub...';
    showStatus(statusMsg, 'Preparing atomic Git commit via GitHub REST API...', 'info');

    try {
      const updatedFiles = [];

      // 1. Commit visibility.yml if items or CV changed
      const visibilityYaml = generateYaml(pendingVisibility);
      const encodedYaml = btoa(unescape(encodeURIComponent(visibilityYaml)));

      // Fetch fresh sha for visibility.yml
      const visGetResp = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${VISIBILITY_FILE_PATH}`, {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      let currentVisSha = visibilityFileSha;
      if (visGetResp.ok) {
        const visGetData = await visGetResp.json();
        currentVisSha = visGetData.sha;
      }

      const visPutResp = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${VISIBILITY_FILE_PATH}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          message: 'chore(visibility): update fine-grained item visibility config',
          content: encodedYaml,
          sha: currentVisSha,
          branch: 'main'
        })
      });

      if (!visPutResp.ok) {
        const errData = await visPutResp.json();
        throw new Error(`Failed to commit ${VISIBILITY_FILE_PATH}: ${errData.message || visPutResp.statusText}`);
      }
      const visPutData = await visPutResp.json();
      visibilityFileSha = visPutData.content.sha;
      liveVisibility = JSON.parse(JSON.stringify(pendingVisibility));
      updatedFiles.push(VISIBILITY_FILE_PATH);

      // 2. Commit any navigation pages that changed
      for (const [key, tab] of Object.entries(TABS)) {
        if (pendingNavState[key] !== liveNavState[key]) {
          const fileResp = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${tab.path}`, {
            headers: {
              'Authorization': `Bearer ${githubToken}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          });
          if (!fileResp.ok) throw new Error(`Failed to fetch current ${tab.path}`);
          const fileData = await fileResp.json();
          const oldContent = decodeURIComponent(escape(atob(fileData.content.replace(/\s/g, ''))));

          const newNavValue = pendingNavState[key] ? 'true' : 'false';
          let updatedContent = '';
          if (/^nav:\s*(true|false)/m.test(oldContent)) {
            updatedContent = oldContent.replace(/^nav:\s*(true|false)/m, `nav: ${newNavValue}`);
          } else {
            updatedContent = oldContent.replace(/^(---\s*[\r\n]+)/, `$1nav: ${newNavValue}\n`);
          }

          const encodedPage = btoa(unescape(encodeURIComponent(updatedContent)));
          const pagePutResp = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${tab.path}`, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${githubToken}`,
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
              message: `chore(nav): set ${key} page nav to ${newNavValue}`,
              content: encodedPage,
              sha: fileData.sha,
              branch: 'main'
            })
          });

          if (!pagePutResp.ok) {
            const errData = await pagePutResp.json();
            throw new Error(`Failed to update ${tab.path}: ${errData.message || pagePutResp.statusText}`);
          }
          const pagePutData = await pagePutResp.json();
          tab.currentSha = pagePutData.content.sha;
          liveNavState[key] = pendingNavState[key];
          updatedFiles.push(tab.path);
        }
      }

      saveLocalPreview();
      updateUI();

      const successHtml = `
        <strong><i class="fa-solid fa-circle-check"></i> Changes committed successfully to branch 'main'!</strong><br/>
        Updated: <code>${updatedFiles.join(', ')}</code>.<br/>
        GitHub Pages build has been dispatched. Changes will reflect globally in ~30–45 seconds.<br/>
        <a href="https://github.com/${REPO_OWNER}/${REPO_NAME}/actions" target="_blank" class="btn btn-sm btn-outline-success mt-2" style="font-weight: 600;">
          <i class="fa-brands fa-github"></i> Track GitHub Actions Build
        </a>
      `;
      showStatus(statusMsg, successHtml, 'success', true);

    } catch (err) {
      console.error(err);
      showStatus(statusMsg, `Deployment Error: ${err.message}`, 'error');
    } finally {
      saveBtn.disabled = false;
      saveBtn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Save & Deploy to GitHub';
    }
  }

  // ==========================================
  // LOCAL PREVIEW PERSISTENCE
  // ==========================================
  function saveLocalPreview() {
    try {
      localStorage.setItem('nathy_visibility_config', JSON.stringify(pendingVisibility));
      // Dynamically update the top navbar on the current page
      const navLinks = document.querySelectorAll('.navbar-nav .nav-item');
      navLinks.forEach(item => {
        const link = item.querySelector('a.nav-link');
        if (!link) return;
        const href = (link.getAttribute('href') || '').toLowerCase();
        const text = (link.textContent || '').trim().toLowerCase();

        for (const [key, tab] of Object.entries(TABS)) {
          if (href.includes(tab.url) || text === tab.title.toLowerCase()) {
            item.style.display = pendingNavState[key] ? '' : 'none';
          }
        }
      });
    } catch(e) {}
  }

  // ==========================================
  // SEARCH & CATEGORY FILTERING
  // ==========================================
  function switchCategoryTab(cat, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    const targetBtn = btn || (window.event && window.event.currentTarget) || document.querySelector(`.admin-nav-btn[onclick*="'${cat}'"]`);
    if (targetBtn) targetBtn.classList.add('active');

    const cards = {
      nav: document.getElementById('card_nav'),
      blog: document.getElementById('card_blog'),
      preprints: document.getElementById('card_preprints'),
      projects: document.getElementById('card_projects'),
      repos: document.getElementById('card_repos'),
      cv: document.getElementById('card_cv')
    };

    if (cat === 'all') {
      Object.values(cards).forEach(c => c && (c.style.display = 'block'));
    } else {
      Object.entries(cards).forEach(([key, card]) => {
        if (card) card.style.display = (key === cat) ? 'block' : 'none';
      });
    }
  }

  function filterAdminItems() {
    const query = document.getElementById('adminFilterInput').value.toLowerCase().trim();
    document.querySelectorAll('.admin-item').forEach(item => {
      const searchData = (item.getAttribute('data-search') || '').toLowerCase();
      const text = item.textContent.toLowerCase();
      if (!query || searchData.includes(query) || text.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // ==========================================
  // YAML SERIALIZER & PARSER
  // ==========================================
  function generateYaml(config) {
    let out = `# Control Center Visibility Configuration\n# Managed automatically via /admin/\n\n`;

    const writeArray = (key, arr) => {
      out += `${key}:\n`;
      if (!arr || arr.length === 0) {
        out += `  []\n`;
      } else {
        arr.forEach(item => {
          out += `  - "${item.replace(/"/g, '\\"')}"\n`;
        });
      }
      out += `\n`;
    };

    writeArray('hidden_posts', config.hidden_posts);
    writeArray('hidden_preprints', config.hidden_preprints);
    writeArray('hidden_projects', config.hidden_projects);
    writeArray('hidden_repos', config.hidden_repos);

    out += `cv:\n`;
    const writeCvArray = (key, arr) => {
      out += `  ${key}:\n`;
      if (!arr || arr.length === 0) {
        out += `    []\n`;
      } else {
        arr.forEach(item => {
          out += `    - "${item.replace(/"/g, '\\"')}"\n`;
        });
      }
    };

    writeCvArray('hidden_sections', (config.cv && config.cv.hidden_sections) || []);
    writeCvArray('hidden_experience', (config.cv && config.cv.hidden_experience) || []);
    writeCvArray('hidden_projects', (config.cv && config.cv.hidden_projects) || []);
    writeCvArray('hidden_references', (config.cv && config.cv.hidden_references) || []);

    return out;
  }

  function parseSimpleYaml(text) {
    const res = {
      hidden_posts: [],
      hidden_preprints: [],
      hidden_projects: [],
      hidden_repos: [],
      cv: {
        hidden_sections: [],
        hidden_experience: [],
        hidden_projects: [],
        hidden_references: []
      }
    };

    let currentSection = null;
    let inCv = false;
    let currentCvSub = null;

    text.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;

      if (line.startsWith('hidden_posts:')) { currentSection = 'hidden_posts'; inCv = false; return; }
      if (line.startsWith('hidden_preprints:')) { currentSection = 'hidden_preprints'; inCv = false; return; }
      if (line.startsWith('hidden_projects:')) { currentSection = 'hidden_projects'; inCv = false; return; }
      if (line.startsWith('hidden_repos:')) { currentSection = 'hidden_repos'; inCv = false; return; }
      if (line.startsWith('cv:')) { inCv = true; currentSection = null; return; }

      if (inCv) {
        if (line.includes('hidden_sections:')) { currentCvSub = 'hidden_sections'; return; }
        if (line.includes('hidden_experience:')) { currentCvSub = 'hidden_experience'; return; }
        if (line.includes('hidden_projects:')) { currentCvSub = 'hidden_projects'; return; }
        if (line.includes('hidden_references:')) { currentCvSub = 'hidden_references'; return; }

        if (trimmed.startsWith('-')) {
          const val = trimmed.replace(/^-\s*/, '').replace(/^["']|["']$/g, '');
          if (val && currentCvSub && res.cv[currentCvSub]) {
            res.cv[currentCvSub].push(val);
          }
        }
      } else if (currentSection && trimmed.startsWith('-')) {
        const val = trimmed.replace(/^-\s*/, '').replace(/^["']|["']$/g, '');
        if (val && res[currentSection]) {
          res[currentSection].push(val);
        }
      }
    });

    return res;
  }

  function showStatus(el, msg, type = 'info', isHtml = false) {
    el.className = `status-box status-${type}`;
    if (isHtml) el.innerHTML = msg;
    else el.textContent = msg;
    el.style.display = 'block';
  }
</script>
