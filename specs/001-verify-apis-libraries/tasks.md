# Tasks: Verify APIs across libraries

**Feature**: Verify APIs across libraries
**Spec**: `specs/001-verify-apis-libraries/spec.md`

**Phase 1: Setup**
- [ ] T001 Initialize speckit plan by running `.specify/scripts/powershell/setup-plan.ps1 -Json` and capture outputs at `specs/001-verify-apis-libraries/plan.md` and `specs/001-verify-apis-libraries/tasks.md`
- [ ] T002 [P] Create `specs/001-verify-apis-libraries/research.md` documenting chosen tooling, CI policy (mocks in CI, real calls in scheduled runs), and secrets handling in CI
- [ ] T003 Create `specs/001-verify-apis-libraries/data-model.md` and a small inventory script `tools/inventory_endpoints.ps1` that outputs `specs/001-verify-apis-libraries/inventory.json`

**Phase 2: Foundational**
- [ ] T004 [P] Generate OpenAPI contracts for P1 services and save them to `specs/001-verify-apis-libraries/contracts/` (e.g., `contracts/airportmanagement.yaml`)
- [ ] T005 [P] Scaffold `tests/contract/airportmanagement/` with a minimal harness and a sample contract test `tests/contract/airportmanagement/test_health.py`
- [ ] T006 Add CI workflow `.github/workflows/verify-apis.yml` to build Docker images and run smoke + contract tests; CI must start mocks for third-party APIs
- [ ] T007 [P] Add mock server config under `tests/mocks/thirdparty/` and CI startup steps to run the mock during tests

**Phase 3: User Story 1 — Service contract verification (Priority: P1)**
- [ ] T008 [US1] Implement contract test cases for `AirportManagement.Service` endpoints in `tests/contract/airportmanagement/` referencing `specs/001-verify-apis-libraries/contracts/airportmanagement.yaml`
- [ ] T009 [US1] Create a local quickstart in `specs/001-verify-apis-libraries/quickstart.md` with commands to build the service and run the contract tests (`pytest tests/contract/airportmanagement`)
- [ ] T010 [US1] Add a CI job step in `.github/workflows/verify-apis.yml` that runs the contract tests and publishes `tests/contract/airportmanagement/report.json`

**Phase 4: User Story 2 — Runtime smoke tests (Priority: P2)**
- [ ] T011 [US2] Create smoke tests for each service under `tests/smoke/<service>/` (health, minimal core endpoints)
- [ ] T012 [US2] Add CI steps to run smoke tests after container image builds and fail fast on startup errors

**Phase 5: User Story 3 — End-to-end integration flow (Priority: P3)**
- [ ] T013 [US3] Implement an end-to-end scenario test `tests/e2e/scenario_create_flight.py` that executes create→assign→taxi flows; document required environment in `specs/001-verify-apis-libraries/quickstart.md`
- [ ] T014 [US3] Add scheduled/staging pipeline `.github/workflows/verify-apis-staging.yml` to run E2E tests with real third-party calls and collect artifacts

**Final Phase: Polish & Cross-Cutting Concerns**
- [ ] T015 [P] Add observability and reporting: upload test artifacts to CI artifacts, update `specs/001-verify-apis-libraries/checklists/requirements.md` with validation results
- [ ] T016 Finalize `specs/001-verify-apis-libraries/plan.md`, re-run constitution checks with `.specify/scripts/powershell/update-agent-context.ps1`, and open a PR from `001-verify-apis-libraries` → `main`

**Dependencies**
- Contract generation (T004) must complete before writing contract tests (T008).
- CI workflow (T006) must exist before adding CI job steps for tests (T010, T012).
- Inventory (T003) should run before contract generation (T004) to identify endpoints.

**Parallel execution examples**
- Generate OpenAPI contracts (T004), scaffold contract tests (T005), and add mocks (T007) can run in parallel by different engineers.
- Smoke tests (T011) for different services are parallelizable (`[P]`) and can run concurrently in CI.

**Implementation strategy**
- MVP: Deliver P1 story only (T004, T005, T008, T009, T006 minimal CI job). This provides branch-level contract verification for the highest-risk services.
- Incremental delivery: Add smoke tests (P2) next, then E2E scenarios (P3) and finally polish (reporting, observability).

**Independent test criteria (per story)**
- US1: Running `pytest tests/contract/airportmanagement` against the built image returns all passing tests and produces `report.json`.
- US2: Running `tests/smoke/<service>/run_smoke.ps1` returns status 0 for health checks.
- US3: Running `pytest tests/e2e/scenario_create_flight.py` completes the flow end-to-end with expected final state.

**Files to create/edit (summary)**
- `specs/001-verify-apis-libraries/research.md`
- `specs/001-verify-apis-libraries/data-model.md`
- `specs/001-verify-apis-libraries/contracts/*.yaml`
- `tests/contract/airportmanagement/*`
- `tests/smoke/*`
- `tests/e2e/*`
- `.github/workflows/verify-apis.yml`
- `.github/workflows/verify-apis-staging.yml`
- `tools/inventory_endpoints.ps1`

*** End of tasks.md
