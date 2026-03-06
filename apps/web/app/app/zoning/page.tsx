import Link from "next/link";
import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function ZoningPage() {
  const cases = await api.zoningCases();
  return (
    <div className="space-y-4">
      <PageHeader title="Zoning & Land Use" subtitle="Planning board workflow, hearings, and recommendations." />
      <Card><p className="text-sm text-slate-300">Case filters: status, request type, planner, hearing window.</p></Card>
      <TableShell headers={["Case", "Status", "Request", "Applicant", "Planner", "Parcel"]} rows={(cases || []).map((c: any) => [
        <Link key={c.id} href={`/app/zoning/${c.id}`} className="text-sky-300">{c.id}</Link>,
        <Badge key={`${c.id}-s`}>{c.status}</Badge>,
        c.requestType,
        c.applicant,
        c.planner,
        c.parcel
      ])} />
    </div>
  );
}
