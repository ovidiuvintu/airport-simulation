<!--
Sync Impact Report

- Version change: template -> 1.0.0
- Modified principles: added/defined Principles I through XIV based on project requirements
- Added sections: Additional Constraints, Development Workflow
- Removed sections: none
- Templates requiring updates:
	- .specify/templates/plan-template.md ✅ updated
	- .specify/templates/spec-template.md ✅ reviewed (no change required)
	- .specify/templates/tasks-template.md ✅ reviewed (no change required)
	- .specify/templates/checklist-template.md ✅ reviewed (no change required)
	- .specify/templates/agent-file-template.md ✅ reviewed (no change required)
- Follow-up TODOs:
	- TODO(RATIFICATION_DATE): Ratification date unknown; project should set original adoption date.
	- Ensure automated checks read `.specify/memory/constitution.md` for the "Constitution Check" gate.
-->

# airport-simulation Constitution

## Core Principles

### I. Clean Architecture Separation (NON-NEGOTIABLE)
All code MUST follow Clean Architecture / Onion principles: separate API, Application, Domain,
and Infrastructure layers. Controllers and API entry points MUST be thin; business logic
MUST reside in Services or Domain layers. Rationale: ensures maintainability, testability,
and clear dependency direction.

### II. Dependency Injection & Abstractions
All cross-layer dependencies MUST be expressed as interfaces/abstractions and provided via
Dependency Injection. Concrete implementations are bound in composition roots only. Rationale:
enables easy mocking, testing, and swapping of implementations.

### III. DTOs and Anti-Corruption Boundaries
API responses MUST NOT expose persistence entities directly. Use DTOs/ViewModels and mapping
layers to prevent leaking internal models. Rationale: decouples API contracts from schema changes
and reduces accidental data exposure.

### IV. Strong Typing and Data Constraints
All persisted columns MUST use appropriate data types and database-level constraints: primary
keys, foreign keys, unique constraints, and where-needed check constraints. Rationale: prevent
data corruption and make bugs visible early.

### V. Configuration & Environment Separation
Connection strings and environment-specific configuration MUST live in config files with
overrides coming from environment variables. Development/test environments SHOULD use an
in-memory database for fast iteration. Rationale: predictable deployments and secure secrets
management.

### VI. Input Validation & Security Hardening
All incoming data MUST be validated at API boundaries. Use HTTPS, apply CORS policies,
sanitize raw SQL (avoid it) and avoid exposing detailed exception messages in production.
Rationale: reduce attack surface and prevent common vulnerabilities.

### VII. Centralized Error Handling & Structured Logging
Use global exception middleware to standardize error responses. Implement structured logging
with a consistent correlation ID propagated across request boundaries. Rationale: simplifies
operations and debugging.

### VIII. Performance & Resource Management
Cache frequent reads using in-memory or response caching where appropriate. Database
connections MUST be pooled and short-lived; use efficient async patterns (see Principle XI).
Rationale: reduce latency and resource exhaustion.

### IX. Testing Discipline
Unit tests MUST cover business logic; integration tests MUST cover endpoints and persistence.
Tests SHOULD use an in-memory database; tests MUST seed and isolate data per test run.
Rationale: ensure correctness and enable fast CI runs.

### X. Deployment & Persistence Practices
Persist file-based databases to mounted persistent storage when containerized. Perform
regular backups and monitor database file size. Rationale: prevent data loss in production.

### XI. Async-First (MANDATORY)
All I/O, database, and external calls MUST be asynchronous using async/await. Synchronous
operations are ONLY allowed for pure computation, configuration reading, or when framework
contracts require them. Blocking calls in request pipelines are FORBIDDEN. Rationale: avoid
thread-pool starvation and improve scalability.

### XII. Layered Contracts & SOLID Design
Business logic MUST call data access through well-defined contracts (repositories/ports);
no direct cross-layer calls. Apply SOLID principles, keep code DRY and KISS. Use patterns like
mediator where it simplifies flow. Rationale: maintainable, testable modules.

### XIII. Correlated Structured Logging & Metrics
Every layer MUST emit structured logs including correlation IDs. Log levels: ERROR, WARN,
INFO, DEBUG. All exceptions MUST be logged with context. Collect performance metrics for
business operations. Rationale: produce actionable telemetry for SRE and developers.

### XIV. Database Safety & Migration Discipline
All schema changes MUST be applied via migrations with explicit entity configurations.
Direct SQL is FORBIDDEN except for documented reporting queries with justification.
DB contexts MUST be scoped per request and never shared across threads. Wrap multi-step
changes in transactions where consistency is required. Rationale: maintain data integrity.

## Additional Constraints

- Data access layers MUST be implemented behind repository interfaces.
- Use parameterized queries or ORM abstractions to prevent SQL injection.
- Secrets MUST NOT be committed to the repository.
- Health checks and automatic API documentation (OpenAPI) MUST be present for all services.

## Development Workflow

- Code reviews are REQUIRED for all changes touching production code; core principles
	compliance MUST be checked in PR descriptions.
- CI gates MUST run unit and integration tests and a "Constitution Check" that validates
	key rules (async usage, presence of DTOs for public endpoints, migrations added).
- Use scoped DI registration in composition roots and avoid service locators.

## Governance

Amendments: Proposals to change this constitution MUST be published as a spec, include a
clear rationale and migration plan, and be approved by a majority of active maintainers.

Versioning policy: Follow semantic versioning for the constitution file itself:
- MAJOR: backward-incompatible principle removals or redefinitions.
- MINOR: addition of new principles or material expansions.
- PATCH: wording clarifications, typo fixes, or non-functional refinements.

Compliance reviews: Every PR that implements architecture, security, or data changes
MUST include a checklist referencing relevant principles. CI will fail the merge if
Constitution Check gates are violated.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): project must set original adoption date | **Last Amended**: 2025-11-15
