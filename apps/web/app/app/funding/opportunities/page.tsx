import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page(){ const rows=await api.fundingOpportunities(); return <div className="space-y-4"><PageHeader title="Funding Opportunities" subtitle="Pipeline of grant opportunities with department/project fit." /><TableShell headers={["Opportunity","Deadline","Fit","Department","Project"]} rows={(rows||[]).map((r:any)=>[r.title,r.deadline,<Badge key={r.id}>{r.fit}</Badge>,r.linkedDepartment,r.linkedProjectId])} /></div>; }
