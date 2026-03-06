import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const rows=await api.communications(); return <div className="space-y-4"><PageHeader title="Communications Center" subtitle="Notice templates, targeting, and civic broadcast history." /><TableShell headers={["Notice","Status","Audience","Channel"]} rows={(rows||[]).map((r:any)=>[<Link key={r.id} href={`/app/communications/${r.id}`} className="text-sky-300">{r.title}</Link>,<Badge key={r.id}>{r.status}</Badge>,r.audience,r.channel])} /></div>; }
