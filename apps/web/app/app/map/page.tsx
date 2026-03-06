import Link from "next/link";
import { Card, FilterBar, PageHeader, SecurityCallout, StartHereCard, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const summary = await api.mapSummary();
  const rows = await api.mapRecords();

  return (
    <div className="space-y-4">
      <PageHeader title="Geospatial Command" subtitle="Location-first operations for permits, service requests, inspections, and capital delivery." />
      <SecurityCallout message="Map data can expose sensitive location context. Role-based controls and audit logging apply to record-level drilldowns." />
      <FilterBar>
        <select className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm" aria-label="Overlay selector">
          <option>District overlays</option>
          <option>Service areas</option>
          <option>Corridors</option>
        </select>
        <input className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm" placeholder="Search address, parcel, or record" />
      </FilterBar>
      <div className="grid gap-4 md:grid-cols-3">
        <Card><p className="text-xs">Mapped records</p><p className="text-2xl font-semibold">{summary.total || 0}</p></Card>
        <Card><p className="text-xs">Service overlays</p><p className="text-2xl font-semibold">{(summary.overlays || []).length}</p></Card>
        <Card><p className="text-xs">Tracked modules</p><p className="text-2xl font-semibold">{Object.keys(summary.byModule || {}).length}</p></Card>
      </div>
      <TableShell
        headers={["Label", "Module", "District", "Parcel", "Status"]}
        rows={(rows || []).map((row: any) => [row.label, row.module, row.district, row.parcel, <StatusBadge key={row.id} value={row.status} />])}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <StartHereCard
          title="Operations dispatch"
          description="Move from map clusters into 311 and inspections queues to coordinate same-day field response."
          href="/app/workforce/assignments"
          cta="Open assignment board"
        />
        <StartHereCard
          title="Capital visibility"
          description="Connect map-located capital projects to strategy and transparency reporting."
          href="/app/strategy"
          cta="Open strategy cockpit"
        />
      </div>
      <Link className="text-sm text-sky-300" href="/transparency/projects">Open public project tracker</Link>
    </div>
  );
}
