import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.reports(); return <div className="space-y-4"><PageHeader title="Report & Export Packs" subtitle="Board, audit, grant, and executive reporting packs." /><TableShell headers={["Pack","Category","Status","Open"]} rows={(rows||[]).map((r:any)=>[r.name,r.category,<Badge key={r.id}>{r.status}</Badge>,<Link key={`${r.id}-l`} className="text-sky-300" href={`/app/reports/${r.id}`}>Detail</Link>])} /></div>; }
