# client/CLAUDE.md

## Stack

- React 19 + TypeScript, built with Vite. Package manager: npm.
- Unit and component tests: Vitest + React Testing Library, next to the code as `*.test.tsx`.
- E2E tests: Playwright in `e2e/`. They need the server on http://localhost:5000.
- Lint and format: ESLint + Prettier.

## Commands (run in `client/`)

- Install: `npm ci`, then `npx playwright install chromium`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`. Format: `npm run format`
- Unit tests: `npm test`
- E2E tests: `npm run test:e2e`

## Rules

- `.npmrc` sets `ignore-scripts=true` and `save-exact=true`. Do not change these.
- Use `npm ci` for clean installs. Commit `package-lock.json` with each dependency change.
- Query elements by role or label in tests. Use `data-testid` only when no role fits.
