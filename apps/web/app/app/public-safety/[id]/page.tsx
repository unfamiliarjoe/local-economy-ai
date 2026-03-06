import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function IncidentDetail({ params }: { params: { id: string } }) {
  const item = await api.incidentDetail(params.id);
  return <div className="space-y-4"><PageHeader title={`Incident ${item.id || params.id}`} subtitle="Chain-of-review, redaction support, and follow-up tasks." /><Card><p className="text-sm">Type: {item.type}</p><p className="text-sm">Officer: {item.officer}</p><Badge className="mt-2">{item.status||"submitted"}</Badge></Card><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="font-semibold">Review Chain</h3><ul className="mt-2 text-sm">{(item.reviewChain||[]).map((i:string)=><li key={i}>• {i}</li>)}</ul></Card><Card><h3 className="font-semibold">AI Supervisor Digest</h3><p className="text-sm mt-2">{item.ai?.summary}</p></Card></div></div>;
}
