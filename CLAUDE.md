# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical Rules

1. **NEVER restore previous versions without confirmation** — always ask before restoring any backup or previous version
2. **NEVER commit credentials** — `config.json` contains API key, `.env` files must never be committed. Always check `git status` before commits
3. **ALWAYS ask before deleting any file**

## Git Workflow

- Main branch: `main`
- Create descriptive commit messages

## Project Overview

МамаЭксперт (MamaExpert) — a static website for reviewing baby products (ages 0-5). Russian-language content with affiliate links to Russian marketplaces (Ozon, Wildberries, Yandex Market).

## Running the Site

Open `hello.html` directly in a browser, or use VS Code Live Server extension.

## Architecture

Single-file static website:
- [hello.html](hello.html) — entire site (HTML + embedded CSS + JavaScript)
- `docs/` — project documentation in Markdown

No build system, no dependencies, no package manager.

## Key Technical Details

- **Styling**: Inline `<style>` block with CSS custom properties, gradient backgrounds, responsive design
- **JavaScript**: Inline `<script>` for article age filtering and subscription form handling
- **Affiliate Links**: Placeholder IDs (`YOUR_REF_ID_*`) need to be replaced with actual partner IDs

## Language

All content and UI is in Russian. Keep this consistent when making changes.
