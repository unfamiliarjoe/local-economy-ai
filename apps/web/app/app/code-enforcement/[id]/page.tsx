import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const item = await api.codeEnforcementDetail(params.id);
  return <div className="space-y-4"><PageHeader title={`Code Case ${item.id||params.id}`} subtitle="Violation workflow, notices, and follow-up." /><Card><Badge>{item.status||"intake"}</Badge><p className="mt-2 text-sm">{item.category} · {item.address}</p></Card><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="font-semibold">Timeline</h3><ul className="mt-2 text-sm">{(item.timeline||[]).map((t:string)=><li key={t}>• {t}</li>)}</ul></Card><Card><h3 className="font-semibold">AI Notice Assist</h3><p className="text-sm mt-2">{item.ai?.suggestedNotice}</p></Card></div></div>;
}
