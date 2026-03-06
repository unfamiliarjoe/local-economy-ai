import Link from "next/link";
import { Card, PageHeader, SecurityCallout, StartHereCard } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const summary = await api.onboardingSummary();

  return (
    <div className="space-y-4">
      <PageHeader title="Implementation Engine" subtitle="Pilot-city onboarding, migration execution, and launch readiness management." />
      <SecurityCallout message="Onboarding actions can alter tenant configuration and data mapping. Track approvals and preserve migration evidence for procurement reviews." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card><p className="text-xs">Completed tasks</p><p className="text-2xl font-semibold">{summary.completed || 0}</p></Card>
        <Card><p className="text-xs">In progress</p><p className="text-2xl font-semibold">{summary.inProgress || 0}</p></Card>
        <Card><p className="text-xs">Pending setup</p><p className="text-2xl font-semibold">{summary.pending || 0}</p></Card>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <StartHereCard title="Checklist" description="Track implementation milestones and assign accountable owners." href="/app/onboarding/checklist" cta="Open checklist" />
        <StartHereCard title="Migration imports" description="Monitor legacy data loads, field mapping progress, and retry states." href="/app/onboarding/imports" cta="Open imports" />
        <StartHereCard title="Go-live readiness" description="Assess risk blockers and implementation confidence before launch." href="/app/onboarding/readiness" cta="Open readiness" />
      </div>
      <Link className="text-sm text-sky-300" href="/app/settings">Open tenant settings</Link>
    </div>
  );
}
