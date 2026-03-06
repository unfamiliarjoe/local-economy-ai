import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() { const rows=await api.clerkRegister(); return <div className="space-y-4"><PageHeader title="Public Register" subtitle="Searchable filing ledger and publication history." /><TableShell headers={["Entry","Status","Filed By"]} rows={(rows||[]).map((r:any)=>[r.title,<Badge key={r.id}>{r.status}</Badge>,r.filedBy])} /></div>; }
