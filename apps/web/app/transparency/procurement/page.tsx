import { PageHeader, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.solicitations("resident");

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <PageHeader title="Public Procurement" subtitle="Open solicitations and status visibility for fair vendor participation." />
      <TableShell
        headers={["Solicitation", "Status", "Department"]}
        rows={(rows || []).map((row: any) => [row.title, <StatusBadge key={row.id} value={row.status} />, row.department])}
      />
    </div>
  );
}
