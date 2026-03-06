import { Card } from "./card";

export function InsightCard({ title, body, tone = "default" }: { title: string; body: string; tone?: "default" | "warning" | "success" }) {
  const toneClass = tone === "warning" ? "border-amber-600/40" : tone === "success" ? "border-emerald-600/40" : "border-slate-800";
  return <Card className={toneClass}><p className="text-xs uppercase tracking-wide text-slate-400">{title}</p><p className="mt-2 text-sm text-slate-200">{body}</p></Card>;
}
