import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function ZoningDetail({ params }: { params: { id: string } }) {
  const item = await api.zoningDetail(params.id);
  return (
    <div className="space-y-4">
      <PageHeader title={`Zoning Case ${item.id || params.id}`} subtitle="Planning case workspace with staff memo and recommendation context." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <h3 className="font-semibold">Request Summary</h3>
          <p className="mt-2 text-sm text-slate-300">{item.requestType} for parcel {item.parcel}</p>
          <p className="text-sm">Applicant: {item.applicant}</p>
          <p className="text-sm">Planner: {item.planner}</p>
          <p className="mt-2 text-sm">{item.summary}</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Status</h3>
          <Badge className="mt-2">{item.status || "unknown"}</Badge>
          <p className="mt-2 text-xs text-slate-300">Hearing: {item.hearingDate || "Not scheduled"}</p>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Staff Memo</h3><p className="mt-2 text-sm text-slate-300">{item.staffMemo}</p></Card>
        <Card><h3 className="font-semibold">AI Zoning Assist</h3><p className="mt-2 text-sm text-slate-300">{item.ai?.summary}</p><p className="mt-2 text-xs text-slate-400">Similar cases: {(item.ai?.similarCases || []).join(", ")}</p></Card>
      </div>
    </div>
  );
}
