import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";
export default async function Page(){ const rows=await api.fundingCalendar(); return <div className="space-y-4"><PageHeader title="Funding Calendar" subtitle="Upcoming grant and reporting deadlines for teams." /><TableShell headers={["Title","Date","Type"]} rows={(rows||[]).map((r:any)=>[r.title,r.date,r.type])} /></div>; }
