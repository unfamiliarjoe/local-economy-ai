import { Badge, FilterBar, PageHeader, SecurityCallout, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const rows = await api.complianceLogs("high");

  return (
    <div className="space-y-4">
      <PageHeader title="Audit Logs" subtitle="Privileged and sensitive action history with risk-aware triage." />
      <SecurityCallout message="High-risk log entries require documented reviewer follow-up within one business day." />
      <FilterBar>
        <input className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm" placeholder="Search actor, action, record" />
        <select className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm"><option>High risk (pre-filtered)</option><option>Medium risk</option><option>Low risk</option></select>
      </FilterBar>
      <TableShell
        headers={["Event", "Action", "Actor", "Risk", "Timestamp"]}
        rows={(rows || []).map((r: any) => [r.id, r.action, r.actor, <Badge key={r.id}>{r.risk}</Badge>, r.at])}
      />
    </div>
  );
}
