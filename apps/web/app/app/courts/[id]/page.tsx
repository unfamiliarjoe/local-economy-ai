import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function CourtDetail({ params }: { params: { id: string } }) {
  const item = await api.courtScheduleDetail(params.id);
  return <div className="space-y-4"><PageHeader title={`Schedule ${item.id || params.id}`} subtitle="Courtroom details, conflicts, and notice history." /><Card><p className="text-sm">Case: {item.caseNumber}</p><Badge className="mt-2">{item.status||"scheduled"}</Badge><p className="text-sm mt-2">Courtroom: {item.courtroom}</p></Card><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="font-semibold">Conflicts</h3><ul className="mt-2 text-sm">{(item.conflicts||[]).map((c:string)=><li key={c}>• {c}</li>)}</ul></Card><Card><h3 className="font-semibold">AI Scheduling Digest</h3><p className="text-sm mt-2">{item.ai?.dailyDigest}</p></Card></div></div>;
}
