import { Card, PageHeader, StatCard } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function BusinessDashboard() {
  const summary = await api.businessSummary();
  return (
    <div className="space-y-4">
      <PageHeader title="Organization Dashboard" subtitle="Track licenses, bids, compliance, and program opportunities." />
      <div className="grid gap-4 md:grid-cols-3">{(summary.cards || []).map((c: any) => <StatCard key={c.label} label={c.label} value={c.value} />)}</div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Opportunity Pipeline</h3><ul className="mt-3 space-y-2 text-sm text-slate-300">{(summary.pipeline || []).map((a: string) => <li key={a}>• {a}</li>)}</ul></Card>
        <Card><h3 className="font-semibold">Action items</h3><ul className="mt-3 space-y-2 text-sm text-slate-300">{(summary.actions || []).map((a: string) => <li key={a}>• {a}</li>)}</ul></Card>
      </div>
    </div>
  );
}
