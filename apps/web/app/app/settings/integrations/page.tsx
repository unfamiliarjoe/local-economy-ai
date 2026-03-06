import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const i = await api.settingsIntegrations();
  return <div className="space-y-4"><PageHeader title="Integration Policies" subtitle="Tenant integration posture and import/export safeguards." /><TableShell headers={["Configured", "Pending", "Guardrails"]} rows={[[ (i.configured || []).join(", "), (i.pending || []).join(", "), i.importExportGuardrails ]]} /></div>;
}
