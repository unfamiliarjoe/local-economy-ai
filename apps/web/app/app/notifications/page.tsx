import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function NotificationsPage() {
  const list = await api.notifications("staff");
  return (
    <div className="space-y-4">
      <PageHeader title="Notifications" subtitle="Unread, read, and severity-aware system and workflow notices." />
      <div className="space-y-3">{(list || []).map((n: any) => <Card key={n.id}><p className="font-medium">{n.title}</p><p className="text-sm text-slate-400">{n.body}</p></Card>)}</div>
    </div>
  );
}
