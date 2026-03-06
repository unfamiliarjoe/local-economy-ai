import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const rows=await api.facilities(); return <div className="space-y-4"><PageHeader title="Facilities" subtitle="Facility operations and status monitoring." /><TableShell headers={["Facility","Status"]} rows={(rows||[]).map((r:any)=>[r.name,r.status])} /></div>; }
