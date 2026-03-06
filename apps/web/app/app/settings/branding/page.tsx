import { Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const b = await api.settingsBranding();

  return (
    <div className="space-y-4">
      <PageHeader title="Branding" subtitle="Public and staff-facing brand controls for tenant identity consistency." />
      <TableShell
        headers={["Property", "Value"]}
        rows={[
          ["Tenant Slug", b.tenant],
          ["Display Name", b.displayName],
          ["Accent Color", b.accentColor],
          ["Logo URL", b.logoUrl]
        ]}
      />
      <Card>
        <p className="text-sm text-slate-300">Branding updates should be reviewed for ADA contrast compliance before publishing to resident portals.</p>
      </Card>
    </div>
  );
}
