import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const roles = await api.settingsRoles();

  return (
    <div className="space-y-4">
      <PageHeader title="Access Roles" subtitle="Role model transparency for procurement, IT review, and internal control confidence." />
      <TableShell
        headers={["Role", "Scope", "Privileged", "Assigned Users"]}
        rows={(roles || []).map((role: any) => [role.id, role.scope, <Badge key={role.id}>{role.privileged ? "privileged" : "standard"}</Badge>, role.users])}
      />
      <Card>
        <p className="text-sm text-slate-300">Privileged role assignments should be reviewed weekly and tied to an approved access request workflow.</p>
      </Card>
    </div>
  );
}
