import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function GrantsPage() {
  const apps = await api.grantApps("staff");
  return (
    <div className="space-y-4">
      <PageHeader title="Grants Management" subtitle="Program administration, scoring, and award tracking." />
      <TableShell headers={["Application", "Program", "Applicant", "Status", "Reviewer", "Requested"]} rows={(apps || []).map((a:any)=>[
        <Link key={a.id} href={`/app/grants/${a.id}`} className="text-sky-300">{a.id}</Link>,
        a.programId,
        a.applicantName,
        <Badge key={`${a.id}-s`}>{a.status}</Badge>,
        a.reviewer,
        `$${a.requestedAmount.toLocaleString()}`
      ])} />
    </div>
  );
}
