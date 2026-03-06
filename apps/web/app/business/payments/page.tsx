import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.payments("vendor"); return <div className="space-y-4"><PageHeader title="Business Payments" subtitle="Payment status for business permits and license activities." /><TableShell headers={["Record","Amount","Status"]} rows={(rows||[]).map((r:any)=>[`${r.recordType}:${r.recordId}`,`$${r.amount.toLocaleString()}`,<Badge key={r.id}>{r.status}</Badge>])} /></div>; }
