import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.codeEnforcement();
  return <div className="space-y-4"><PageHeader title="Code Enforcement" subtitle="Complaint intake, assignment, inspection, and compliance lifecycle." /><TableShell headers={["Case","Category","Status","Address","Assignee","Priority"]} rows={(rows||[]).map((r:any)=>[<Link key={r.id} href={`/app/code-enforcement/${r.id}`} className="text-sky-300">{r.id}</Link>,r.category,<Badge key={`${r.id}s`}>{r.status}</Badge>,r.address,r.assignee,r.priority])} /></div>;
}
