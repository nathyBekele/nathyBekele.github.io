---
layout: page
title: Latent Sleeper Agent Linear Probing
description: Mechanistic interpretability suite investigating layer-wise linear probe dynamics to detect latent sleeper agents in LLMs.
img: assets/img/projects/geometry_of_defection.png
importance: 1
category: work
live: https://medium.com/@natnaelbekele142/your-open-source-ai-model-might-be-a-sleeper-agent-9ca693663091
github: nathyBekele/geometry-of-dormant-defection
---

**The Geometry of Dormant Defection** is an empirical AI safety and mechanistic interpretability investigation into layer-wise linear probe dynamics across latent representations in transformer models.

Using **Qwen2.5-Coder-1.5B-Instruct** across four distinct backdoored model organism archetypes spanning syntactic, temporal, semantic, and structural triggers, this project evaluates where and how dormant sleeper agents defect and how trigger-agnostic linear monitors can catch deceptive policies without inspecting model outputs.

### Key Discoveries & Architecture

- **Layer-Wise Activation Dynamics**: Conducted 28-layer probing sweeps across residual streams to isolate the exact depth where backdoors emerge into linear separability.
- **Mid-Layer Concentration**: Identified that peak linear separability consistently concentrates in mid-layer representations rather than early syntactic or late output layers.
- **Defensive Monitor Design**: Designed and benchmarked trigger-agnostic contrastive monitors providing robust detection across diverse backdoor archetypes.
- **Tech Stack**: Python, PyTorch, Hugging Face Transformers, Linear Probes, Mechanistic Interpretability, Qwen2.5-Coder.

<div class="mt-3 d-flex flex-wrap" style="gap: 10px;">
  <a href="https://github.com/nathyBekele/geometry-of-dormant-defection" target="_blank" class="btn btn-sm z-depth-0"><i class="fa-brands fa-github"></i> View GitHub Repository</a>
  <a href="https://medium.com/@natnaelbekele142/your-open-source-ai-model-might-be-a-sleeper-agent-9ca693663091" target="_blank" class="btn btn-sm z-depth-0"><i class="fa-brands fa-medium"></i> Read Article on Medium</a>
  <a href="{{ '/publications/' | relative_url }}" class="btn btn-sm z-depth-0"><i class="fa-solid fa-graduation-cap"></i> View arXiv Preprint</a>
</div>
