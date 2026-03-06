import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function LicenseDetail({ params }: { params: { id: string } }) {
  const item = await api.licenseAppDetail(params.id, "staff");
  return (
    <div className="space-y-4">
      <PageHeader title={`License Application ${item.id || params.id}`} subtitle="Business compliance, review notes, and status progression." />
      <Card><p className="text-sm">Business: {item.businessName}</p><p className="text-sm">Reviewer: {item.reviewer}</p><Badge className="mt-2">{item.status || "submitted"}</Badge></Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Compliance Checklist</h3><ul className="mt-2 text-sm space-y-2">{(item.checklist || []).map((c:string)=><li key={c}>• {c}</li>)}</ul></Card>
        <Card><h3 className="font-semibold">AI Licensing Assist</h3><p className="text-sm mt-2">{item.ai?.summary}</p><p className="text-xs text-amber-300 mt-2">Missing docs: {(item.ai?.missingDocs || []).join(", ") || "None"}</p></Card>
      </div>
    </div>
  );
}
