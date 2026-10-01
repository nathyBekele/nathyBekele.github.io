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
    <p><a href="mailto:natnaelbekele142@gmail.com">natnaelbekele142@gmail.com</a></p>
    <p>+251 929 292 151</p>

selected_papers: false # replaced with selected preprints in content
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

## <a href="{{ '/publications/' | relative_url }}" style="color: inherit">selected preprints</a>

<div class="publications">
  {% bibliography --group_by none --query @*[selected=true]* %}
</div>

{% if site.data.visibility.hidden_preprints and site.data.visibility.hidden_preprints.size > 0 %}
<style>
{% for key in site.data.visibility.hidden_preprints %}
  ol.bibliography li:has(#{{ key }}) { display: none !important; }
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
  } catch(e) {}
});
</script>
