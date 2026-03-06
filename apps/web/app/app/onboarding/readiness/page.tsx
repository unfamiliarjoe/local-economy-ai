import { Card, PageHeader, SecurityCallout, StartHereCard, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const readiness = await api.onboardingReadiness();

  return (
    <div className="space-y-4">
      <PageHeader title="Go-live Readiness" subtitle="Pilot launch confidence, blockers, and implementation next steps." />
      <SecurityCallout message="Readiness scores are directional. Final launch should include IT/security approval and department owner sign-off." />
      <Card>
        <p className="text-xs">Readiness score</p>
        <p className="text-3xl font-semibold">{readiness.score || 0}</p>
      </Card>
      <TableShell headers={["Open Blockers"]} rows={(readiness.blockers || []).map((blocker: string) => [blocker])} />
      <div className="grid gap-4 md:grid-cols-2">
        <StartHereCard title="Security review" description="Confirm policy and access controls before production pilot access." href="/app/settings/security" cta="Review security settings" />
        <StartHereCard title="Compliance readiness" description="Validate audit/export pathways and privileged-action visibility." href="/app/compliance" cta="Open compliance center" />
      </div>
    </div>
  );
}
