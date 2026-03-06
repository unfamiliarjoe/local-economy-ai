import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../../../lib/api";

export default async function WorkflowDetail({ params }: { params: { id: string } }) {
  const wf = await api.workflowDetail(params.id);
  return <div className="space-y-4"><PageHeader title={wf.name || params.id} subtitle="Workflow stages, transitions, SLA, and AI prompt settings." /><div className="grid gap-4 md:grid-cols-2"><Card><h3 className="font-semibold">Transitions</h3><ul className="mt-2 text-sm">{(wf.transitions||[]).map((t:string)=><li key={t}>• {t}</li>)}</ul></Card><Card><h3 className="font-semibold">Configuration</h3><p className="text-sm mt-2">SLA: {wf.sla}</p><p className="text-sm">AI Prompt: {wf.aiPromptConfig}</p></Card></div></div>;
}
