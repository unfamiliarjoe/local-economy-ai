import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const a = await api.settingsAccess();
  return <div className="space-y-4"><PageHeader title="Access Controls" subtitle="Role model, privileged roles, and impersonation safeguards." /><TableShell headers={["Control", "Value"]} rows={[["Role model", a.roleModel], ["Privileged roles", (a.privilegedRoles || []).join(", ")], ["Impersonation reason required", String(a.impersonationRequiresReason)], ["External sharing", a.externalSharingPolicy]]} /></div>;
}
