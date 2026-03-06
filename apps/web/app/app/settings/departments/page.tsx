import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const rows = await api.settingsDepartments();

  return (
    <div className="space-y-4">
      <PageHeader title="Departments" subtitle="Operational ownership model used across workflows, approvals, and reporting." />
      <TableShell
        headers={["Department", "Lead", "Scope ID", "Status"]}
        rows={(rows || []).map((row: any) => [row.name, row.leader, row.id, <Badge key={row.id}>{row.active ? "active" : "disabled"}</Badge>])}
      />
    </div>
  );
}
