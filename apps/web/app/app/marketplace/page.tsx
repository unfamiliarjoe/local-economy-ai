import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
export default async function Page(){ const rows=await api.marketplace(); return <div className="space-y-4"><PageHeader title="Marketplace Network" subtitle="Local vendor ecosystem, capability tags, and sourcing visibility." /><TableShell headers={["Vendor","Category","Certifications","Local"]} rows={(rows||[]).map((r:any)=>[r.name,r.category,(r.certifications||[]).join(", "),<Badge key={r.id}>{r.local ? "local" : "regional"}</Badge>])} /></div>; }
