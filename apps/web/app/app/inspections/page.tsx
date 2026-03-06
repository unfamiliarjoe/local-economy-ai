import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.inspections();
  return <div className="space-y-4"><PageHeader title="Inspections Engine" subtitle="Shared scheduling and findings across permitting, licensing, and code enforcement." /><TableShell headers={["Inspection","Type","Status","Inspector","Related","Scheduled"]} rows={(rows||[]).map((r:any)=>[<Link key={r.id} href={`/app/inspections/${r.id}`} className="text-sky-300">{r.id}</Link>,r.type,<Badge key={`${r.id}s`}>{r.status}</Badge>,r.inspector,`${r.relatedType}:${r.relatedId}`,r.scheduledFor])} /></div>;
}
