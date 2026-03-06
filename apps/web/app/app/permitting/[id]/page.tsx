import { Badge, Card, PageHeader } from "@leai/ui";
import { prettyStage } from "../../../../lib/status";
import { api } from "../../../../lib/api";

export default async function PermitDetail({ params }: { params: { id: string } }) {
  const permit = await api.permitDetail(params.id);
  return (
    <div className="space-y-4">
      <PageHeader title={`Permit ${permit.id || params.id}`} subtitle="Detailed permit workspace for reviewers and coordinators." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <h3 className="font-semibold">Application Summary</h3>
          <p className="mt-2 text-sm text-slate-300">{permit.type} • {permit.address} • Parcel {permit.parcel}</p>
          <p className="mt-2 text-sm">Applicant: {permit.applicantName}</p>
          <p className="text-sm">Reviewer: {permit.reviewer}</p>
          <p className="text-sm">Documents: {permit.receivedDocs}/{permit.requiredDocs}</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Current Stage</h3>
          <Badge className="mt-2">{prettyStage(permit.stage || "unknown")}</Badge>
          <p className="mt-3 text-sm text-slate-300">Next action: request missing materials or approve for inspection.</p>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Activity Timeline</h3><ul className="mt-2 space-y-2 text-sm text-slate-300">{(permit.timeline || []).map((t: string) => <li key={t}>• {t}</li>)}</ul></Card>
        <Card><h3 className="font-semibold">AI Review Assist</h3><p className="mt-2 text-sm text-slate-300">{permit.ai?.summary}</p><p className="mt-2 text-xs text-amber-300">Missing docs: {(permit.ai?.missingDocuments || []).join(", ") || "None"}</p></Card>
      </div>
    </div>
  );
}
