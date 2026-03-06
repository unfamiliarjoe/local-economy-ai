import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function RecordsRequestDetail({ params }: { params: { id: string } }) {
  const item = await api.recordsRequestDetail(params.id, "staff");
  return <div className="space-y-4"><PageHeader title={`Records Request ${item.id || params.id}`} subtitle="Requester communication, search scope, and release prep." /><div className="grid gap-4 md:grid-cols-3"><Card className="md:col-span-2"><p className="text-sm">Requester: {item.requesterName}</p><p className="text-sm">Category: {item.category}</p><p className="text-sm">Reviewer: {item.reviewer}</p></Card><Card><Badge>{item.status||"submitted"}</Badge><p className="text-xs mt-2">Due: {item.dueDate}</p></Card></div><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="font-semibold">Timeline</h3><ul className="mt-2 text-sm space-y-2">{(item.timeline||[]).map((t:string)=><li key={t}>• {t}</li>)}</ul></Card><Card><h3 className="font-semibold">AI Assist</h3><p className="text-sm mt-2">{item.ai?.summary}</p><p className="text-xs mt-2 text-slate-400">Likely docs: {(item.ai?.likelyDocuments||[]).join(", ")}</p></Card></div></div>;
}
