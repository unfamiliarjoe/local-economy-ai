import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";
export default async function Page(){ const rows=await api.onboardingImports(); return <div className="space-y-4"><PageHeader title="Migration Imports" subtitle="Legacy data migration runs and mapping progress." /><TableShell headers={["Source","Status","Mapped Fields"]} rows={(rows||[]).map((r:any)=>[r.source,<Badge key={r.id}>{r.status}</Badge>,r.mappedFields])} /></div>; }
