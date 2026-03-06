import Link from "next/link";
import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function WorkflowsPage() {
  const rows = await api.workflows();
  return <div className="space-y-4"><PageHeader title="Workflow Builder" subtitle="Configure workflow definitions, stages, and transition rules." /><TableShell headers={["Workflow","Module","Stages"]} rows={(rows||[]).map((w:any)=>[<Link key={w.id} href={`/app/settings/workflows/${w.id}`} className="text-sky-300">{w.name}</Link>,w.module,w.stages.join(" → ")])} /></div>;
}
