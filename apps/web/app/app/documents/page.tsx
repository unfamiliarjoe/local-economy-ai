import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function DocsPage() {
  const docs = await api.documents("staff");
  return <div className="space-y-4"><PageHeader title="Document Center" subtitle="Search, classify, and inspect linked records with AI intelligence." /><TableShell headers={["Document","Type","Status","Tags","Updated"]} rows={(docs||[]).map((d:any)=>[<Link key={d.id} href={`/app/documents/${d.id}`} className="text-sky-300">{d.name}</Link>,d.type,<Badge key={d.id}>{d.status}</Badge>,d.tags.join(", "),d.updatedAt])} /></div>;
}
