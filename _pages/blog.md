---
layout: page
permalink: /blog/
title: blog
description: Articles on AI security, large language models, RAG architectures, and Web3 engineering.
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<!-- Hashtag Filter Pills -->
<div class="blog-filters mb-3">
    <div class="d-flex flex-wrap align-items-center" style="gap: 6px;">
      {% assign all_visible_count = 0 %}
      {% for post in site.posts %}
        {% if site.data.visibility.hidden_posts contains post.slug or site.data.visibility.hidden_posts contains post.title or site.data.visibility.hidden_posts contains post.relative_path %}
          {% continue %}
        {% endif %}
        {% assign all_visible_count = all_visible_count | plus: 1 %}
      {% endfor %}

      <button type="button" class="btn btn-sm btn-filter active" data-filter="all">
        All <span class="filter-count">({{ all_visible_count }})</span>
      </button>
      {% for tag in site.display_tags %}
        {% assign count = 0 %}
        {% for post in site.posts %}
          {% if site.data.visibility.hidden_posts contains post.slug or site.data.visibility.hidden_posts contains post.title or site.data.visibility.hidden_posts contains post.relative_path %}
            {% continue %}
          {% endif %}
          {% if post.tags contains tag %}
            {% assign count = count | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% if count > 0 %}
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="btn btn-sm btn-filter" data-filter="{{ tag }}">
            <i class="fa-solid fa-hashtag fa-2xs"></i> {{ tag }} <span class="filter-count">({{ count }})</span>
          </a>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <!-- Blog Post List -->
  <ul class="post-list p-0" style="list-style: none;">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}
    {% if site.data.visibility.hidden_posts contains post.slug or site.data.visibility.hidden_posts contains post.title or site.data.visibility.hidden_posts contains post.relative_path %}
      {% continue %}
    {% endif %}
    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% assign year = post.date | date: "%Y" %}

    <li class="blog-item border-bottom" data-tags="{{ post.tags | join: ' ' }}" data-post-slug="{{ post.slug }}" data-post-title="{{ post.title }}">
      <div class="row align-items-center">
        <!-- Post Text Content (Left Column) -->
        <div class="{% if post.thumbnail %}col-md-8 col-sm-12 pr-md-4{% else %}col-12{% endif %}">
          <h3 class="mb-1" style="font-size: 1.25rem; font-weight: 600; line-height: 1.35;">
            {% if post.redirect contains '://' %}
              <a class="post-title" href="{{ post.redirect }}" target="_blank" rel="noopener noreferrer">
                {{ post.title }}
                <i class="fa-solid fa-arrow-up-right-from-square fa-2xs ml-1 text-muted" style="font-size: 0.72rem;"></i>
              </a>
            {% elsif post.redirect %}
              <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
            {% else %}
              <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% endif %}
          </h3>

          <p class="post-description text-muted mb-2" style="font-size: 0.92rem; line-height: 1.5; margin-bottom: 0.5rem !important;">
            {{ post.description }}
          </p>

          <div class="d-flex flex-wrap align-items-center text-muted post-meta mb-2" style="font-size: 0.82rem; gap: 8px;">
            <span><i class="fa-regular fa-clock fa-xs"></i> {{ read_time }} min read</span>
            <span>&middot;</span>
            <a href="{{ year | prepend: '/blog/' | relative_url }}" class="text-muted">
              <i class="fa-regular fa-calendar fa-xs"></i> {{ post.date | date: '%b %d, %Y' }}
            </a>
            {% if post.external_source %}
              <span>&middot;</span>
              <span><i class="fa-brands fa-medium fa-xs"></i> {{ post.external_source }}</span>
            {% endif %}
          </div>

          {% if post.tags and post.tags.size > 0 %}
            <div class="post-tags d-flex flex-wrap" style="gap: 6px; padding: 0;">
              {% for tag in post.tags %}
                <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="badge badge-tag" data-tag="{{ tag }}">
                  <i class="fa-solid fa-hashtag fa-2xs"></i> {{ tag }}
                </a>
              {% endfor %}
            </div>
          {% endif %}
        </div>

        <!-- Post Thumbnail (Right Column) -->
        {% if post.thumbnail %}
          <div class="col-md-4 col-sm-12 mt-3 mt-md-0 text-center">
            <a href="{% if post.redirect contains '://' %}{{ post.redirect }}{% elsif post.redirect %}{{ post.redirect | relative_url }}{% else %}{{ post.url | relative_url }}{% endif %}" {% if post.redirect contains '://' %}target="_blank" rel="noopener noreferrer"{% endif %}>
              <div class="blog-thumbnail-wrapper">
                <img class="img-fluid blog-thumb-img" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" loading="lazy">
              </div>
            </a>
          </div>
        {% endif %}
      </div>
    </li>
    {% endfor %}
  </ul>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}

<style>
/* Post list item tight spacing */
.post-list li.blog-item {
  padding-top: 1.15rem !important;
  padding-bottom: 1.15rem !important;
  margin-bottom: 0 !important;
}
.post-list li.blog-item:first-child {
  padding-top: 0.35rem !important;
}

/* Hashtag filter button styling */
.btn-filter {
  background-color: var(--global-card-bg-color, #f8f9fa);
  color: var(--global-text-color, #333);
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 20px;
  padding: 3px 11px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: all 0.15s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.btn-filter:hover {
  background-color: var(--global-hover-color, rgba(0,0,0,0.05));
  border-color: var(--global-theme-color);
  color: var(--global-theme-color);
}
.btn-filter:hover .filter-count,
.btn-filter:hover i {
  color: var(--global-theme-color) !important;
}

/* All text, counts, icons, and parentheses become pure solid white when active */
.btn-filter.active,
.btn-filter.active *,
.btn-filter.active .filter-count,
.btn-filter.active i,
.btn-filter.active:hover,
.btn-filter.active:hover *,
.btn-filter.active:focus,
.btn-filter.active:focus *,
.btn-filter.active:active,
.btn-filter.active:active * {
  background-color: var(--global-theme-color) !important;
  color: #ffffff !important;
  border-color: var(--global-theme-color) !important;
  opacity: 1 !important;
  -webkit-text-fill-color: #ffffff !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.btn-filter .filter-count {
  font-size: 0.74rem;
  opacity: 0.85;
}

/* Post item badges */
.badge-tag {
  background-color: var(--global-code-bg-color, rgba(0,0,0,0.05));
  color: var(--global-text-color, #555) !important;
  border: 1px solid var(--global-divider-color, #eee);
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 0.74rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: all 0.15s ease;
  cursor: pointer;
}

.badge-tag:hover {
  background-color: var(--global-theme-color);
  color: #ffffff !important;
  border-color: var(--global-theme-color);
}

.badge-tag:hover * {
  color: #ffffff !important;
}

.blog-item:last-child {
  border-bottom: none !important;
}

/* Scaled thumbnail styling - fits dimensions seamlessly without borders or letterboxing */
.blog-thumbnail-wrapper {
  overflow: hidden;
  border-radius: 8px;
  border: none;
  aspect-ratio: 16/9;
  width: 100%;
  max-height: 150px;
  background-color: transparent;
  display: block;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-thumbnail-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.14);
}

.blog-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.btn-filter');
  const postItems = document.querySelectorAll('.blog-item');

  // Apply local preview visibility overrides if available
  try {
    const localCfg = JSON.parse(localStorage.getItem('nathy_visibility_config') || '{}');
    if (Array.isArray(localCfg.hidden_posts)) {
      postItems.forEach(item => {
        const slug = item.getAttribute('data-post-slug');
        const title = item.getAttribute('data-post-title');
        if (localCfg.hidden_posts.includes(slug) || localCfg.hidden_posts.includes(title)) {
          item.setAttribute('data-locally-hidden', 'true');
          item.style.display = 'none';
        }
      });
    }
  } catch (e) {}

  function applyFilter(filterTag) {
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-filter') === filterTag) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    postItems.forEach(item => {
      if (item.getAttribute('data-locally-hidden') === 'true') {
        item.style.display = 'none';
        return;
      }
      const tags = (item.getAttribute('data-tags') || '').split(' ');
      if (filterTag === 'all' || tags.includes(filterTag)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const filterTag = this.getAttribute('data-filter');
      applyFilter(filterTag);
      if (filterTag === 'all') {
        history.replaceState(null, '', window.location.pathname);
      } else {
        history.replaceState(null, '', window.location.pathname + '#tag=' + encodeURIComponent(filterTag));
      }
    });
  });

  // Clicking a tag badge on a post filters the list dynamically
  document.querySelectorAll('.badge-tag').forEach(tagBadge => {
    tagBadge.addEventListener('click', function(e) {
      e.preventDefault();
      const tag = this.getAttribute('data-tag');
      if (tag) {
        applyFilter(tag);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState(null, '', window.location.pathname + '#tag=' + encodeURIComponent(tag));
      }
    });
  });

  // Check URL hash on page load
  const hash = window.location.hash;
  if (hash && hash.startsWith('#tag=')) {
    const tag = decodeURIComponent(hash.substring(5));
    applyFilter(tag);
  }
});
</script>
