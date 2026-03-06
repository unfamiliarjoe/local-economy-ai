import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.regional(); return <div className="space-y-4"><PageHeader title="Regional Coordination" subtitle="Cross-agency initiatives and interlocal project coordination." /><TableShell headers={["Initiative","Partners","Status","Open"]} rows={(rows||[]).map((r:any)=>[r.name,(r.partners||[]).join(", "),<Badge key={r.id}>{r.status}</Badge>,<Link key={`${r.id}-l`} className="text-sky-300" href={`/app/regional/${r.id}`}>Detail</Link>])} /></div>; }
