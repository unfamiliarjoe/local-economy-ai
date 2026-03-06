import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function PublicSafetyPage() {
  const rows = await api.incidents();
  return <div className="space-y-4"><PageHeader title="Public Safety Reporting" subtitle="Administrative incident reporting and supervisory review." /><TableShell headers={["Incident","Type","Status","Officer","Supervisor","Occurred"]} rows={(rows||[]).map((r:any)=>[<Link key={r.id} href={`/app/public-safety/${r.id}`} className="text-sky-300">{r.id}</Link>,r.type,<Badge key={`${r.id}-s`}>{r.status}</Badge>,r.officer,r.supervisor,r.occurredAt])} /></div>;
}
