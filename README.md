# web-app-template

A template for web applications: a C# / .NET 10 back end in `server/` and a React + TypeScript front end in `client/`.

## Requirements
- .NET SDK 10.0
- Node.js 24 (see `client/.nvmrc`)

## Set up
1. Restore the server packages:
   ```bash
   cd server
   dotnet restore
   ```
2. Install the client packages:
   ```bash
   cd client
   npm ci
   npx playwright install chromium
   ```
   `client/.npmrc` sets `ignore-scripts=true`. Install scripts do not run, so install the Playwright browsers as a separate step.

## Run
1. Start the server on `http://localhost:5000`:
   ```bash
   cd server
   dotnet run --project src/WebApp.Api
   ```
2. Start the client on `http://localhost:5173`:
   ```bash
   cd client
   npm run dev
   ```
   Vite sends `/api` requests to the server. Set `SERVER_URL` to change the server address.

## Test
| Area | Command | Location |
|---|---|---|
| Server unit and integration | `dotnet test` | `server/tests/` |
| Client unit and component | `npm test` | `client/src/**/*.test.tsx` |
| End-to-end | `npm run test:e2e` | `client/e2e/` (needs the server running) |
| Client lint and format | `npm run lint` | `client/` |

## CI
GitHub Actions runs these jobs on each pull request. Each job runs only when its area changes.

| Job | Checks |
|---|---|
| `client: audit` | `npm audit signatures`, `npm audit` |
| `client: lint` | ESLint, Prettier |
| `client: build` | `tsc`, `vite build` |
| `client: test` | Vitest |
| `server: audit` | NuGet audit, vulnerable package list |
| `server: test` | `dotnet build`, `dotnet test` |
| `e2e` | Playwright against the real server, after both test jobs |

A weekly scheduled run audits all packages.

## Supply chain
- Lock files are committed: `client/package-lock.json` and `server/**/packages.lock.json`.
- CI uses `npm ci` and `dotnet restore --locked-mode`.
- `client/.npmrc`: `ignore-scripts=true`, `save-exact=true`.
- `TreatWarningsAsErrors=true` in `server/Directory.Build.props` makes NuGet audit warnings fail the build.
- Dependabot waits 7 days after a release before it proposes an update.

## Licence
MIT. See [LICENSE](LICENSE).
