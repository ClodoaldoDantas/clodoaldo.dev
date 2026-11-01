# Repository notes

- This is a single Next.js App Router app. `src/app/layout.tsx` assembles the shared Explorer/content/status-bar shell; routes are the home page and `/docs/[slug]`.
- Markdown in `src/content/*.md` is loaded with Node filesystem APIs in `src/utils/markdown.ts`; docs routes and mobile/command-menu navigation derive from those filenames. Keep filesystem access server-side.
- The desktop Explorer’s folders and file links are hardcoded in `src/components/explorer/index.tsx`: adding a Markdown file alone does not add it to that navigation; update the Explorer too.
- Interactive components using browser APIs or preferences state must remain client components. Component styles use SCSS modules; shared variables/utilities live in `src/app/globals.scss`.

# Commands and checks

- Use Node 24.22.1 (`.nvmrc`; `package.json` requires Node 24) and `npm ci`.
- `npm run dev` starts the Turbopack dev server; `npm run build` builds; `npm run start` serves the production build.
- `npm run lint` runs Biome checks; `npm run format` writes Biome formatting. No dedicated typecheck or unit-test script is defined.
- Cypress E2E tests require the app at `http://localhost:3000`. CI builds, starts the production server, then runs `npm run cy:run`; locally, start the app before running Cypress. Run one spec with `npx cypress run --spec cypress/e2e/explorer.cy.ts` (replace the spec path as needed), or use `npm run cy:open` for the interactive runner.
