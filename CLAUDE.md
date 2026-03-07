# CLAUDE.md — Peplogix

## Project Overview

Peplogix is a storefront and platform prototype for a peptide research supply company. The project consists of a consumer-facing storefront and planned portal applications.

## Tech Stack

- **Framework:** Vite + React
- **Deployment:** Vercel
- **Responsive:** Mobile-first, fully responsive

## Brand Guidelines

### Fonts
- **Headings:** Libre Baskerville (serif)
- **Body:** Karla (sans-serif)

### Color Palette
| Token   | Hex       | Usage                        |
|---------|-----------|------------------------------|
| Teal    | `#4DBFBA` | Primary accent, CTAs, links  |
| Navy    | `#1E2D3D` | Text, headers, dark accents  |
| Copper  | `#D05A3A` | Secondary accent, highlights |
| White   | `#FFFFFF` | Backgrounds                  |

### Design Rules
- Border radius: 4-6px maximum — no pill shapes
- NO emoji icons in the UI
- NO glassmorphism effects
- NO dark hero sections
- NO gradient text
- Clean, professional, scientific aesthetic
- White backgrounds preferred
- Logo file: `/public/peplogix-logo.png`

## Repository Structure

```
peplogix-/
├── CLAUDE.md          # This file — AI assistant guide
├── public/            # Static assets (logo, images)
├── src/
│   ├── components/    # Reusable React components
│   ├── pages/         # Page-level route components
│   ├── assets/        # Imported images, fonts, icons
│   └── App.jsx        # Root component and routing
├── index.html         # Vite entry HTML
├── package.json       # Dependencies and scripts
└── vite.config.js     # Vite configuration
```

## Development Commands

```bash
npm install            # Install dependencies
npm run dev            # Start dev server (Vite)
npm run build          # Production build
npm run preview        # Preview production build locally
```

## Competitive & Design References

- **Alpha BioMed** (alphabiomedlabs.com) — primary competitor; match or exceed their storefront structure
- **Nu Life Essentials** admin portal — reference for `portal.peplogix.com`
- **Alpha Sync** clinic portal — reference for `sync.peplogix.com`

## Conventions for AI Assistants

### Code Style
- Use functional React components with hooks
- Prefer named exports
- Keep components focused — one responsibility per file
- Use CSS modules or scoped styles; avoid global CSS leakage
- Follow existing naming conventions in the codebase

### Component Guidelines
- All components must be mobile-responsive
- Use semantic HTML (`<section>`, `<article>`, `<nav>`, etc.)
- Apply brand fonts and colors consistently via design tokens or CSS variables
- Keep accessibility in mind: alt text, ARIA labels, keyboard navigation

### Git Workflow
- Commit with clear, descriptive messages
- Push to feature branches — never directly to `main` without permission
- Keep commits focused on a single change or logical unit

### What NOT to Do
- Do not add emoji icons to the UI
- Do not use dark/gradient hero sections
- Do not introduce glassmorphism or heavy visual effects
- Do not add unnecessary dependencies without justification
- Do not over-engineer — keep implementations minimal and direct
