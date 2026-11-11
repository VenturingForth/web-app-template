# CLAUDE.md

## Repo layout
- `server/`: C# / .NET 10 ASP.NET Core Web API with controllers. See `server/CLAUDE.md`.
- `client/`: React + TypeScript, built with Vite. See `client/CLAUDE.md`.
- `.github/`: CI workflow, Dependabot, issue and PR templates.
- `CHANGELOG.md`: update it for each user-visible change.

## Rules
- Write tests for every change.
- Keep paths cross-platform. Do not change line endings (see `.gitattributes`).
- Follow `.editorconfig`, ESLint and Prettier.
- Do not add packages without asking. Pin exact versions. Commit the updated lock file.
- CI must pass: lint, build, unit, integration and E2E tests, and audits.
- `TreatWarningsAsErrors` is on. Fix warnings. Do not suppress them without a reason in a comment.
