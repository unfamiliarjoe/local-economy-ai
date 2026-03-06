import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";
export default async function Page({params}:{params:{id:string}}){ const d=await api.reportDetail(params.id); return <div className="space-y-4"><PageHeader title={d.name || params.id} subtitle="Pack composition and generated artifacts." /><TableShell headers={["File"]} rows={(d.contents||[]).map((c:string)=>[c])} /></div>; }
