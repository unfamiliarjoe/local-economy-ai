import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.vendorPerformance("vendor"); return <div className="space-y-4"><PageHeader title="Network Performance" subtitle="Vendor ecosystem performance and renewal visibility." /><TableShell headers={["Vendor","Score","SLA","Risk"]} rows={(rows||[]).map((r:any)=>[r.vendor,r.score,r.slaCompliance,r.risk])} /></div>; }
