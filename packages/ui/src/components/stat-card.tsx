import { Card } from "./card";

export function StatCard({ label, value, trend }: { label: string; value: string | number; trend?: string }) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-slate-100">{value}</p>
      {trend ? <p className="mt-1 text-xs text-emerald-300">{trend}</p> : null}
    </Card>
  );
}
