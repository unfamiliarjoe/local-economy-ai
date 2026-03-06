import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const c = await api.utilityCaseDetail(params.id);
  return <div className="space-y-4"><PageHeader title={`Utility Case ${c.id||params.id}`} subtitle="Account service workflow and customer notices." /><Card><Badge>{c.status||"under_review"}</Badge><p className="text-sm mt-2">Type: {c.type}</p></Card></div>;
}
