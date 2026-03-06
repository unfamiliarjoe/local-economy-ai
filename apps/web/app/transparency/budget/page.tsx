import { PageHeader, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.contracts();

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <PageHeader title="Budget Transparency" subtitle="Budget-to-contract execution snapshots for public accountability." />
      <TableShell
        headers={["Contract", "Value", "Status"]}
        rows={(rows || []).map((row: any) => [row.title, `$${row.value?.toLocaleString?.() ?? row.value}`, <StatusBadge key={row.id} value={row.status} />])}
      />
    </div>
  );
}
