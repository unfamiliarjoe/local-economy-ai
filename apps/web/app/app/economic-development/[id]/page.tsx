import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function EconomicProjectDetail({ params }: { params: { id: string } }) {
  const item = await api.econProjectDetail(params.id);
  return (
    <div className="space-y-4">
      <PageHeader title={item.name || params.id} subtitle="Development project execution and strategic impact context." />
      <Card><p className="text-sm">Status: {item.status}</p><p className="text-sm">Projected Jobs: {item.projectedJobs}</p></Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Timeline</h3><ul className="mt-2 text-sm space-y-2">{(item.timeline || []).map((t:string)=><li key={t}>• {t}</li>)}</ul></Card>
        <Card><h3 className="font-semibold">AI Executive Digest</h3><p className="text-sm mt-2">{item.aiDigest}</p></Card>
      </div>
    </div>
  );
}
