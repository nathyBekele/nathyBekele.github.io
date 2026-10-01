---
layout: page
title: Cursor Spend Tracker
description: Telemetry and cost analytics platform tracking Claude token spend and BYOK charges with automated Vercel cron sync.
img: assets/img/projects/cursor_spend_tracker.svg
importance: 5
category: work
github: nathyBekele/cursor-spend-tracker
live: https://cursor-spend-tracker.vercel.app/
---

**Cursor Spend Tracker** is a specialized telemetry and analytics dashboard designed to monitor and breakdown token expenditure on Anthropic Claude models accessed through Cursor's BYOK (Bring Your Own Key) architecture.

### Key Capabilities

- **Automated Usage Sync**: Vercel Cron orchestrates automated synchronization using session tokens against Cursor telemetry endpoints, persisting events to Neon Postgres via Prisma.
- **Granular Cost Attribution**: Differentiates between raw Anthropic model API costs and Cursor platform token fees ($0.25/M tokens).
- **Interactive Telemetry Dashboard**: Visualizes daily consumption, model-by-model distributions, and historical trends with Recharts.
- **Tech Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS, Prisma, Neon Postgres, Recharts, Vercel.

<div class="mt-3 d-flex flex-wrap" style="gap: 10px;">
  <a href="https://cursor-spend-tracker.vercel.app/" target="_blank" class="btn btn-sm z-depth-0"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Dashboard</a>
  <a href="https://github.com/nathyBekele/cursor-spend-tracker" target="_blank" class="btn btn-sm z-depth-0"><i class="fa-brands fa-github"></i> View GitHub Repository</a>
</div>
