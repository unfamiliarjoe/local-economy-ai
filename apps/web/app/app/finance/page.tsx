import Link from "next/link";
import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const s=await api.financeSummary(); return <div className="space-y-4"><PageHeader title="Finance" subtitle="Budget/approval/purchasing foundations and departmental controls." /><div className="grid md:grid-cols-2 gap-4"><Card><p className="text-xs text-slate-400">Approvals Pending</p><p className="text-2xl font-semibold">{s.approvalsPending||0}</p></Card><Card><p className="text-xs text-slate-400">Budget Items</p><p className="text-2xl font-semibold">{s.budgetItems||0}</p></Card></div><div className="flex gap-3 text-sm"><Link className="text-sky-300" href="/app/finance/approvals">Open approvals</Link><Link className="text-sky-300" href="/app/finance/purchasing">Purchasing queue</Link></div></div>; }
