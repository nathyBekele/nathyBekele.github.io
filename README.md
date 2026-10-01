# Natnael B. Haile | Personal Portfolio & Academic Website

<div align="center">

[![Website](https://img.shields.io/badge/Live_Site-nathyBekele.github.io-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://nathybekele.github.io/al-folio/)
[![GitHub](https://img.shields.io/badge/GitHub-nathyBekele-181717?style=for-the-badge&logo=github)](https://github.com/nathyBekele)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Natnael%20Bekele%20Haile-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/natnael-bekele-haile)
[![LeetCode](https://img.shields.io/badge/LeetCode-natnael__b__haile-FFA116?style=for-the-badge&logo=leetcode)](https://leetcode.com/u/natnael_b_haile/)
[![Medium](https://img.shields.io/badge/Medium-@natnaelbekele142-000000?style=for-the-badge&logo=medium)](https://medium.com/@natnaelbekele142)
[![Email](https://img.shields.io/badge/Email-natnaelbekele142%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:natnaelbekele142@gmail.com)

**Fullstack (Backend-Heavy) Software Engineer · Competitive Programming Educator · AI Safety Researcher**  
_Addis Ababa, Ethiopia_

</div>

---

## Overview

This repository contains the source code for the personal portfolio, blog, and academic website of **Natnael B. Haile** (Natnael Bekele), accessible at [nathybekele.github.io](https://nathybekele.github.io/al-folio/).

The website showcases software engineering projects, research preprints in mechanistic interpretability and AI safety, technical blog posts syndicated from Medium, competitive programming education work, and professional background.

### Key Sections

- **About**: Professional bio, technical specialties, affiliations, and direct contact channels.
- **Preprints**: Academic research papers and preprints with BibTeX citations, abstracts, and open-source code links.
- **Projects**: Deep dives into major software engineering and AI systems (Geometry of Defection, Amharic Hate Speech Detection, AfroChat, Adot, Cursor Spend Tracker).
- **Repositories**: Curated selection of open-source repositories and live GitHub activity metrics.
- **Blog**: Technical articles and deep dives syndicated directly from [Medium (@natnaelbekele142)](https://medium.com/@natnaelbekele142).
- **CV / Resume**: Comprehensive interactive curriculum vitae with downloadable PDF.

---

## Research & Preprints

- **The Geometry of Dormant Defection: Layer-Wise Dynamics and Defensive Design of Linear Probes for Latent Sleeper Agents**  
  _Natnael Bekele_ — Zenodo preprint (October 2026)  
  _Research on mechanistic interpretability, latent sleeper agents, and defensive linear probes across transformer activation spaces._  
  [Preprint on Zenodo](https://zenodo.org/records/23089057) · [Code & Replication Suite](https://github.com/nathyBekele/geometry-of-dormant-defection) · [Read on Medium](https://medium.com/@natnaelbekele142/your-open-source-ai-model-might-be-a-sleeper-agent-9ca693663091)

---

## Featured Engineering Projects

| Project                  | Description                                                                                                         | Stack                                                       |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------- |
| **AfroChat**             | Multi-lingual LLM conversational platform tailored for African languages with low-resource fine-tuning.             | Next.js, Node.js, Fastify, Python, PyTorch                  |
| **Adot**                 | Healthcare consultation and patient management platform connecting clinics, doctors, and patients.                  | React, Flutter, Node.js, PostgreSQL                         |
| **RateEat**              | Food discovery and restaurant rating mobile app providing crowd-sourced reviews and menus.                          | Flutter, Firebase, Node.js                                  |
| **Cursor Spend Tracker** | Telemetry and cost analytics platform tracking Claude token spend and BYOK charges with automated Vercel cron sync. | Next.js 16, TypeScript, Tailwind CSS, Prisma, Neon Postgres |

---

## Selected GitHub Repositories

- **[geometry-of-dormant-defection](https://github.com/nathyBekele/geometry-of-dormant-defection)**: Official replication suite for layer-wise linear probing of dormant sleeper agents in LLMs.
- **[promptKit](https://github.com/nathyBekele/promptKit)**: AI application for automated prompt generation, test case synthesis, and prompt evaluation.
- **[contract-advisor-rag](https://github.com/nathyBekele/contract-advisor-rag)**: High-precision legal document analysis chatbot utilizing retrieval-augmented generation.
- **[redash-chatbot-add-on](https://github.com/nathyBekele/redash-chatbot-add-on)**: LLM chatbot add-on for natural language querying and automated visualization in Redash BI.
- **[vitalAI](https://github.com/nathyBekele/vitalAI)**: AI health assistant and predictive diagnostics system.
- **[telecom-data-analysis](https://github.com/nathyBekele/telecom-data-analysis)**: End-to-end data analysis and user behavior forecasting pipeline.

---

## Tech Stack & Architecture

- **Static Site Generator**: [Jekyll](https://jekyllrb.com/) (v1.x modular starter architecture)
- **Runtime & Layout Engine**: `al_folio_core`, `al_folio_cv`, `al_folio_distill`
- **Preprints & Citations**: `jekyll-scholar` with BibTeX integration
- **Blog Syndication**: `al_ext_posts` fetching live articles via Medium RSS
- **Icons & Typography**: FontAwesome, Academicons, Scholar-Icons, Google Fonts
- **Containerization**: Docker / [OrbStack](https://orbstack.dev/)
- **Hosting & CI/CD**: GitHub Pages & GitHub Actions

---

## Local Development

The site can be served locally using **Docker / OrbStack** or natively via **Ruby Bundler**.

### Option A: Using Docker / OrbStack (Recommended)

1. Clone the repository:

   ```bash
   git clone https://github.com/nathyBekele/nathyBekele.github.io.git
   cd nathyBekele.github.io
   ```

2. Start the development server:

   ```bash
   docker compose up -d
   ```

3. Open your browser:
   ```
   http://localhost:8080/al-folio/
   ```

LiveReload is active on port `35729`. Any file changes to `_pages/`, `_data/`, `_projects/`, or `_config.yml` trigger an automated build.

To stop the container:

```bash
docker compose down
```

### Option B: Native Ruby & Bundler

1. Install dependencies:

   ```bash
   bundle install
   npm ci
   ```

2. Serve locally:
   ```bash
   bundle exec jekyll serve
   ```
   The site will be available at `http://localhost:4000/al-folio/`.

---

## Repository Structure

```
.
├── _bibliography/         # BibTeX bibliography files (papers.bib)
├── _data/                 # Structured YAML data
│   ├── cv.yml             # Curriculum vitae entries
│   ├── repositories.yml   # Highlighted GitHub repositories
│   └── socials.yml        # Social links & contact usernames
├── _pages/                # Markdown pages (about, blog, publications, projects, repositories, cv)
├── _projects/             # Individual project markdown pages
├── assets/                # Images, documents, icons, and JSON resume
├── docs/                  # Detailed configuration and maintenance guides
├── Gemfile                # Ruby gems and dependencies
├── _config.yml            # Main Jekyll configuration file
└── docker-compose.yml     # Containerized serving setup
```

---

## Documentation & Guides

For technical customization and theme internals, refer to the guides in [`docs/`](docs/):

- [`docs/CUSTOMIZE.md`](docs/CUSTOMIZE.md): Detailed guide for editing styling, collections, and plugins.
- [`docs/INSTALL.md`](docs/INSTALL.md): Advanced deployment and installation workflows.
- [`docs/FAQ.md`](docs/FAQ.md): Frequently asked questions.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): Deep dive into the v1 pluginized architecture.

---

## License

Personal content, writing, and custom project code are &copy; 2026 **Natnael B. Haile**.  
The underlying website template is licensed under the [MIT License](LICENSE), based on the open-source [al-folio](https://github.com/alshedivat/al-folio) academic starter.
