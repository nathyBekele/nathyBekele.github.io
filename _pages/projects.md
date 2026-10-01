---
layout: page
title: projects
permalink: /projects/
description: A showcase of selected engineering, AI systems, and fullstack projects.
nav: true
nav_order: 3
display_categories: [work]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category mb-3">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3 g-3">
    {% for project in sorted_projects %}
      {% if site.data.visibility.hidden_projects contains project.title or site.data.visibility.hidden_projects contains project.slug or site.data.visibility.hidden_projects contains project.relative_path %}
        {% continue %}
      {% endif %}
      {% assign p_slug = project.relative_path | remove: '_projects/' | remove: '.md' %}
      <div class="col mb-4 project-item" data-project-slug="{{ p_slug }}" data-project-title="{{ project.title }}">
        <div class="card h-100 project-card shadow-sm border">
          {% if project.img %}
            <div class="project-thumb-container">
              <a href="{% if project.live %}{{ project.live }}{% elsif project.github %}https://github.com/{{ project.github }}{% elsif project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}" {% if project.live or project.github or project.redirect contains '://' %}target="_blank" rel="noopener noreferrer"{% endif %}>
                <img src="{{ project.img | relative_url }}" class="card-img-top project-thumb-img" alt="{{ project.title }}" loading="eager">
              </a>
            </div>
          {% endif %}

          <div class="card-body p-3 d-flex flex-column">
            <h3 class="project-card-title mb-2">
              <a href="{{ project.url | relative_url }}" class="project-title-link">
                {{ project.title }}
              </a>
            </h3>

            <p class="project-card-text text-muted mb-3 flex-grow-1">
              {{ project.description }}
            </p>

            <div class="project-card-footer pt-2 border-top-0 d-flex flex-wrap align-items-center justify-content-between" style="gap: 8px;">
              <div class="d-flex flex-wrap align-items-center" style="gap: 6px;">
                {% if project.live %}
                  <a href="{{ project.live }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-project-action btn-live">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i> Live
                  </a>
                {% endif %}

                {% if project.github %}
                  <a href="https://github.com/{{ project.github }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-project-action btn-github">
                    <i class="fa-brands fa-github fa-sm"></i> Code
                  </a>
                {% endif %}

                {% if project.notebook %}
                  <a href="{{ project.notebook }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-project-action btn-notebook">
                    <i class="fa-solid fa-book-open fa-2xs"></i> Notebook
                  </a>
                {% endif %}
              </div>

              <a href="{{ project.url | relative_url }}" class="btn-project-overview text-muted" title="View Project Details">
                Details <i class="fa-solid fa-arrow-right fa-2xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}

  </div>
  {% endfor %}

{% else %}

{% assign sorted_projects = site.projects | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3 g-3">
    {% for project in sorted_projects %}
      {% if site.data.visibility.hidden_projects contains project.title or site.data.visibility.hidden_projects contains project.slug or site.data.visibility.hidden_projects contains project.relative_path %}
        {% continue %}
      {% endif %}
      {% assign p_slug = project.relative_path | remove: '_projects/' | remove: '.md' %}
      <div class="col mb-4 project-item" data-project-slug="{{ p_slug }}" data-project-title="{{ project.title }}">
        <div class="card h-100 project-card shadow-sm border">
          {% if project.img %}
            <div class="project-thumb-container">
              <a href="{% if project.live %}{{ project.live }}{% elsif project.github %}https://github.com/{{ project.github }}{% elsif project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}" {% if project.live or project.github or project.redirect contains '://' %}target="_blank" rel="noopener noreferrer"{% endif %}>
                <img src="{{ project.img | relative_url }}" class="card-img-top project-thumb-img" alt="{{ project.title }}" loading="eager">
              </a>
            </div>
          {% endif %}

          <div class="card-body p-3 d-flex flex-column">
            <h3 class="project-card-title mb-2">
              <a href="{{ project.url | relative_url }}" class="project-title-link">
                {{ project.title }}
              </a>
            </h3>

            <p class="project-card-text text-muted mb-3 flex-grow-1">
              {{ project.description }}
            </p>

            <div class="project-card-footer pt-2 border-top-0 d-flex flex-wrap align-items-center justify-content-between" style="gap: 8px;">
              <div class="d-flex flex-wrap align-items-center" style="gap: 6px;">
                {% if project.live %}
                  <a href="{{ project.live }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-project-action btn-live">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i> Live
                  </a>
                {% endif %}

                {% if project.github %}
                  <a href="https://github.com/{{ project.github }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-project-action btn-github">
                    <i class="fa-brands fa-github fa-sm"></i> Code
                  </a>
                {% endif %}

                {% if project.notebook %}
                  <a href="{{ project.notebook }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-project-action btn-notebook">
                    <i class="fa-solid fa-book-open fa-2xs"></i> Notebook
                  </a>
                {% endif %}
              </div>

              <a href="{{ project.url | relative_url }}" class="btn-project-overview text-muted" title="View Project Details">
                Details <i class="fa-solid fa-arrow-right fa-2xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}

  </div>
{% endif %}
</div>

<style>
.project-card {
  background-color: var(--global-card-bg-color, #ffffff);
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.08)) !important;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
  border-color: var(--global-theme-color) !important;
}
.project-thumb-container {
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  background-color: var(--global-code-bg-color, #0f172a);
}
.project-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
}
.project-card:hover .project-thumb-img {
  transform: scale(1.03);
}
.project-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
}
.project-title-link {
  color: var(--global-text-color, #1a1a1a) !important;
  text-decoration: none !important;
}
.project-title-link:hover {
  color: var(--global-theme-color) !important;
}
.project-card-text {
  font-size: 0.86rem;
  line-height: 1.48;
  color: var(--global-text-color-light, #666666) !important;
  margin-bottom: 0.75rem;
  min-height: 52px;
}
.project-card-footer {
  margin-top: auto;
}
.btn-project-action {
  font-size: 0.74rem;
  font-weight: 500;
  padding: 3px 9px;
  border-radius: 6px;
  text-decoration: none !important;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  box-shadow: none !important;
}
.btn-project-action.btn-live {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981 !important;
  border: 1px solid rgba(16, 185, 129, 0.3);
}
.btn-project-action.btn-live:hover {
  background-color: #10b981;
  color: #ffffff !important;
}
.btn-project-action.btn-github {
  background-color: var(--global-code-bg-color, rgba(0,0,0,0.05));
  color: var(--global-text-color, #333) !important;
  border: 1px solid var(--global-divider-color, #ddd);
}
.btn-project-action.btn-github:hover {
  background-color: var(--global-theme-color);
  color: #ffffff !important;
  border-color: var(--global-theme-color);
}
.btn-project-action.btn-notebook {
  background-color: rgba(245, 158, 11, 0.1);
  color: #f59e0b !important;
  border: 1px solid rgba(245, 158, 11, 0.3);
}
.btn-project-action.btn-notebook:hover {
  background-color: #f59e0b;
  color: #ffffff !important;
}
.btn-project-overview {
  font-size: 0.76rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: color 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
.btn-project-overview:hover {
  color: var(--global-theme-color) !important;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  try {
    const localCfg = JSON.parse(localStorage.getItem('nathy_visibility_config') || '{}');
    if (Array.isArray(localCfg.hidden_projects)) {
      document.querySelectorAll('.project-item').forEach(item => {
        const slug = item.getAttribute('data-project-slug');
        const title = item.getAttribute('data-project-title');
        if (localCfg.hidden_projects.includes(slug) || localCfg.hidden_projects.includes(title)) {
          item.style.display = 'none';
        }
      });
    }
  } catch(e) {}
});
</script>
