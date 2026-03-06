import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function ResidentServiceRequestDetail({ params }: { params: { id: string } }) {
  const item = await api.serviceRequestDetail(params.id, "resident");
  return (
    <div className="space-y-4">
      <PageHeader title={`Request ${item.id || params.id}`} subtitle="Status updates and next steps from city teams." />
      <Card>
        <Badge>{item.status || "submitted"}</Badge>
        <p className="mt-2 text-sm">Category: {item.category}</p>
        <p className="text-sm">Location: {item.location}</p>
        <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
      </Card>
    </div>
  );
}
