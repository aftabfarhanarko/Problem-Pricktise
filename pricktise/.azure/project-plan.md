# Project Plan

**Status**: In Progress
**Created**: 2026-11-03
**Mode**: NEW

---

## 1. Project Overview

**Goal**: Build a polished Next.js frontend experience for a customer-facing landing page, dashboard, and data-entry workflow. The project is designed so that every module is independently testable.

**App Type**: Static + API

**API Login**: No

**Mode**: NEW

**Deployment Plan**: No deployment plan found

---

## 2. Frontend — Web App

| Component | Technology |
|-----------|-----------|
| **Language** | TypeScript |
| **Framework** | Next.js |
| **Package Manager** | npm |
| **Test Runner** | vitest |
| **Mocking Library** | vi.mock |
| **Test Command** | npm test |

---

## 3. Services Required

| Azure Service | Role in App | Environment Variable | Default Value (Local) | Classification |
|---------------|------------|---------------------|----------------------|----------------|
| Azure Static Web Apps | Host the Next.js frontend and static assets | APP_URL | http://localhost:3000 | Essential |

---

## 4. Prerequisites

### Run

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Node.js | Web App | ✅ | 24.16.0 |
| npm | Web App | ✅ | 11.13.0 |
| Next.js | Web App | ❓ | unknown |
| ESLint | Web App | ✅ | detected via VS Code extension |

### Debug

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Docker | Web App | ✅ | 29.1.3 |
| Docker Compose | Web App | ❓ | unknown |
| VS Code JavaScript Debugger | Web App | ❓ | unknown |
| ESLint VS Code extension | Web App | ✅ | detected |

---

## 5. Design System & UI

**Component Library**: Fluent UI v9
**Style Direction**: Modern, lightweight SaaS-style interface with strong hierarchy, subtle elevation, and content-first layouts for a responsive landing page and dashboard experience.
**Typography**: Inter, system-ui

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#2563eb` | Brand color — primary buttons, links, and active nav states |
| `accent` | `#14b8a6` | Secondary highlight color for badges, chips, and attention states |
| `surface` | `#f8fafc` | Page and card backgrounds |
| `text` | `#0f172a` | Body text |
| `muted` | `#475569` | Secondary text, metadata, and captions |
| `border` | `#e2e8f0` | Dividers, input boundaries, and card outlines |

### Pages

| Page | Route | Purpose | Layout |
|------|-------|---------|--------|
| Home | `/` | Landing page with value proposition and onboarding CTA | `hero + card-list` |
| Dashboard | `/dashboard` | KPI and progress summary for active work | `split(stats|table) + actions` |
| Submit | `/submit` | Capture input for the main workflow | `form + action-bar` |

### Sample Content

```
Home — customers:
| Name | Segment | Last Activity | Status |
| Northwind Labs | Enterprise | 2026-11-03 | Active |
| Summit Works | Mid-market | 2026-11-02 | Active |
| Pilot Studio | Startup | 2026-11-01 | Pending |

Dashboard — metrics:
| Metric | Value | Trend | Status |
| Active users | 1,248 | +12.4% | Healthy |
| Conversion | 7.6% | +1.3% | Healthy |
| Open tasks | 18 | -3 | Watch |

Submit — profile form: Name: Alex Morgan · Email: alex@northwindlabs.com · Need: Customer onboarding
```

---

## 6. Project Structure

```
web-app/
├── src/
│   ├── app/
│   │   ├── routes/
│   │   └── providers/
│   ├── components/
│   │   ├── layout/
│   │   ├── cards/
│   │   └── forms/
│   ├── features/
│   │   ├── dashboard/
│   │   └── onboarding/
│   ├── lib/
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── styles/
│   │   └── tokens.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
├── .env.example
├── README.md
└── .gitignore
```

---

## 7. Route Definitions

| # | Method | Path | Description | Request Body | Response Body | Status Codes |
|---|--------|------|-------------|-------------|--------------|-------------|
| 1 | GET | `/` | Landing page | — | `{ hero, featureHighlights, cta }` | 200 |
| 2 | GET | `/dashboard` | Overview dashboard | — | `{ metrics, summary, tasks }` | 200 |
| 3 | POST | `/submit` | Capture form submission for onboarding or requests | `{ name, email, company, details }` | `{ success, message, id }` | 200, 400, 422 |

---

## 8. Next Steps

1. Run **azure-project-scaffold** to execute this plan.
2. Run **azure-project-integrate** to wire the frontend to live data, smoke-test the app, and verify the final user flow.
3. Run **azure-debug-plan** → **azure-debug-generate** for local debugging support and emulator orchestration.
4. Run the **azure-deploy** agent when ready; it uses **azure-app-onboard** for architecture, cost estimation, IaC generation, provisioning, and health verification.
