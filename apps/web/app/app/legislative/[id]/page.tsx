import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function MeetingDetail({ params }: { params: { id: string } }) {
  const item = await api.meetingDetail(params.id);
  return <div className="space-y-4"><PageHeader title={item.title || params.id} subtitle="Agenda, packet, and minutes workflow." /><Card><Badge>{item.status || "draft"}</Badge><p className="text-sm mt-2">Committee: {item.committee}</p><p className="text-sm">Date: {item.date}</p></Card><TableShell headers={["Agenda Item","Status","Owner"]} rows={(item.agendaItems||[]).map((a:any)=>[a.title,<Badge key={a.id}>{a.status}</Badge>,a.owner])} /><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="font-semibold">Packet</h3><p className="text-sm mt-2">Status: {item.packet?.status}</p></Card><Card><h3 className="font-semibold">AI Meeting Brief</h3><p className="text-sm mt-2">{item.ai?.preReadDigest}</p></Card></div></div>;
}
