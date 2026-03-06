import { PageHeader, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.meetings();

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <PageHeader title="Meeting Transparency" subtitle="Upcoming public meetings and governance schedule visibility." />
      <TableShell
        headers={["Meeting", "Date", "Status"]}
        rows={(rows || []).map((row: any) => [row.name || row.id, row.date || row.scheduledFor, <StatusBadge key={row.id} value={row.status} />])}
      />
    </div>
  );
}
