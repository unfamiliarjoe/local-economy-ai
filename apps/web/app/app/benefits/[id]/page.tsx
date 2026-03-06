import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function BenefitsDetail({ params }: { params: { id: string } }) {
  const item = await api.benefitsAppDetail(params.id, "staff");
  return (
    <div className="space-y-4">
      <PageHeader title={`Benefits Application ${item.id || params.id}`} subtitle="Eligibility workflow and human-reviewed decision support." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2"><p className="text-sm">Resident: {item.residentName}</p><p className="text-sm">Program: {item.programId}</p><p className="text-sm">Caseworker: {item.caseworker}</p></Card>
        <Card><Badge>{item.status || "submitted"}</Badge><p className="mt-2 text-sm">Missing docs: {(item.ai?.missingDocuments || []).length}</p></Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Checklist</h3><ul className="mt-2 text-sm space-y-2">{(item.checklist || []).map((c:string)=><li key={c}>• {c}</li>)}</ul></Card>
        <Card><h3 className="font-semibold">AI Assistive Summary</h3><p className="mt-2 text-sm text-slate-300">{item.ai?.summary}</p><p className="text-xs text-amber-300 mt-2">{item.ai?.eligibilityGuidance}</p></Card>
      </div>
    </div>
  );
}
