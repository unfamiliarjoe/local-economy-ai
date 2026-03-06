import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const rows=await api.capitalProjects(); return <div className="space-y-4"><PageHeader title="Capital Improvement Planning" subtitle="Prioritize and track long-range infrastructure investments." /><TableShell headers={["Project","Status","Priority","Funding"]} rows={(rows||[]).map((r:any)=>[<Link key={r.id} href={`/app/capital-planning/${r.id}`} className="text-sky-300">{r.name}</Link>,<Badge key={r.id}>{r.status}</Badge>,r.priority,r.funding])} /></div>; }
