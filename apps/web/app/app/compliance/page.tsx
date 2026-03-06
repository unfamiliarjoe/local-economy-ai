import Link from "next/link";
import { Card, FilterBar, PageHeader, SecurityCallout, StartHereCard, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const summary = await api.complianceSummary();
  const logs = await api.complianceLogs();
  const exports = await api.complianceExports();

  return (
    <div className="space-y-4">
      <PageHeader title="Compliance & Risk Center" subtitle="Auditability, privileged events, AI governance, and export controls." />
      <SecurityCallout message="This workspace contains sensitive operational logs. Access is permission-restricted, monitored, and export-governed." />
      <FilterBar>
        <select className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm" aria-label="Risk filter">
          <option>All risk levels</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <input className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm" placeholder="Search actor or action" />
      </FilterBar>
      <div className="grid gap-4 md:grid-cols-4">
        <Card><p className="text-xs">High risk</p><p className="text-2xl font-semibold">{summary.highRiskEvents || 0}</p></Card>
        <Card><p className="text-xs">Medium risk</p><p className="text-2xl font-semibold">{summary.mediumRiskEvents || 0}</p></Card>
        <Card><p className="text-xs">AI usage events</p><p className="text-2xl font-semibold">{summary.aiUsageEvents || 0}</p></Card>
        <Card><p className="text-xs">Privileged actions</p><p className="text-2xl font-semibold">{summary.privilegedActionsToday || 0}</p></Card>
      </div>
      <TableShell
        headers={["Recent Event", "Action", "Actor", "Risk"]}
        rows={(logs || []).slice(0, 6).map((row: any) => [row.id, row.action, row.actor, <StatusBadge key={row.id} value={row.risk} />])}
      />
      <TableShell
        headers={["Export", "Type", "Requested By", "Status"]}
        rows={(exports || []).map((item: any) => [item.id, item.type, item.requestedBy, <StatusBadge key={item.id} value={item.status} />])}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <StartHereCard title="Deep audit review" description="Investigate event-level history with focused risk triage and search." href="/app/compliance/audit-logs" cta="Open full audit logs" />
        <StartHereCard title="Security policy check" description="Review access posture and MFA/session policy before production pilots." href="/app/settings/security" cta="Open security settings" />
      </div>
      <Link href="/app/compliance/audit-logs" className="text-sm text-sky-300">Open full audit logs</Link>
    </div>
  );
}
