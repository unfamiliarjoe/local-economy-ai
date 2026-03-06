import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const rows=await api.assets(); return <div className="space-y-4"><PageHeader title="Assets" subtitle="Inventory and lifecycle overview." /><TableShell headers={["Asset","Status","Location"]} rows={(rows||[]).map((r:any)=>[r.name,r.status,r.location])} /></div>; }
