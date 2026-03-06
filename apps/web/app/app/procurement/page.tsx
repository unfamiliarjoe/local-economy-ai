import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function ProcurementPage() {
  const solicitations = await api.solicitations("staff");
  return (
    <div className="space-y-4">
      <PageHeader title="Procurement" subtitle="Solicitations, bid intake, and review workflows." />
      <TableShell headers={["Solicitation", "Type", "Status", "Deadline", "Owner", "Category"]} rows={(solicitations || []).map((s:any)=>[
        <Link key={s.id} href={`/app/procurement/${s.id}`} className="text-sky-300">{s.id}</Link>,
        s.type,
        <Badge key={`${s.id}-s`}>{s.status}</Badge>,
        s.deadline,
        s.owner,
        s.category
      ])} />
    </div>
  );
}
