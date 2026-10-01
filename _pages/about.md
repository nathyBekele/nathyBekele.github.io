---
layout: about
title: about
permalink: /
subtitle: Fullstack Software Engineer & AI Systems Developer · Addis Ababa, Ethiopia

profile:
  align: right
  image: natnael.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Addis Ababa, Ethiopia</p>
    <p><a href="mailto:natnaelbekele142[at]gmail[dot]com">natnaelbekele142[at]gmail[dot]com</a></p>

selected_papers: false
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

Welcome to my digital playground, where bugs go to cry and features come to thrive!

I am a **Fullstack Software Engineer & AI Systems Developer** with 4+ years of professional experience, a competitive programming enthusiast, and a passionate educator. I specialize in architecting scalable investment management platforms, AI-driven analytics, and LLM fine-tuning/RLHF pipelines.

### What I Do

- **Fullstack Engineering at [Vula](https://www.vula.vc/)**: Architecting an end-to-end investment management platform with automated pre-investment tracking to streamline due diligence, and deploying AI-driven analytics for real-time visibility into portfolio asset performance and financial outcomes across international markets.
- **LLM Fine-Tuning & Evaluation**: Designed and validated multi-domain tasks (Networking, Python, Data Science) to train state-of-the-art Large Language Models via Supervised Fine-Tuning (SFT) and RLHF methodologies at **[Turing](https://www.turing.com/)**, accompanied by robust evaluation frameworks for model-generated code.
- **Educating & Mentoring**: As former Competitive Programming Coach and squad lead at **[A2SV](https://a2sv.org/) (Backed by Google)**, I led an education squad that trained 500+ engineers across Ethiopia's top universities (AAU, ASTU, AASTU), directly contributing to 80+ students securing software engineering offers from top tech firms including Google, Amazon, Bloomberg, and more.
- **Mentorship & Community**: Served as Teaching Assistant for **[AddisCoder '23](https://www.addiscoder.com/)**, an intensive algorithms and Python programming academy for high school students organized by Prof. Jelani Nelson (UC Berkeley).

I graduated with a B.Sc. in Electrical & Computer Engineering (Computer Stream) from **Addis Ababa University**, where my final year research focused on mBERT-based hate speech classification for the Amharic language. I also have an abiding passion for mathematics and physics, which powers how I dissect complex engineering challenges and craft clean, resilient architectures.

{% if site.data.visibility.about.hide_social_icons %}

<style id="hide-about-social-icons">.social .contact-icons { display: none !important; }</style>

{% endif %}

<script id="about-customization-script">
(function() {
  function applyAboutCustomization() {
    try {
      var aboutStr = localStorage.getItem('nathy_about_config');
      if (aboutStr) {
        var data = JSON.parse(aboutStr);
        if (data) {
          if (data.subtitle) {
            var descEl = document.querySelector('.desc');
            if (descEl) descEl.textContent = data.subtitle;
          }
          if (data.more_info) {
            var moreInfoEl = document.querySelector('.profile .more-info');
            if (moreInfoEl) moreInfoEl.innerHTML = data.more_info;
          }
          if (data.image_data_url) {
            var imgEl = document.querySelector('.profile img');
            if (imgEl) {
              imgEl.src = data.image_data_url;
              document.querySelectorAll('.profile .responsive-img-srcset').forEach(function(n) { n.remove(); });
            }
          }
          if (data.hide_social_icons !== undefined) {
            var iconsEl = document.querySelector('.social .contact-icons');
            if (iconsEl) iconsEl.style.setProperty('display', data.hide_social_icons ? 'none' : '', 'important');
          }
          if (data.contact_note !== undefined) {
            var noteEl = document.querySelector('.social .contact-note');
            if (noteEl) noteEl.textContent = data.contact_note;
          }
          if (data.social === false) {
            var socEl = document.querySelector('.social');
            if (socEl) socEl.style.setProperty('display', 'none', 'important');
          }
        }
      }
      var visStr = localStorage.getItem('nathy_visibility_config');
      if (visStr) {
        var vData = JSON.parse(visStr);
        if (vData && vData.about && vData.about.hide_social_icons) {
          var iconsEl = document.querySelector('.social .contact-icons');
          if (iconsEl) iconsEl.style.setProperty('display', 'none', 'important');
        }
      }
    } catch(e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAboutCustomization);
  } else {
    applyAboutCustomization();
  }
  window.addEventListener('load', applyAboutCustomization);
})();
</script>
