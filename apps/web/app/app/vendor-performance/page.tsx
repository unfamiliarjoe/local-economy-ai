import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page(){ const rows=await api.vendorPerformance(); return <div className="space-y-4"><PageHeader title="Vendor Performance" subtitle="Scorecards, risk flags, and contract intelligence for procurement confidence." /><TableShell headers={["Vendor","Score","SLA","Risk","Profile"]} rows={(rows||[]).map((r:any)=>[r.vendor,r.score,r.slaCompliance,<Badge key={r.id}>{r.risk}</Badge>,<Link key={`${r.id}-l`} className="text-sky-300" href={`/app/vendor-performance/${r.id}`}>Open</Link>])} /></div>; }
