import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.exports();

  return (
    <div className="space-y-4">
      <PageHeader title="Exports" subtitle="Operational reporting, open records packages, and compliance evidence generation." />
      <TableShell
        headers={["Job", "Type", "Status", "Target", "Governance"]}
        rows={(rows || []).map((r: any) => [
          r.id,
          r.type,
          <Badge key={r.id}>{r.status}</Badge>,
          r.target,
          r.status === "completed" ? "Available for secure download" : "Pending reviewer confirmation"
        ])}
      />
      <Card>
        <p className="text-sm text-slate-300">Export files should be stored in approved retention vaults; sharing public links is disabled in this demo workspace.</p>
      </Card>
    </div>
  );
}
