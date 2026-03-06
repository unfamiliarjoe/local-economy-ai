import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";
export default async function Page(){ const rows=await api.onboardingChecklist(); return <div className="space-y-4"><PageHeader title="Onboarding Checklist" subtitle="Implementation task tracker for tenant go-live." /><TableShell headers={["Item","Status"]} rows={(rows||[]).map((r:any)=>[r.item,<Badge key={r.id}>{r.status}</Badge>])} /></div>; }
