import { Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const data = await api.settingsGeneral();

  return (
    <div className="space-y-4">
      <PageHeader title="General Settings" subtitle="Tenant identity, locale, communications metadata, and public defaults." />
      <TableShell
        headers={["Setting", "Value"]}
        rows={[
          ["Tenant", data.tenantName],
          ["Timezone", data.timezone],
          ["Locale", data.locale],
          ["Primary Contact", data.contactEmail],
          ["Open Data Portal", data.openDataPortalEnabled ? "Enabled" : "Disabled"]
        ]}
      />
      <Card>
        <p className="text-sm text-slate-300">General setting changes are tracked in audit logs and require privileged confirmation in production mode.</p>
      </Card>
    </div>
  );
}
