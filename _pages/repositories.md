---
layout: page
permalink: /repositories/
title: repositories
description: Open-source repositories, research artifacts, and developer tools.
nav: true
nav_order: 4
---

<style>
  .stats-card-col {
    flex: 1 1 0;
    max-width: 50%;
  }
  .stats-card-img {
    width: 100%;
    height: 195px;
    object-fit: fill;
    border-radius: 4.5px;
  }
  @media (max-width: 768px) {
    .stats-card-col {
      max-width: 100%;
      width: 100%;
    }
    .stats-card-img {
      height: auto;
      aspect-ratio: 467 / 195;
    }
  }
</style>

{% if site.data.repositories.github_users %}

## GitHub Stats

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    <div class="repo stats-card-col p-2 text-center">
      <a href="https://github.com/{{ user }}">
        <img
          class="only-light stats-card-img"
          alt="{{ user }} GitHub Stats"
          src="https://github-stats-extended.vercel.app/api/?username={{ user }}&theme={{ site.repo_theme_light }}&show_icons=true&include_all_commits=true&hide=issues,contribs&show=contributions,prs_merged&custom_title=GitHub+Activity&card_width=467"
          onerror="this.closest('.repo').style.display='none'"
        >
        <img
          class="only-dark stats-card-img"
          alt="{{ user }} GitHub Stats"
          src="https://github-stats-extended.vercel.app/api/?username={{ user }}&theme={{ site.repo_theme_dark }}&show_icons=true&include_all_commits=true&hide=issues,contribs&show=contributions,prs_merged&custom_title=GitHub+Activity&card_width=467"
          onerror="this.closest('.repo').style.display='none'"
        >
      </a>
    </div>
    <div class="repo stats-card-col p-2 text-center">
      <a href="https://github.com/{{ user }}">
        <img
          class="only-light stats-card-img"
          alt="{{ user }} Top Languages"
          src="{{ 'assets/img/top_languages_light.svg' | relative_url }}"
        >
        <img
          class="only-dark stats-card-img"
          alt="{{ user }} Top Languages"
          src="{{ 'assets/img/top_languages_dark.svg' | relative_url }}"
        >
      </a>
    </div>
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## Selected Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% if site.data.visibility.hidden_repos contains repo %}
      {% continue %}
    {% endif %}
    {% assign repo_parts = repo | split: '/' %}
    {% assign repo_owner = repo_parts[0] %}
    {% assign repo_name = repo_parts[1] %}
    <div class="repo repo-item p-2 text-center" data-repo="{{ repo }}">
      <a href="https://github.com/{{ repo }}">
        <img
          class="only-light w-100"
          alt="{{ repo }}"
          src="https://github-stats-extended.vercel.app/api/pin/?username={{ repo_owner }}&repo={{ repo_name }}&theme={{ site.repo_theme_light }}&locale=en&show_owner=false&description_lines_count=3&cache_seconds=1800"
          onerror="this.closest('.repo').style.display='none'"
        >
        <img
          class="only-dark w-100"
          alt="{{ repo }}"
          src="https://github-stats-extended.vercel.app/api/pin/?username={{ repo_owner }}&repo={{ repo_name }}&theme={{ site.repo_theme_dark }}&locale=en&show_owner=false&description_lines_count=3&cache_seconds=1800"
          onerror="this.closest('.repo').style.display='none'"
        >
      </a>
    </div>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  try {
    const localCfg = JSON.parse(localStorage.getItem('nathy_visibility_config') || '{}');
    if (Array.isArray(localCfg.hidden_repos)) {
      document.querySelectorAll('.repo-item').forEach(item => {
        const repo = item.getAttribute('data-repo');
        if (localCfg.hidden_repos.includes(repo)) {
          item.style.display = 'none';
        }
      });
    }
  } catch(e) {}
});
</script>
{% endif %}
