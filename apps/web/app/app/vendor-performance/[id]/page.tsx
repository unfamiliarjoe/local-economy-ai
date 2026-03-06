import { InsightCard, PageHeader, SecurityCallout, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const detail = await api.vendorPerformanceDetail(params.id);

  return (
    <div className="space-y-4">
      <PageHeader title={detail.vendor || params.id} subtitle="Vendor scorecards, renewal risk, and contract execution context." />
      <SecurityCallout message="Vendor performance scores are operational indicators and should be reviewed with procurement policy controls." />
      <div className="grid gap-4 md:grid-cols-3">
        <InsightCard title="Score" body={String(detail.score ?? "n/a")} tone="success" />
        <InsightCard title="Renewal Window" body={detail.renewalWindow || "n/a"} tone="warning" />
        <InsightCard title="AI Assistive Digest" body={`${detail.ai?.summary || "Unavailable"} (assistive-only)`} />
      </div>
      <TableShell
        headers={["Contract", "Status", "Value", "Insurance Expiry"]}
        rows={(detail.contracts || []).map((contract: any) => [
          contract.title,
          <StatusBadge key={contract.id} value={contract.status} />,
          `$${contract.value?.toLocaleString?.() ?? contract.value}`,
          contract.insuranceExpiry
        ])}
      />
    </div>
  );
}
