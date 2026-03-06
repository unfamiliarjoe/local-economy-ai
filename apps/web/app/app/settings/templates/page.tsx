import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const templates = await api.settingsTemplates();

  return (
    <div className="space-y-4">
      <PageHeader title="Templates" subtitle="Centralized notice and packet templates with workflow-aware governance." />
      <TableShell
        headers={["Template", "Type", "Module", "Status"]}
        rows={(templates || []).map((row: any) => [row.id, row.type, row.module, <Badge key={row.id}>{row.status}</Badge>])}
      />
    </div>
  );
}
