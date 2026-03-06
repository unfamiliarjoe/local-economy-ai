import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() { const rows=await api.financePurchasing(); return <div className="space-y-4"><PageHeader title="Purchasing" subtitle="Purchasing request queue and finance review handoff." /><TableShell headers={["Request","Status","Requester","Amount"]} rows={(rows||[]).map((r:any)=>[r.id,<Badge key={r.id}>{r.status}</Badge>,r.requester,`$${r.amount.toLocaleString()}`])} /></div>; }
