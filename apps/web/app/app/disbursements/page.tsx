import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.disbursements(); return <div className="space-y-4"><PageHeader title="Disbursements" subtitle="Grant and vendor disbursement tracking for finance operations." /><TableShell headers={["Type","Payee","Amount","Status"]} rows={(rows||[]).map((r:any)=>[r.type,r.payee,`$${r.amount.toLocaleString()}`,<Badge key={r.id}>{r.status}</Badge>])} /></div>; }
