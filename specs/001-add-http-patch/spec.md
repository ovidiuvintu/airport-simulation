# Feature Specification: Add HTTP PATCH support

**Feature Branch**: `001-add-http-patch`  
**Created**: 2025-11-16  
**Status**: Draft  
**Input**: User description: "Add HTTP PATCH support"

## Clarifications

### Session 2025-11-16

-- Q: How should optimistic concurrency be enforced for PATCH requests? → A: No `If-Match`/`ETag` enforcement in this iteration; PATCH requests perform blind writes. Concurrency controls may be added in a future iteration.
-- Q: How should PATCH responses return the updated resource? → A: Default `204 No Content`; support `Prefer: return=representation` so clients can opt-in to receive the updated resource (returned with `200 OK`).
- Q: Confirm concurrency policy for PATCH → A: Option A — Blind writes (no `If-Match`/`ETag`) (user confirmed).

## User Scenarios & Testing *(mandatory)*

- **FR-006**: System will NOT enforce optimistic concurrency for PATCH requests in this iteration. PATCH requests are blind writes; concurrency protection may be added in a follow-up.
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - Partial update Airport (Priority: P1)

As an API consumer I want to partially update an Airport resource so I can change one or more fields (for example `Name`, `Description`, or `AirportCode`) without sending the whole entity.

**Why this priority**: Partial updates reduce payload size and simplify client workflows for small changes; this is the highest-value, lowest-risk change for API consumers.

**Independent Test**: Call `PATCH /api/airports/{airportId}` with a valid patch payload; verify only the requested fields changed and `DateUpdated` on the airport is updated.

**Acceptance Scenarios**:

1. **Given** an existing airport, **When** a client sends a valid patch changing `Name`, **Then** API returns `204 No Content` by default and airport `Name` is updated and `DateUpdated` is set to now. If the client includes `Prefer: return=representation`, the API returns `200 OK` with the updated airport representation.
2. **Given** an existing airport, **When** a client sends an invalid patch operation, **Then** API returns `400 Bad Request` with an error describing the invalid operation.

---

### User Story 2 - Partial update Terminal (Priority: P2)

As an API consumer I want to partially update a Terminal resource so I can rename or adjust its properties without replacing the entire Terminal.

**Why this priority**: Terminals are frequently edited (e.g., rename); providing PATCH avoids the need to fetch/PUT the entire airport.

**Independent Test**: Call `PATCH /api/airports/{airportId}/terminals/{terminalId}` with a valid patch payload; verify terminal fields changed and `DateUpdated` set.

**Acceptance Scenarios**:

1. **Given** an existing terminal, **When** a client sends a valid patch changing `Name`, **Then** API returns `204 No Content` and terminal `Name` is updated.

---

### User Story 3 - Concurrency and validation (Priority: P3)

As an API consumer I want the API to protect against accidental overwrites and provide clear errors when conflicts occur.

**Why this priority**: Preventing data loss is important; this is lower priority than enabling PATCH but required for safe production rollout.

**Independent Test**: Attempt two concurrent PATCH requests with an out-of-date concurrency token (if enabled); verify second request returns `412 Precondition Failed`.

**Acceptance Scenarios**:

1. **Given** an outdated concurrency token, **When** a client submits a patch, **Then** API returns `412 Precondition Failed` with an error describing a concurrency conflict.

---

### Edge Cases

- Patch contains operations that target nested collection elements (e.g., add/remove terminals) — these operations should either be explicitly allowed (and tested) or rejected with `400` and guidance to use dedicated collection endpoints.
- Patch attempts to change read-only fields (e.g., `Id`, `Created`) — API must reject with `400`.
- Patch with no-op (no change) — API should return `204 No Content` and not update `DateUpdated`.
- Patch for non-existent resource — API should return `404 Not Found`.
- Malformed patch document — API should return `400 Bad Request`.

## Requirements *(mandatory)*

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### Functional Requirements

- **FR-001**: System MUST provide HTTP `PATCH` endpoints for resources: `PATCH /api/airports/{airportId}` (partial update of Airport) and `PATCH /api/airports/{airportId}/terminals/{terminalId}` (partial update of Terminal).
- **FR-002**: System MUST accept and correctly apply patch documents using JSON Merge Patch (RFC 7396).
- **FR-003**: System MUST validate incoming patch documents and return `400 Bad Request` for malformed or unsupported operations.
- **FR-004**: System MUST not allow modification of read-only fields (`Id`, `Created`) via PATCH and must return `400` if attempted.
- **FR-005**: System MUST update the `Updated` / `DateUpdated` timestamp on resources modified by PATCH.
- **FR-006**: System MUST support optimistic concurrency protection using `ETag`/`If-Match` semantics backed by the existing `Timestamp` field. Clients MUST provide the current `ETag` value in `If-Match` when performing PATCH. On mismatch the API MUST return `412 Precondition Failed`.
- **FR-006**: For this iteration, the system will NOT enforce optimistic concurrency for PATCH requests. PATCH requests are blind writes; concurrency protection (e.g., `ETag`/`If-Match`) may be added in a future iteration and will be documented as an opt-in policy when implemented.
- **FR-007**: System MUST return `204 No Content` on a successful patch that modifies the resource, `200 OK` with the updated resource when the client requests representation, `404 Not Found` for missing resources, and `400` for invalid patches.
- **FR-008**: System MUST include automated tests that cover valid and invalid patch documents, concurrency conflicts, and edge cases described above.

### Key Entities *(include if feature involves data)*

- **Airport**: { Id, Name, Description, AirportCode, Terminals, Created, Updated, Timestamp }
- **Terminal**: { Id, AirportId, Name, Created, Updated }

### Assumptions

- Default patch format: The implementation will use JSON Merge Patch (RFC 7396) for this feature. If later required, JSON Patch (RFC 6902) can be supported for fine-grained array operations.

- Concurrency: The API will expose an `ETag` header for resource representations (generated from the `Timestamp` field). PATCH requests that modify a resource MUST include `If-Match: <etag>`; requests without `If-Match` will be treated as blind writes and allowed only if the client has been explicitly authorized for blind updates (not default behavior).
- Concurrency: In this iteration the API will NOT require or enforce `ETag`/`If-Match` for PATCH operations; PATCH requests are blind writes. Future iterations may introduce `ETag` emission and `If-Match` enforcement as an opt-in or opt-out policy.
- Partial updates to collections (e.g., adding/removing terminals) are out-of-scope for the first iteration and should use dedicated collection endpoints (`POST /api/airports/{airportId}/terminals`, `DELETE /api/airports/{airportId}/terminals/{terminalId}`); patching collections may be considered in a follow-up.
- Authentication/authorization will reuse existing service-level protections; PATCH endpoints must obey the same permissions as PUT/POST/DELETE for the same resources.

### Key Entities *(include if feature involves data)*

- **[Entity 1]**: [What it represents, key attributes without implementation]
- **[Entity 2]**: [What it represents, relationships to other entities]

## Success Criteria *(mandatory)*

<!--
  ACTION REQUIRED: Define measurable success criteria.
  These must be technology-agnostic and measurable.
-->

### Measurable Outcomes

- **SC-001**: [Measurable metric, e.g., "Users can complete account creation in under 2 minutes"]
- **SC-002**: [Measurable metric, e.g., "System handles 1000 concurrent users without degradation"]
- **SC-003**: [User satisfaction metric, e.g., "90% of users successfully complete primary task on first attempt"]
- **SC-004**: [Business metric, e.g., "Reduce support tickets related to [X] by 50%"]
