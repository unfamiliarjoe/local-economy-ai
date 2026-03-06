import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function TasksPage() {
  const tasks = await api.tasks();
  return (
    <div className="space-y-4">
      <PageHeader title="Tasks" subtitle="Department and assignee work queues with SLA visibility." />
      <TableShell headers={["Title", "Module", "Priority", "Due", "Status"]} rows={(tasks || []).map((t: any) => [t.title, t.module, <Badge key={t.id}>{t.priority}</Badge>, t.dueDate, t.status])} />
    </div>
  );
}
