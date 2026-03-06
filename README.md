# LOCAL ECONOMY AI (LEAI)

The AI Operating System for Cities, Counties, Municipal Agencies, and Local Economies.

## Workspace

- `apps/web` — Next.js App Router frontend (marketing + auth + staff/resident/business portal shells)
- `apps/api` — NestJS REST API (`/api/v1`) with demo auth, dashboard, tasks, notifications, documents, search, and contact intake
- `packages/ui` — shared design system components and tokens
- `prisma` — schema and seed scaffolding

## Install

```bash
pnpm install
```

## Run locally

```bash
docker compose up -d
pnpm dev
```

- Web: `http://localhost:3000`
- API: `http://localhost:4000/api/v1`

## Database tasks

```bash
pnpm db:migrate
pnpm db:seed
```

## Test & quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
```

## Demo users

| Role | Email | Password | Redirect |
|---|---|---|---|
| Municipal Staff | `jordan@brookhaven.gov` | `Password123` | `/app` |
| Municipality Admin | `ava@brookhaven.gov` | `Password123` | `/app` |
| Resident | `nina.patel@example.com` | `Password123` | `/resident/dashboard` |
| Vendor/Business | `ops@brookhavencivil.com` | `Password123` | `/business/dashboard` |

## Phase 2 delivered

- premium design-system foundation components in `packages/ui`
- public marketing site expansion and solution pages
- authentication UX with role-aware demo routing
- staff, resident, and business portal shells with real dashboard cards
- backend endpoints for summaries, tasks, notifications, documents, search, and contact requests
- RBAC permission constants + guard strategy with role-to-permission maps
- seed/demo data objects for Brookhaven tenant scenario
- controller-level API tests for dashboard/search/RBAC mapping

## Notes

This phase uses demo-role headers/cookies to support realistic product walkthroughs while preserving a clear path to production auth/session infrastructure.

## Phase 3 module routes

- Staff: `/app/permitting`, `/app/zoning`, `/app/infrastructure`, `/app/service-requests`
- Resident: `/resident/applications`, `/resident/service-requests`
- Detail workspaces: permit/zoning/project/work-order/311 detail pages under each module route


## Phase 4 module routes

- Staff: `/app/benefits`, `/app/procurement`, `/app/grants`, `/app/business-licensing`, `/app/economic-development`
- Business: `/business/bids`, `/business/licenses`, `/business/programs`
- Resident: `/resident/applications` now includes permit + benefits + grants application flows


## Phase 5 module routes

- Staff: `/app/executive`, `/app/records-requests`, `/app/legislative`, `/app/courts`, `/app/public-safety`, `/app/settings/workflows`
- Document center: `/app/documents` with detail at `/app/documents/:id`
- Resident: `/resident/records-requests` intake + tracking


## Phase 6 module routes

- Operations: `/app/code-enforcement`, `/app/inspections`, `/app/utilities`, `/app/assets`, `/app/fleet`, `/app/facilities`, `/app/parks-recreation`
- Citywide controls: `/app/communications`, `/app/emergency-management`, `/app/capital-planning`, `/app/finance`, `/app/clerk`, `/app/boards`
- Platform/admin: `/app/integrations`, `/app/imports`, `/app/exports`, `/app/compliance`, `/app/settings/*`

## Phase 7 quality and trust upgrades

- Executive refinement: `/app/executive` now includes stronger KPI/alert composition plus AI governance usage summary.
- Compliance/security maturity: `/app/compliance`, `/app/compliance/audit-logs`, and settings security/access/integration pages provide stronger trust surfaces.
- Guided onboarding: `/app/getting-started` and dashboard start cards improve demo and pilot walkthrough speed.
- Admin completeness: richer settings pages for `/app/settings/{general,departments,roles,templates,branding,security,access,integrations}`.
- Integration credibility: expanded `/app/integrations`, `/app/imports`, and `/app/exports` workflows with migration safeguards and governance messaging.

### API hardening highlights

- Correlation IDs are attached to requests in the web client and respected in API middleware via `x-correlation-id`.
- API middleware now sends baseline hardening headers (`x-frame-options`, `x-content-type-options`).

## Phase 8 strategic expansion (launch-candidate layer)

- Geospatial command: `/app/map` with map-ready records, overlays, and district/parcel context.
- Money-to-outcome chain: `/app/finance/budget`, `/app/contracts`, `/app/vendor-performance` with contract lifecycle and vendor intelligence.
- Funding engine: `/app/funding`, `/app/funding/opportunities`, `/app/funding/calendar`, `/app/funding/gaps`.
- Constituent + workforce + strategy operations: `/app/constituents`, `/app/workforce`, `/app/strategy`.
- Implementation and readiness: `/app/onboarding/*` for checklist, imports, and go-live readiness.
- Reporting packs: `/app/reports` and `/app/reports/:id` for audit, board, and grant export packs.
- Financial transaction foundations: `/app/payments` and `/app/disbursements`, plus role-facing payment pages in resident/business portals.
- Network and regional layers: `/app/marketplace`, `/app/regional`, plus `/business/opportunities` and `/business/network`.
- Public transparency foundation: `/transparency` and sub-routes for projects, procurement, budget, and meetings.

## Phase 9 final release-candidate polish

- Final consistency pass on executive, strategy, map, onboarding/readiness, compliance, and transparency experiences using shared trust/status UI patterns.
- Stronger trust narrative in-product with expanded security/compliance callouts and assistive-AI labeling language.
- Improved pilot-city implementation clarity through richer onboarding and readiness next-step cards.
- Added demo-data integrity tests and expanded RBAC coverage checks for new strategic surfaces.

## Final wrap-up handoff notes

- UI consistency now centers on shared trust/status primitives (`StatusBadge`, `SecurityCallout`, `StartHereCard`) to reduce drift across modules.
- Staff navigation is grouped by product area (strategy, operations, finance/economy, governance/trust, implementation/admin) to improve discoverability during demos and pilot onboarding.
- Key wrap-up QA focus for incoming engineering team: production auth/session model, persistent data store wiring, observability/telemetry, and full E2E automation in a network-enabled CI environment.
