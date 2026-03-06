import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";
export default async function Page({params}:{params:{id:string}}){ const d=await api.regionalDetail(params.id); return <div className="space-y-4"><PageHeader title={d.name || params.id} subtitle="Regional initiative detail, partner context, and coordination cadence." /><TableShell headers={["Partners"]} rows={(d.partners||[]).map((p:string)=>[p])} /><TableShell headers={["Coordination Notes"]} rows={(d.coordinationNotes||[]).map((n:string)=>[n])} /></div>; }
