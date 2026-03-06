import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function ServiceRequestsPage() {
  const requests = await api.serviceRequests("staff");
  return (
    <div className="space-y-4">
      <PageHeader title="311 Service Requests" subtitle="Triage, assignment, and resolution operations." />
      <TableShell headers={["Request", "Category", "Status", "Priority", "Assignee", "Location"]} rows={(requests || []).map((r: any) => [
        <Link key={r.id} href={`/app/service-requests/${r.id}`} className="text-sky-300">{r.id}</Link>,
        r.category,
        <Badge key={`${r.id}-s`}>{r.status}</Badge>,
        r.priority,
        r.assignee,
        r.location
      ])} />
    </div>
  );
}
