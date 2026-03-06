import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";
export default async function Page(){ const rows=await api.fundingGaps(); return <div className="space-y-4"><PageHeader title="Funding Gaps" subtitle="Department requests where secured funding remains below need." /><TableShell headers={["Department","Initiative","Requested","Secured","Gap"]} rows={(rows||[]).map((r:any)=>[r.department,r.initiative,`$${r.requested.toLocaleString()}`,`$${r.secured.toLocaleString()}`,`$${(r.requested-r.secured).toLocaleString()}`])} /></div>; }
