import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({ params }: { params: { id: string } }) { const p=await api.capitalProjectDetail(params.id); return <div className="space-y-4"><PageHeader title={p.name||params.id} subtitle="CIP ranking, dependencies, and implementation timeline." /><Card><p className="text-sm">Ranking: {p.ranking}</p><p className="text-sm">Dependencies: {(p.dependencies||[]).join(", ")}</p></Card></div>; }
