import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const rows=await api.parksPrograms(); return <div className="space-y-4"><PageHeader title="Parks & Recreation" subtitle="Programs, reservations foundations, and community access." /><TableShell headers={["Program","Status","Location"]} rows={(rows||[]).map((r:any)=>[r.name,<Badge key={r.id}>{r.status}</Badge>,r.location])} /></div>; }
