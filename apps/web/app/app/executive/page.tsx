import Link from "next/link";
import { FilterBar, InsightCard, PageHeader, SecurityCallout, StartHereCard, StatCard, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function ExecutivePage() {
  const summary = await api.executiveSummary();
  const aiUsage = await api.aiUsageSummary();
  const strategy = await api.strategy();

  return (
    <div className="space-y-5">
      <PageHeader
        title="Executive Command Center"
        subtitle="Citywide operational performance, strategic initiative progress, and governed AI assistance."
        actions={<Link className="text-sm text-sky-300" href="/app/reports">Open executive report packs</Link>}
      />

      <SecurityCallout message="Executive views include sensitive departmental data. AI outputs remain assistive-only and all privileged actions are audit tracked." />

      <FilterBar>
        <select className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm" aria-label="Date range">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Quarter to date</option>
        </select>
        <select className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm" aria-label="Department filter">
          <option>All departments</option>
          <option>Operations</option>
          <option>Governance</option>
          <option>Growth</option>
        </select>
      </FilterBar>

      <div className="grid gap-4 md:grid-cols-4">
        {(summary.metrics || []).map((metric: any) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {(summary.alerts || []).map((alert: string, idx: number) => (
          <InsightCard key={alert} title={`Operational Alert ${idx + 1}`} body={alert} tone="warning" />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <InsightCard title="AI Executive Digest (Assistive)" body={summary.digest || "No digest available."} />
        <InsightCard
          title="AI Governance Summary"
          body={`Interactions: ${aiUsage.totalInteractions || 0} · Human reviewed: ${aiUsage.humanReviewedActions || 0} · High confidence rate: ${aiUsage.highConfidenceRate || "n/a"} · Policy: ${aiUsage.policyMode || "assistive-only"}`}
          tone="success"
        />
      </div>

      <TableShell
        headers={["Strategic Initiative", "Owner", "Status", "Progress"]}
        rows={(strategy || []).slice(0, 4).map((item: any) => [
          item.title,
          item.owner,
          <StatusBadge key={item.id} value={item.status} />,
          `${item.progress}%`
        ])}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <StartHereCard
          title="Board packet prep"
          description="Generate a board-ready strategy and risk briefing from the latest metrics, initiative status, and compliance activity."
          href="/app/reports"
          cta="Review report packs"
        />
        <StartHereCard
          title="Public accountability check"
          description="Cross-check public transparency data with active strategy initiatives before external briefings."
          href="/transparency"
          cta="Open transparency portal"
        />
      </div>
    </div>
  );
}
