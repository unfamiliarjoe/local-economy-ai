import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.payments(); return <div className="space-y-4"><PageHeader title="Payments" subtitle="Collections linked to permits, licenses, and municipal receivables." /><TableShell headers={["Record","Payer","Amount","Status"]} rows={(rows||[]).map((r:any)=>[`${r.recordType}:${r.recordId}`,r.payer,`$${r.amount.toLocaleString()}`,<Badge key={r.id}>{r.status}</Badge>])} /></div>; }
