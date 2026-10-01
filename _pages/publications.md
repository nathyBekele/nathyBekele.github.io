---
layout: page
permalink: /publications/
title: preprints
description: Preprints and research papers.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

{% if site.data.visibility.hidden_preprints and site.data.visibility.hidden_preprints.size > 0 %}

<style id="hidden-preprints-static">
{% for key in site.data.visibility.hidden_preprints %}
  ol.bibliography li:has(#{{ key }}) {
    display: none !important;
  }
{% endfor %}
</style>

{% endif %}

<script>
document.addEventListener('DOMContentLoaded', function() {
  try {
    const localCfg = JSON.parse(localStorage.getItem('nathy_visibility_config') || '{}');
    const hiddenPreprints = Array.isArray(localCfg.hidden_preprints) ? localCfg.hidden_preprints : {{ site.data.visibility.hidden_preprints | jsonify | default: '[]' }};
    hiddenPreprints.forEach(function(key) {
      const el = document.getElementById(key);
      if (el) {
        const li = el.closest('li');
        if (li) li.style.display = 'none';
      }
    });
    // Hide year headings if all entries in that section are hidden
    document.querySelectorAll('h2.bibliography').forEach(function(h2) {
      const nextOl = h2.nextElementSibling;
      if (nextOl && nextOl.tagName === 'OL') {
        const visibleLis = Array.from(nextOl.querySelectorAll('li')).filter(function(li) {
          return li.style.display !== 'none' && window.getComputedStyle(li).display !== 'none';
        });
        if (visibleLis.length === 0) {
          h2.style.display = 'none';
        }
      }
    });
  } catch(e) {}
});
</script>
