import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../../lib/api";

export default async function WorkOrderDetail({ params }: { params: { id: string } }) {
  const wo = await api.workOrderDetail(params.id);
  return (
    <div className="space-y-4">
      <PageHeader title={`Work Order ${wo.id || params.id}`} subtitle="Operational dispatch and execution tracking." />
      <Card>
        <p className="text-sm">Title: {wo.title}</p>
        <p className="text-sm">Assignee: {wo.assignee}</p>
        <p className="text-sm">Due: {wo.dueDate}</p>
        <Badge className="mt-2">{wo.status || "new"}</Badge>
      </Card>
      <Card><h3 className="font-semibold">Timeline</h3><ul className="mt-2 space-y-2 text-sm text-slate-300">{(wo.timeline || []).map((t: string) => <li key={t}>• {t}</li>)}</ul></Card>
    </div>
  );
}
