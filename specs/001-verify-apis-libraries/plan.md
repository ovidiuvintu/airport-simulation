# Plan: Verify APIs across libraries (001-verify-apis-libraries)

## Feature
Verify and fix API bindings across libraries (branch `001-verify-apis-libraries`).

## Goal
Ensure all HTTP endpoints bind correctly, exercise real MediatR handlers and persistence in integration tests, fix DTO/command/handler mismatches, and add contract/integration tests to run in CI.

## Architecture & Stack
- .NET 9 minimal APIs, MediatR for handlers
- EF Core (SQLite in-memory) for integration tests
- xUnit + TestServer for integration test harness
- Use existing repository/service layers; tests should register real MediatR handlers and DB context with open in-memory SQLite connections

## Phases
1. Discovery & scaffolding
   - Inventory endpoints under `Apis/` in the solution
   - Confirm `tests/AirportManagement.Service.Tests` exists and test harness scaffolding
2. Test harness setup
   - Configure TestServer WebApplication with production-like service registrations (MediatR, repositories, services)
   - Use persistent in-memory SQLite per test run to run EF migrations/seeding where needed
3. Contract tests
   - Add binding tests for each endpoint: route/construction (GET/POST/PUT/DELETE) and API versioning
   - Add data-flow tests exercising handlers (create/update flows)
4. Fixes & implementation
   - Iterate on failing tests: fix DTOs, commands, services, mappings, repository include overloads, and EF entity configs
   - Ensure update flows use tracked entities to avoid concurrency exceptions
   - Ensure create flows ignore client-supplied FK values and set server-side
5. Schema changes coordination (if required)
   - If adding navigation properties or FKs, update EF configs and plan migrations; consider splitting migration changes into a separate commit
6. CI & PR
   - Add GitHub Actions workflow to run `dotnet build` and `dotnet test` on PR
   - Prepare PR with description of changes and test results

## Deliverables
- `plan.md` (this file)
- Integration tests in `tests/AirportManagement.Service.Tests` covering bindings and data flows
- Code fixes across `AirportManagement.Service` and supporting projects
- Optional: EF migrations and CI workflow

## Risks & Constraints
- Schema changes may require DB migrations and coordination with consumers; consider separating migration commits if intended for production
- File-lock warnings may occur during repeated builds on Windows; stop running dotnet processes when needed

## Acceptance Criteria
- All new tests pass locally using `dotnet test`
- No API route-binding failures; endpoints return expected status codes for happy paths in tests
- Update/create flows do not raise EF concurrency exceptions in tests
- PR includes test evidence (test summary) and changelog for schema changes (if any)

## Suggested local verification commands
```powershell
dotnet build src/AirportSimulation/AirportManagement.Service/AirportManagement.Service.csproj
dotnet test tests/AirportManagement.Service.Tests/AirportManagement.Service.Tests.csproj
```
