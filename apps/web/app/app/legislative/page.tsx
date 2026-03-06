import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function LegislativePage() {
  const meetings = await api.meetings();
  return <div className="space-y-4"><PageHeader title="Legislative & Council" subtitle="Meetings, agenda packets, and publication workflow." /><TableShell headers={["Meeting","Status","Committee","Date"]} rows={(meetings||[]).map((m:any)=>[<Link key={m.id} href={`/app/legislative/${m.id}`} className="text-sky-300">{m.title}</Link>,<Badge key={`${m.id}-s`}>{m.status}</Badge>,m.committee,m.date])} /></div>;
}
