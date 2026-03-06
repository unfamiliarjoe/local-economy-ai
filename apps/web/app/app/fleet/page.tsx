import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const rows=await api.fleet(); return <div className="space-y-4"><PageHeader title="Fleet" subtitle="Unit status and assignment visibility." /><TableShell headers={["Unit","Status","Assigned"]} rows={(rows||[]).map((r:any)=>[r.unit,r.status,r.assignedTo])} /></div>; }
