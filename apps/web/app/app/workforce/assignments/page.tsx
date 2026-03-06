import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";
export default async function Page(){ const rows=await api.workforceAssignments(); return <div className="space-y-4"><PageHeader title="Assignment Board" subtitle="Daily queue assignments and overtime risk visibility." /><TableShell headers={["Staff","Role","Queue","Today","Risk"]} rows={(rows||[]).map((r:any)=>[r.staff,r.role,r.queue,r.todayAssignments,<Badge key={r.id}>{r.overtimeRisk}</Badge>])} /></div>; }
