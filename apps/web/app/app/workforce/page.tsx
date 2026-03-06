import Link from "next/link";
import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page(){ const c=await api.workforceCapacity(); return <div className="space-y-4"><PageHeader title="Workforce Operations" subtitle="Inspector and field crew balancing across inspections, enforcement, and work orders." /><div className="grid md:grid-cols-3 gap-4"><Card><p className="text-xs">Available staff</p><p className="text-2xl font-semibold">{c.availableStaff || 0}</p></Card><Card><p className="text-xs">Overallocated</p><p className="text-2xl font-semibold">{c.overallocated || 0}</p></Card><Card><p className="text-xs">Queued assignments</p><p className="text-2xl font-semibold">{c.queuedAssignments || 0}</p></Card></div><div className="flex gap-4 text-sm"><Link className="text-sky-300" href="/app/workforce/assignments">Assignments</Link><Link className="text-sky-300" href="/app/workforce/capacity">Capacity</Link></div></div>; }
