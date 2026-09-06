# Agent graph

## Project

- Template: Next.js template
- Stack: Next.js App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui
- Package manager: pnpm 11 via Corepack

## Source map

- `src/app` routes/layouts; `src/components/ui` shadcn source; `src/lib` shared utilities.
- `components.json`: shadcn registry and alias configuration.
- `.ai/skills`: canonical project-local agent skills.
- `docs/AI_SKILLS.md`: skill selection and overlap notes.
- `docs/DESIGN_SYSTEM.md`: UI ownership and token rules.

## Flow and boundaries

- Default to Server Components. Keep `use client` at the narrowest interactive boundary. Use Route Handlers only for real server/BFF responsibilities.
- UI primitives -> reusable compositions -> feature/page composition.
- Environment values flow from ignored local `.env` files; only examples are committed.

## Commands

`pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm build`, `pnpm verify`.

## Impact hints

- Dependency/config change: install + lint/typecheck + build.
- UI primitive/theme change: check all consumers and run desktop/mobile browser smoke.
- Route/API/data change: verify direct route or contract plus build and focused tests.

## Codebase Memory MCP

- Project index: `Users-argenalimbaev-work-projects-frontend-template-next` (fast index refreshed 2026-08-24).

## Agent distribution

- `docs/ARCHITECTURE.md`: modular boundaries and rule precedence.
- `docs/AI_SKILLS.md`: installed skill profile.
- `.agents/skills`, `.claude/skills`, `.codex/skills`: relative links to `.ai/skills`.

Graph refresh after folder rename was unavailable (MCP transport closed). Paths above were verified from current source; refresh the graph before later broad code discovery.
