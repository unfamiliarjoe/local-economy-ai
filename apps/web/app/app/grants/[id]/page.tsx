import { Badge, Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function GrantDetail({ params }: { params: { id: string } }) {
  const item = await api.grantAppDetail(params.id, "staff");
  return (
    <div className="space-y-4">
      <PageHeader title={`Grant Application ${item.id || params.id}`} subtitle="Reviewer context, award summary, and milestone readiness." />
      <Card><p className="text-sm">Applicant: {item.applicantName}</p><p className="text-sm">Requested: ${item.requestedAmount?.toLocaleString?.() || item.requestedAmount}</p><Badge className="mt-2">{item.status || "submitted"}</Badge></Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Awards</h3><ul className="mt-2 text-sm space-y-2">{(item.awards || []).map((a:any)=><li key={a.id}>{a.id} · ${a.amount.toLocaleString()} · {a.status}</li>)}</ul></Card>
        <Card><h3 className="font-semibold">AI Reviewer Digest</h3><p className="text-sm mt-2">{item.ai?.summary}</p></Card>
      </div>
    </div>
  );
}
