import Link from "next/link";
import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function EconomicDevelopmentPage() {
  const projects = await api.econProjects();
  const cases = await api.econCases();
  const programs = await api.econPrograms("staff");
  return (
    <div className="space-y-4">
      <PageHeader title="Economic Development" subtitle="Projects, business assistance, and incentive strategy." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card><p className="text-xs text-slate-400">Active projects</p><p className="text-2xl font-semibold">{(projects || []).length}</p></Card>
        <Card><p className="text-xs text-slate-400">Business assistance cases</p><p className="text-2xl font-semibold">{(cases || []).length}</p></Card>
        <Card><p className="text-xs text-slate-400">Incentive programs</p><p className="text-2xl font-semibold">{(programs || []).length}</p></Card>
      </div>
      <TableShell headers={["Project", "Status", "Lead", "Projected Jobs"]} rows={(projects || []).map((p:any)=>[
        <Link key={p.id} href={`/app/economic-development/${p.id}`} className="text-sky-300">{p.name}</Link>,
        <Badge key={`${p.id}-s`}>{p.status}</Badge>,
        p.lead,
        p.projectedJobs
      ])} />
    </div>
  );
}
