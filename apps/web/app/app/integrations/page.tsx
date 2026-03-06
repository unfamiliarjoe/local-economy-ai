import { Badge, Card, InsightCard, PageHeader, SecurityCallout, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.integrations();
  const policy = await api.settingsIntegrations();

  return (
    <div className="space-y-4">
      <PageHeader title="Integration Hub" subtitle="Connector catalog, sync readiness, and migration confidence for legacy onboarding." />
      <SecurityCallout message="Integrations may transmit regulated operational data. Enable only approved connectors and monitor sync failures." />
      <div className="grid gap-4 md:grid-cols-3">
        <InsightCard title="Configured Connectors" body={(policy.configured || []).join(", ") || "None configured."} tone="success" />
        <InsightCard title="Pending Connectors" body={(policy.pending || []).join(", ") || "No pending connectors."} tone="warning" />
        <InsightCard title="Import/Export Guardrails" body={policy.importExportGuardrails || "Unknown"} />
      </div>
      <TableShell
        headers={["Integration", "Status", "Recommended Action"]}
        rows={(rows || []).map((r: any) => [
          r.id,
          <Badge key={r.id}>{r.status}</Badge>,
          r.status === "failed" ? "Review credentials + retry with scoped access token" : "Healthy"
        ])}
      />
      <Card>
        <p className="text-sm text-slate-300">Migration tip: run CSV imports in staging first, validate field mapping, then schedule production sync windows.</p>
      </Card>
    </div>
  );
}
