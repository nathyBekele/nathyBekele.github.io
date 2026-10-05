---
layout: page
permalink: /publications/
title: preprints
description: Preprints and research papers.
nav: false
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

    // Enclose publication thumbnails in direct links to research papers
    function linkPublicationThumbnails() {
      const pubContainers = document.querySelectorAll('.publications');
      if (!pubContainers.length) return;

      pubContainers.forEach((container) => {
        const items = container.querySelectorAll('ol.bibliography > li, .bibliography > li');
        items.forEach((item) => {
          const abbr = item.querySelector('.col.abbr, .abbr');
          if (!abbr) return;

          if (abbr.querySelector('a.publication-thumbnail-link')) return;

          const previewImg = abbr.querySelector('img.preview') || abbr.querySelector('img');
          if (!previewImg) return;

          let researchUrl = '';
          let paperTitle = 'Read research paper';

          const titleEl = item.querySelector('.title');
          if (titleEl && titleEl.textContent) {
            paperTitle = titleEl.textContent.trim();
          }

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

          if (!researchUrl && links.length > 0) {
            researchUrl = links[0].getAttribute('href') || '';
          }

          if (!researchUrl) {
            researchUrl = '{{ "/assets/pdf/The_Geometry_of_Dormant_Defection.pdf" | relative_url }}';
          }

          previewImg.removeAttribute('data-zoomable');
          previewImg.classList.remove('zoomable');

          const cleanImg = previewImg.cloneNode(true);
          cleanImg.removeAttribute('data-zoomable');
          cleanImg.style.cursor = 'pointer';

          if (previewImg.parentNode) {
            previewImg.parentNode.replaceChild(cleanImg, previewImg);
          }

          const link = document.createElement('a');
          link.href = researchUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.className = 'publication-thumbnail-link';
          link.title = `Open "${paperTitle}" in a new tab`;
          link.setAttribute('aria-label', `Open "${paperTitle}" in a new tab`);

          const figure = abbr.querySelector('figure');
          const targetNode = figure || abbr.querySelector('picture') || cleanImg;
          if (targetNode && targetNode.parentNode) {
            targetNode.parentNode.insertBefore(link, targetNode);
            link.appendChild(targetNode);
          }
        });
      });
    }

    linkPublicationThumbnails();
    setTimeout(linkPublicationThumbnails, 150);
    setTimeout(linkPublicationThumbnails, 600);
  } catch(e) {}
});
</script>
