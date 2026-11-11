# server/CLAUDE.md

## Stack
- .NET 10, ASP.NET Core Web API with controllers.
- Solution: `WebApp.slnx`. Shared build settings: `Directory.Build.props`.
- Tests: xUnit v3. Unit tests in `tests/WebApp.Api.Tests/`. Integration tests with `WebApplicationFactory` in `tests/WebApp.Api.IntegrationTests/`.

## Commands (run in `server/`)
- Restore: `dotnet restore` (CI: `dotnet restore --locked-mode`)
- Build: `dotnet build`
- Test: `dotnet test`
- Run: `dotnet run --project src/WebApp.Api` (http://localhost:5000)

## Rules
- Put API routes under `/api/`.
- Put controllers in `src/WebApp.Api/Controllers/`.
- Add a unit test and an integration test for each new endpoint.
- After a package change, commit the changed `packages.lock.json` files.
