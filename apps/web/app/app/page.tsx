import { Card, EmptyState, PageHeader, StartHereCard, StatCard } from "@leai/ui";
import { api } from "../../lib/api";

export default async function StaffDashboard() {
  const summary = await api.staffSummary();
  const kpis = summary.kpis || [];
  const alerts = summary.alerts || [];
  const activity = summary.activity || [];

  return (
    <div className="space-y-4">
      <PageHeader title="Executive Operations Dashboard" subtitle="Cross-department throughput, risk, and approvals." />

      <div className="grid gap-4 md:grid-cols-4">
        {kpis.map((kpi: any) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.trend} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StartHereCard title="Start Here: Leadership" description="Open command center and review citywide strategy and risk." href="/app/executive" cta="Go to Executive" />
        <StartHereCard title="Start Here: Operator" description="Open inspections and active queue operations for field teams." href="/app/inspections" cta="Go to Inspections" />
        <StartHereCard title="Start Here: Admin" description="Review compliance posture and security settings before pilot launch." href="/app/settings/security" cta="Go to Security" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="font-semibold">SLA & Risk Alerts</h3>
          {alerts.length ? <ul className="mt-3 space-y-2 text-sm text-slate-300">{alerts.map((alert: string) => <li key={alert}>• {alert}</li>)}</ul> : <EmptyState title="No active alerts" description="Operational risk alerts will appear here as they are detected." />}
        </Card>
        <Card>
          <h3 className="font-semibold">Recent Activity</h3>
          {activity.length ? <ul className="mt-3 space-y-2 text-sm text-slate-300">{activity.map((entry: string) => <li key={entry}>• {entry}</li>)}</ul> : <EmptyState title="No recent activity" description="Recent cross-department actions will appear here." />}
        </Card>
      </div>
    </div>
  );
}
