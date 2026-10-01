# Website Documentation & Technical Guides

Technical reference and maintenance guides for **Natnael B. Haile's** personal portfolio and academic website (`nathyBekele.github.io`), powered by the `al-folio` v1.x Jekyll engine.

---

## Site Maintenance Guides

- [Quick Start](QUICKSTART.md): Overview of site configuration and options.
- [Installing and Deploying](INSTALL.md): Docker, OrbStack, local setup, and GitHub Pages deployment.
- [Customizing](CUSTOMIZE.md): Customizing content, publications, CV, layouts, and feature configuration.
- [FAQ](FAQ.md): Frequently asked questions and solutions.
- [Troubleshooting](TROUBLESHOOTING.md): Build, deployment, styling, and content debugging.
- [Architecture](ARCHITECTURE.md): Technical architecture of the v1 pluginized Jekyll runtime.
- [SEO Guide](SEO.md): Search engine optimization and metadata configurations.

---

## Where to Edit Site Content

| Content Area | File / Directory | Description |
| :--- | :--- | :--- |
| **Biography & Profile** | `_pages/about.md` | Homepage bio, affiliations, research interests, and layout |
| **Profile Photo** | `assets/img/natnael.jpg` | Main avatar photo (configured in `_pages/about.md`) |
| **Social Links** | `_data/socials.yml` | GitHub, LinkedIn, LeetCode, Medium, Email, and CV links |
| **Publications** | `_bibliography/papers.bib` | BibTeX entries for academic papers, preprints, and abstracts |
| **Projects** | `_projects/*.md` | Individual project writeups and descriptions |
| **Featured Repositories** | `_data/repositories.yml` | List of curated GitHub repositories and users |
| **CV / Resume Data** | `_data/cv.yml` & `assets/json/resume.json` | Work experience, education, skills, and summary |
| **Blog Ingestion** | `_config.yml` (`external_sources`) | Syndicates live posts from Medium RSS feed |
| **Site Metadata & Global Config** | `_config.yml` | Site title, baseurl, footer text, theme options, and plugins |
