import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const i = await api.inspectionDetail(params.id);
  return <div className="space-y-4"><PageHeader title={`Inspection ${i.id||params.id}`} subtitle="Findings, assignment, and linked workflow record." /><Card><Badge>{i.status||"scheduled"}</Badge><p className="text-sm mt-2">Inspector: {i.inspector}</p><p className="text-sm">Findings: {i.findings}</p></Card></div>;
}
