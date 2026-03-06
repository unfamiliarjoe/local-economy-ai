import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() { const rows=await api.financeApprovals(); return <div className="space-y-4"><PageHeader title="Finance Approvals" subtitle="Department requests awaiting finance action." /><TableShell headers={["Item","Status","Department","Amount"]} rows={(rows||[]).map((r:any)=>[r.item,<Badge key={r.id}>{r.status}</Badge>,r.department,`$${r.amount.toLocaleString()}`])} /></div>; }
