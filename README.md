# Duaal Leren Starter 2026

A React + TypeScript starter used for the **enterprise production-ready React** workshop. The repo demonstrates conventions before code: a feature-module layout, strict TypeScript, ESLint + Prettier with a pre-commit hook, and TanStack Router/Query installed but unwired so students can implement them during the workshop.

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) (or any tool that reads `.nvmrc`)
- npm 10+

## Getting started

```bash
nvm use            # picks up Node version from .nvmrc
npm install        # also installs the husky pre-commit hook via the prepare script
cp .env.example .env.local
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Scripts

| Command                | What it does                                           |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Vite dev server with HMR                               |
| `npm run build`        | Type-check then produce a production bundle in `dist/` |
| `npm run preview`      | Serve the built bundle locally                         |
| `npm run typecheck`    | Run the TypeScript compiler in no-emit mode            |
| `npm run lint`         | Run ESLint over the project                            |
| `npm run lint:fix`     | Run ESLint with `--fix`                                |
| `npm run format`       | Format every file with Prettier                        |
| `npm run format:check` | Verify formatting in CI without writing                |

## Folder structure

```
src/
  main.tsx              # React 19 root
  App.tsx               # placeholder shell
  env.ts                # typed import.meta.env wrapper (boundary pattern)

  shared/               # cross-cutting code, reusable by any module
    components/         # generic UI primitives
    hooks/              # generic hooks
    lib/                # framework-agnostic helpers
    types/              # cross-cutting type aliases

  modules/              # one folder per business/domain module
    counter/            # the example module shipped with the starter
      pages/            # what a route renders
      components/       # internal UI pieces
      hooks/            # internal state
      types.ts
      index.ts          # public API barrel — only this is importable from outside
```

### Path aliases

Configured in `tsconfig.app.json` and mirrored in `vite.config.ts`:

| Alias        | Resolves to     | Use for                   |
| ------------ | --------------- | ------------------------- |
| `~/*`        | `src/*`         | Anywhere inside `src/`    |
| `~shared/*`  | `src/shared/*`  | Reusable, non-domain code |
| `~modules/*` | `src/modules/*` | A module's public API     |

### Module conventions

- Each module exposes a **public API** through its `index.ts`. Other code should import from `~modules/counter`, never from `~modules/counter/components/Counter`.
- `shared/` is for code that has no business meaning. If a piece of code is about a domain concept, it belongs inside that module.
- Pages are thin: they compose components and hooks from the same module.

## What is intentionally _not_ set up

These pieces are installed or staged but **not wired**, so students implement them during the workshop:

- **TanStack Router** — `@tanstack/react-router` is in `dependencies`. `App.tsx` does not yet render a `RouterProvider`.
- **TanStack Query** — `@tanstack/react-query` is installed for the data-fetching session.

## Pre-commit hook

`husky` + `lint-staged` run Prettier on staged files before every commit. The hook is installed automatically by the `prepare` script after `npm install`.
