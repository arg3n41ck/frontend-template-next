# Frontend Next.js Template

Minimal server-first Next.js App Router starter without prebuilt product pages.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS v4 and shadcn/ui (Radix + Lucide).

## Requirements

Node.js 22 and pnpm 11 through Corepack.

## Start

```bash
pnpm install
pnpm dev
```

## Verify

```bash
pnpm verify
```

Prefer Server Components. Add `"use client"` only at the smallest interactive boundary. Add shadcn primitives with `pnpm dlx shadcn@latest add <component>`.

## AI-assisted work

Start with `AGENTS.md`, then `docs/AI_SKILLS.md` and `docs/ARCHITECTURE.md`. Skills are included and loaded on demand, not installed as executable background agents. No framework migration or extra dependencies are required to use this starter.
