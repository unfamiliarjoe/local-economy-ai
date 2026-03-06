import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.marketplace("vendor"); return <div className="space-y-4"><PageHeader title="Regional Opportunities" subtitle="Opportunity matching view for business participants." /><TableShell headers={["Organization","Category","Certifications"]} rows={(rows||[]).map((r:any)=>[r.name,r.category,(r.certifications||[]).join(", ")])} /></div>; }
