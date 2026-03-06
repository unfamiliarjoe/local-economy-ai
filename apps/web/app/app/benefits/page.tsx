import Link from "next/link";
import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function BenefitsPage() {
  const programs = await api.benefitsPrograms();
  const apps = await api.benefitsApps("staff");
  return (
    <div className="space-y-4">
      <PageHeader title="Public Benefits" subtitle="Case operations, document checks, and resident support outcomes." />
      <div className="grid gap-4 md:grid-cols-2">
        <Card><p className="text-xs text-slate-400">Active Programs</p><p className="text-2xl font-semibold">{(programs || []).length}</p></Card>
        <Card><p className="text-xs text-slate-400">Applications pending action</p><p className="text-2xl font-semibold">{(apps || []).filter((a:any)=>a.status!=="approved"&&a.status!=="denied").length}</p></Card>
      </div>
      <TableShell headers={["Application", "Program", "Resident", "Status", "Caseworker", "Missing Docs"]} rows={(apps || []).map((a:any)=>[
        <Link key={a.id} href={`/app/benefits/${a.id}`} className="text-sky-300">{a.id}</Link>,
        a.programId,
        a.residentName,
        <Badge key={`${a.id}-s`}>{a.status}</Badge>,
        a.caseworker,
        a.missingDocs
      ])} />
    </div>
  );
}
