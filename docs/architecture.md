# LEAI Architecture Notes

## Current implementation focus (Phase 2)

- **Frontend:** premium multi-surface experience across public marketing, staff portal, resident portal, and business portal.
- **Backend:** versioned REST controllers for dashboard summaries, notifications, tasks, documents, search, contact intake, auth, and tenant context.
- **RBAC:** permission constants + role-permission mapping + request-header demo guard strategy.
- **Design system:** shared tokens and reusable UI primitives in `packages/ui`.

## API surfaces added

- `POST /api/v1/auth/login`
- `GET /api/v1/me`
- `GET /api/v1/tenant/current`
- `GET /api/v1/dashboard/staff-summary`
- `GET /api/v1/dashboard/resident-summary`
- `GET /api/v1/dashboard/business-summary`
- `GET /api/v1/notifications`
- `PATCH /api/v1/notifications/:id/read`
- `GET /api/v1/tasks`
- `GET /api/v1/documents`
- `GET /api/v1/documents/:id`
- `GET /api/v1/search?q=`
- `POST /api/v1/contact/demo-request`

## Demo data strategy

In-memory seed-like datasets power credible product demos while full Prisma persistence per module is implemented in subsequent phases.
