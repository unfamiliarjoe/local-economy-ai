import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const rows=await api.emergencyEvents(); return <div className="space-y-4"><PageHeader title="Emergency Management" subtitle="Administrative incident coordination and status tracking." /><TableShell headers={["Event","Status","Severity","Lead"]} rows={(rows||[]).map((r:any)=>[<Link key={r.id} href={`/app/emergency-management/${r.id}`} className="text-sky-300">{r.title}</Link>,<Badge key={r.id}>{r.status}</Badge>,r.severity,r.lead])} /></div>; }
