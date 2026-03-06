import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function ResidentRecordsRequestDetail({ params }: { params: { id: string } }) {
  const item = await api.recordsRequestDetail(params.id, "resident");
  return <div className="space-y-4"><PageHeader title={`Request ${item.id || params.id}`} subtitle="Track response status and update notices." /><Card><Badge>{item.status || "submitted"}</Badge><p className="mt-2 text-sm">Category: {item.category}</p><p className="text-sm">Reviewer: {item.reviewer || "Pending assignment"}</p></Card></div>;
}
