import { PageHeader, SecurityCallout, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const contracts = await api.contracts();

  return (
    <div className="space-y-4">
      <PageHeader title="Budget to Delivery" subtitle="Approved dollars linked to procurement contracts and execution outcomes." />
      <SecurityCallout message="Budget chain views are finance-sensitive and should be validated against approved appropriations before publication." />
      <TableShell
        headers={["Contract", "Status", "Value", "Vendor", "End Date"]}
        rows={(contracts || []).map((contract: any) => [
          contract.title,
          <StatusBadge key={contract.id} value={contract.status} />,
          `$${contract.value?.toLocaleString?.() ?? contract.value}`,
          contract.vendorId,
          contract.endDate
        ])}
      />
    </div>
  );
}
