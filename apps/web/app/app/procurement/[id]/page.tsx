import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function ProcurementDetail({ params }: { params: { id: string } }) {
  const item = await api.solicitationDetail(params.id, "staff");
  return (
    <div className="space-y-4">
      <PageHeader title={`Solicitation ${item.id || params.id}`} subtitle="Bid comparison and award recommendation workspace." />
      <Card><p className="text-sm">{item.title}</p><Badge className="mt-2">{item.status || "open"}</Badge><p className="mt-2 text-sm text-slate-300">{item.reviewSummary}</p></Card>
      <TableShell headers={["Bid", "Vendor", "Status", "Amount", "Submitted"]} rows={(item.submissions || []).map((b:any)=>[b.id,b.vendorName,<Badge key={b.id}>{b.status}</Badge>,`$${b.amount.toLocaleString()}`,b.submittedAt])} />
      <Card><h3 className="font-semibold">AI Procurement Assist</h3><p className="text-sm mt-2">{item.ai?.proposalSummary}</p><p className="text-xs text-slate-400 mt-2">{item.ai?.clarificationDraft}</p></Card>
    </div>
  );
}
