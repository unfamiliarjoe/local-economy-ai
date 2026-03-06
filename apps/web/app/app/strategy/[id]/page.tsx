import { InsightCard, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({params}:{params:{id:string}}){ const d=await api.strategyDetail(params.id); return <div className="space-y-4"><PageHeader title={d.title || params.id} subtitle="Initiative detail with risks, linked projects, and assistive executive pre-read." /><InsightCard title="AI Pre-read (Assistive)" body={d.aiPrep?.digest || "No digest"} /><TableShell headers={["Linked Project/Program"]} rows={(d.linkedProjects||[]).map((x:string)=>[x])} /><TableShell headers={["Blockers"]} rows={(d.blockers||[]).map((x:string)=>[x])} /></div>; }
