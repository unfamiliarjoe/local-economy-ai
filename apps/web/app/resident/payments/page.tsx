import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.payments("resident"); return <div className="space-y-4"><PageHeader title="Resident Payments" subtitle="Payment status for permit and service fees." /><TableShell headers={["Record","Amount","Status"]} rows={(rows||[]).map((r:any)=>[`${r.recordType}:${r.recordId}`,`$${r.amount.toLocaleString()}`,<Badge key={r.id}>{r.status}</Badge>])} /></div>; }
