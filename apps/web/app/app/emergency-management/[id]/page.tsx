import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({ params }: { params: { id: string } }) { const e=await api.emergencyDetail(params.id); return <div className="space-y-4"><PageHeader title={e.title||params.id} subtitle="Cross-department coordination notes and updates." /><Card><p className="text-sm">Lead: {e.lead}</p><p className="text-sm">Severity: {e.severity}</p></Card></div>; }
