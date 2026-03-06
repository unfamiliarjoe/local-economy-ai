import { Badge, FilterBar, InsightCard, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.imports();

  return (
    <div className="space-y-4">
      <PageHeader title="Imports" subtitle="Data migration job center for onboarding from legacy municipal systems." />
      <FilterBar>
        <select className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm"><option>All statuses</option><option>completed</option><option>running</option><option>failed</option></select>
        <input className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm" placeholder="Search import job" />
      </FilterBar>
      <div className="grid gap-4 md:grid-cols-2">
        <InsightCard title="Import Validation" body="Schema checks, duplicate detection, and required field completeness are enforced before apply." />
        <InsightCard title="Rollback Safety" body="Failed import batches remain isolated until an authorized reviewer confirms retry or discard." tone="warning" />
      </div>
      <TableShell headers={["Job", "Type", "Status", "Target"]} rows={(rows || []).map((r: any) => [r.id, r.type, <Badge key={r.id}>{r.status}</Badge>, r.target])} />
    </div>
  );
}
