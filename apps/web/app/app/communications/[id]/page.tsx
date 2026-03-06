import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({ params }: { params: { id: string } }) { const i=await api.communicationDetail(params.id); return <div className="space-y-4"><PageHeader title={i.title||params.id} subtitle="Notice delivery history and targeting context." /><Card><ul className="text-sm">{(i.history||[]).map((h:string)=><li key={h}>• {h}</li>)}</ul></Card></div>; }
