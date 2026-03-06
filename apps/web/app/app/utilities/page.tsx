import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.utilityCases();
  return <div className="space-y-4"><PageHeader title="Utilities & Customer Service" subtitle="Service-account requests and customer support cases." /><TableShell headers={["Case","Account","Type","Status","Owner"]} rows={(rows||[]).map((r:any)=>[<Link key={r.id} href={`/app/utilities/${r.id}`} className="text-sky-300">{r.id}</Link>,r.account,r.type,<Badge key={r.id}>{r.status}</Badge>,r.owner])} /></div>;
}
