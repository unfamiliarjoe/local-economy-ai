import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function CourtsPage() {
  const list = await api.courtSchedules();
  return <div className="space-y-4"><PageHeader title="Court Scheduling" subtitle="Calendar operations, courtroom assignment, and conflict handling." /><TableShell headers={["Schedule","Case","Status","Courtroom","Date/Time","Clerk"]} rows={(list||[]).map((c:any)=>[<Link key={c.id} href={`/app/courts/${c.id}`} className="text-sky-300">{c.id}</Link>,c.caseNumber,<Badge key={`${c.id}-s`}>{c.status}</Badge>,c.courtroom,c.dateTime,c.clerk])} /></div>;
}
