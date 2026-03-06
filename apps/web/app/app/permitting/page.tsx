import Link from "next/link";
import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { prettyStage } from "../../../lib/status";
import { api } from "../../../lib/api";

export default async function PermittingPage() {
  const permits = await api.permits();
  return (
    <div className="space-y-4">
      <PageHeader title="Permitting" subtitle="Review applications, schedule inspections, and keep approvals moving." />
      <Card><p className="text-sm text-slate-300">Filters: status, type, reviewer, SLA risk (phase 3 foundation).</p></Card>
      <TableShell
        headers={["Permit", "Type", "Stage", "Applicant", "Reviewer", "Documents"]}
        rows={(permits || []).map((p: any) => [
          <Link key={p.id} href={`/app/permitting/${p.id}`} className="text-sky-300">{p.id}</Link>,
          p.type,
          <Badge key={`${p.id}-s`}>{prettyStage(p.stage)}</Badge>,
          p.applicantName,
          p.reviewer,
          `${p.receivedDocs}/${p.requiredDocs}`
        ])}
      />
    </div>
  );
}
