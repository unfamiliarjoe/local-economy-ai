import Link from "next/link";
import { Badge, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function InfrastructurePage() {
  const projects = await api.projects();
  const workOrders = await api.workOrders();
  const requests = await api.maintenanceRequests();
  return (
    <div className="space-y-4">
      <PageHeader title="Infrastructure & Public Works" subtitle="Projects, work orders, and maintenance operations." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card><p className="text-xs text-slate-400">Projects</p><p className="text-2xl font-semibold">{projects?.length || 0}</p></Card>
        <Card><p className="text-xs text-slate-400">Active work orders</p><p className="text-2xl font-semibold">{workOrders?.length || 0}</p></Card>
        <Card><p className="text-xs text-slate-400">Maintenance requests</p><p className="text-2xl font-semibold">{requests?.length || 0}</p></Card>
      </div>
      <TableShell headers={["Project", "Status", "Priority", "Manager", "Progress"]} rows={(projects || []).map((p: any) => [
        <Link key={p.id} href={`/app/infrastructure/projects/${p.id}`} className="text-sky-300">{p.name}</Link>,
        <Badge key={`${p.id}-s`}>{p.status}</Badge>,
        p.priority,
        p.manager,
        `${p.progress}%`
      ])} />
      <TableShell headers={["Work Order", "Status", "Assignee", "Due", "Priority"]} rows={(workOrders || []).map((w: any) => [
        <Link key={w.id} href={`/app/infrastructure/work-orders/${w.id}`} className="text-sky-300">{w.id}</Link>,
        <Badge key={`${w.id}-s`}>{w.status}</Badge>,
        w.assignee,
        w.dueDate,
        w.priority
      ])} />
    </div>
  );
}
