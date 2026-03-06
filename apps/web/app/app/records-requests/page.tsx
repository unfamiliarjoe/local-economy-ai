import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function RecordsRequestsPage() {
  const rows = await api.recordsRequests("staff");
  return <div className="space-y-4"><PageHeader title="Records Requests (FOIA)" subtitle="Track intake, review, and release workflows." /><TableShell headers={["Request","Requester","Category","Status","Reviewer","Due"]} rows={(rows||[]).map((r:any)=>[<Link key={r.id} className="text-sky-300" href={`/app/records-requests/${r.id}`}>{r.id}</Link>,r.requesterName,r.category,<Badge key={`${r.id}-s`}>{r.status}</Badge>,r.reviewer,r.dueDate])} /></div>;
}
