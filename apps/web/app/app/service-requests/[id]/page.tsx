import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function ServiceRequestDetail({ params }: { params: { id: string } }) {
  const item = await api.serviceRequestDetail(params.id, "staff");
  return (
    <div className="space-y-4">
      <PageHeader title={`311 Request ${item.id || params.id}`} subtitle="Issue intake, triage context, and assignment workflow." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <p className="text-sm">Reporter: {item.residentName}</p>
          <p className="text-sm">Category: {item.category}</p>
          <p className="text-sm">Location: {item.location}</p>
          <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
        </Card>
        <Card>
          <Badge>{item.status || "submitted"}</Badge>
          <p className="mt-2 text-sm">Priority: {item.priority}</p>
          <p className="text-sm">Assignee: {item.assignee}</p>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Timeline</h3><ul className="mt-2 space-y-2 text-sm text-slate-300">{(item.timeline || []).map((t: string) => <li key={t}>• {t}</li>)}</ul></Card>
        <Card><h3 className="font-semibold">AI Assist</h3><p className="mt-2 text-sm text-slate-300">Suggested category: {item.ai?.suggestedCategory}</p><p className="text-xs text-slate-400">Possible duplicate: {item.ai?.possibleDuplicate}</p></Card>
      </div>
    </div>
  );
}
