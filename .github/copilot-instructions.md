# Copilot Instructions for this Repository

## Project Snapshot
- This is a Next.js 15 App Router portfolio site that mimics a code editor UI (Explorer + editor tab + status bar).
- Content source of truth is markdown files in `src/content/*.md`.
- Route model: home at `src/app/(home)/page.tsx`, docs at `src/app/docs/[slug]/page.tsx`.

## Architecture & Data Flow (Important)
- Markdown loading is filesystem-based via Node APIs in `src/utils/markdown.ts` (`getAllDocuments`, `getDocument`).
- Slug generation is centralized in `src/utils/get-slug.ts` (strip `.md`), used by both routing and navigation.
- `src/app/docs/[slug]/page.tsx` is server-rendered and uses:
  - `generateStaticParams()` from markdown filenames
  - `notFound()` when `getDocument(slug)` returns `null`
- Explorer (`src/components/explorer/index.tsx`) and mobile nav (`src/app/(home)/_components/navigation-mobile/index.tsx`) consume markdown filenames and build `/docs/<slug>` links.
- Editor rendering is client-side in `src/app/docs/[slug]/_components/editor/index.tsx` using `react-syntax-highlighter` with theme derived from preferences state.

## Client/Server Boundaries
- Keep Node `fs/path` usage only in server-safe modules/components (`src/utils/markdown.ts` and server components).
- Components with browser APIs (`document`, `window`, keyboard listeners, fullscreen, media query) must keep `"use client"`:
  - `src/hooks/use-command-menu.ts`
  - `src/components/status-bar/theme-toggle/index.tsx`
  - `src/components/status-bar/font-toggle/index.tsx`
  - `src/components/explorer/fullscreen-button/index.tsx`

## State, Theme, and Font Conventions
- Global preferences use Zustand + persist in `src/store/preferences.ts` with storage key `@clodoaldo.dev/preferences`.
- Theme is applied through `data-theme` on `<html>`; font is applied through `data-font` on `<body>`.
- Default font attribute is set in `src/app/layout.tsx` using `DEFAULT_FONT_FAMILY`.
- Reuse existing `Theme` (`light | dark | system`) and `FontFamily` (`space-mono | jetbrains-mono`) unions instead of introducing new literals ad hoc.

## UI & Styling Patterns
- Use SCSS modules for component-level styles and `src/app/globals.scss` for CSS variables + shared utility classes (`dialog-*`, `popover-*`).
- Follow existing composition: layout assembles `Explorer`, `Content`, `StatusBar` in `src/app/layout.tsx`.
- Radix primitives are imported from `radix-ui` (e.g., `Dialog`, `DropdownMenu`, `Collapsible`), not per-package imports.

## Developer Workflows
- Install: `npm install`
- Dev server (Turbopack): `npm run dev`
- Build: `npm run build`
- Start production build: `npm run start`
- Lint: `npm run lint` (Biome check)
- Format: `npm run format` (Biome write)
- E2E UI checks: `npm run cy:open` (Cypress baseUrl `http://localhost:3000`)

## Testing & Validation Notes
- Existing Cypress spec (`cypress/e2e/explorer.cy.ts`) validates explorer folders, file links, URL navigation, active tab behavior.
- When changing navigation/explorer/tab behavior, update or verify this spec first.

## Implementation Guardrails for Agents
- Prefer adding new content pages by creating markdown files in `src/content/` and letting existing slug/routing logic discover them.
- Preserve Portuguese UI copy style for labels/tooltips/placeholders unless the task explicitly asks for language changes.
- Keep changes minimal and consistent with Biome formatting (2-space indent, organize imports).
