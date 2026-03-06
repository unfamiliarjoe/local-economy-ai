import { PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const rows=await api.boards(); return <div className="space-y-4"><PageHeader title="Boards & Commissions" subtitle="Recurring governance groups and meeting cadence." /><TableShell headers={["Board","Meetings/Month"]} rows={(rows||[]).map((r:any)=>[r.name,r.meetingsPerMonth])} /></div>; }
