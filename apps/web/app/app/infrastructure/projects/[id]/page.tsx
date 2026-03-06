import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../../../lib/api";

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const project = await api.projectDetail(params.id);
  return (
    <div className="space-y-4">
      <PageHeader title={project.name || params.id} subtitle="Capital project detail with milestone and timeline context." />
      <Card><p className="text-sm text-slate-300">Status: {project.status} · Priority: {project.priority} · Progress: {project.progress}%</p></Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Milestones</h3><ul className="mt-2 space-y-2 text-sm text-slate-300">{(project.milestones || []).map((m: string) => <li key={m}>• {m}</li>)}</ul></Card>
        <Card><h3 className="font-semibold">Timeline</h3><ul className="mt-2 space-y-2 text-sm text-slate-300">{(project.timeline || []).map((m: string) => <li key={m}>• {m}</li>)}</ul></Card>
      </div>
    </div>
  );
}
