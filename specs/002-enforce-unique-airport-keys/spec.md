# Feature Specification: Enforce Unique Airport Keys

**Feature Branch**: `002-enforce-unique-airport-keys`  
**Created**: 2025-11-16  
**Status**: Draft  
**Input**: User description: "Enforce a rule where no two airports can have same name or same AirportCode"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Prevent duplicate airport names (Priority: P1)

As an API user, when I create a new airport I must not be able to create a second airport with the same name (case-insensitive, trimmed). This protects data quality and avoids ambiguous lookups.

**Why this priority**: Duplicate airport names cause operational confusion and break users who rely on unique names for identification and UX selection lists.

**Independent Test**: Create an airport with name "Springfield International" → returns 201. Attempt to create another airport with name "springfield international" (different case / extra spaces) → API returns an error (client-visible conflict). Database contains only one airport with that normalized name.

**Acceptance Scenarios**:

1. **Given** no airport named "Alpha" exists, **When** client posts an airport with `name = "Alpha"`, **Then** API responds 201 and airport persisted.
2. **Given** an airport with `name = "Alpha"` exists, **When** client posts an airport with `name = "alpha  "` (different case and trailing spaces), **Then** API responds 409 Conflict and no new airport is created.

---

### User Story 2 - Prevent duplicate airport codes (Priority: P1)

As an API user, the `AirportCode` (IATA) must be unique across airports (case-insensitive). Attempting to create or update an airport to use an AirportCode already in use must fail.

**Why this priority**: Airport codes are primary identifiers used by integrations and downstream systems; duplicates would break routing and data exchange.

**Independent Test**: Create airport with `airportCode = "ABC"` → 201. Attempt to create or update another airport to `airportCode = "abc"` → API returns 409 Conflict.

**Acceptance Scenarios**:

1. **Given** no airport uses `airportCode = "ABC"`, **When** client creates airport with `airportCode = "ABC"`, **Then** API responds 201.
2. **Given** airport A uses `airportCode = "ABC"`, **When** client attempts to create airport B with `airportCode = "abc"` or update B to that code, **Then** API responds 409 Conflict and change is rejected.

---

### User Story 3 - Update flows enforce uniqueness (Priority: P2)

When updating an existing airport, uniqueness constraints must also apply. If the update would violate a uniqueness rule (name or code), the API must reject the update.

**Independent Test**: Create two airports A and B. Attempt to update B's `name` or `airportCode` to A's values → API returns 409 Conflict; original values remain unchanged.

**Acceptance Scenarios**:

1. **Given** airports A(name=Alpha), B(name=Beta), **When** client patches B to `name=Alpha`, **Then** API returns 409 Conflict and B remains Beta.

---

### Edge Cases

- Creating or updating an airport with whitespace-only names should be rejected as invalid.
- `AirportCode` must be validated to the expected pattern (3 characters). Inputs with wrong length are rejected before uniqueness checks.
- Concurrent create/update requests that race to insert the same normalized name/code should be handled by a database-level unique constraint and surfaced to the client in a deterministic error (409). The implementation MUST translate constraint violations into a clear API response.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST ensure `Airport.Name` is unique across all airports (comparison normalized: trimmed and case-insensitive).
- **FR-002**: System MUST ensure `Airport.AirportCode` (IATA code) is unique across all airports (comparison case-insensitive, normalized to upper-case for storage/validation).
- **FR-003**: System MUST validate `Airport.AirportCode` format (exactly 3 alphabetic characters) and reject invalid codes with 400 Bad Request before uniqueness checks.
- **FR-004**: System MUST enforce uniqueness at the persistence layer (database unique indexes/constraints) to avoid race conditions.
- **FR-005**: System MUST translate persistence unique-constraint violations into a clear API response (HTTP 409 Conflict) describing which field (Name or AirportCode) is duplicated.
- **FR-006**: System MUST apply uniqueness checks on create and update operations and for any relevant API surface (POST /airports, PUT/PATCH /airports/{id}).

### Key Entities

- **Airport**: { Id, Name, Description, AirportCode, Timestamp, Created, Updated }

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Zero duplicate airport names or airport codes exist in production dataset after migration (0 duplicates found by script run).
- **SC-002**: API returns HTTP 409 Conflict for 100% of client attempts that try to create or update an airport to a name or AirportCode that is already in use (measured by test suite).
- **SC-003**: Uniqueness checks complete within 500ms under normal load for single requests (measured in integration tests).
- **SC-004**: Automated tests added: create duplicate name, create duplicate code, update to duplicate name/code — all pass in CI on PRs.

## Assumptions

- Uniqueness is global across all airports (no per-tenant scoping required).
- `AirportCode` uses the IATA convention: three alphabetic characters. The system will normalize codes to upper-case before storage and comparison.
- Name comparisons are case-insensitive and trimmed. No advanced normalization (diacritics folding, transliteration) will be applied unless requested.

## Acceptance Tests (for CI)

1. Create airport A(name="Alpha", airportCode="AAA") → 201
2. Create airport B(name="Beta", airportCode="BBB") → 201
3. Attempt create with name="alpha" (case variation) or name=" alpha " → 409
4. Attempt create with airportCode="aaa" → 409
5. Attempt update B to airportCode="AAA" → 409

---

**Spec ready for planning**

***

Generated by: speckit.specify (manual run)

***
