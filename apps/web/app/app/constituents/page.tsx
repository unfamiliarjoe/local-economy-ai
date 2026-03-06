import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page(){ const rows=await api.constituents(); return <div className="space-y-4"><PageHeader title="Constituent Relationships" subtitle="Unified resident and business interaction history across requests, notices, and applications." /><TableShell headers={["Name","Type","Open Cases","Preferred Channel","Profile"]} rows={(rows||[]).map((r:any)=>[r.name,<Badge key={r.id}>{r.type}</Badge>,r.openCases,r.preferredChannel,<Link key={`${r.id}-l`} className="text-sky-300" href={`/app/constituents/${r.id}`}>Open</Link>])} /></div>; }
