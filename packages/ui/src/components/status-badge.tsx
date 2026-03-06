import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

const toneClasses: Record<string, string> = {
  success: "border-emerald-500/40 bg-emerald-950/40 text-emerald-200",
  warning: "border-amber-500/40 bg-amber-950/40 text-amber-200",
  danger: "border-rose-500/40 bg-rose-950/40 text-rose-200",
  info: "border-sky-500/40 bg-sky-950/40 text-sky-200",
  neutral: "border-slate-700 bg-slate-900 text-slate-200"
};

function toneFromValue(value: string) {
  const v = value.toLowerCase();
  if (["approved", "completed", "active", "resolved", "ready", "on_track", "posted"].includes(v)) return "success";
  if (["warning", "at_risk", "pending", "in_progress", "triaged", "scheduled", "review", "generating"].includes(v)) return "warning";
  if (["failed", "high", "overdue", "blocked", "denied"].includes(v)) return "danger";
  if (["info", "new", "submitted"].includes(v)) return "info";
  return "neutral";
}

export function StatusBadge({ value, className, ...props }: HTMLAttributes<HTMLSpanElement> & { value: string }) {
  const tone = toneFromValue(value);
  return (
    <span
      {...props}
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium capitalize",
        toneClasses[tone],
        className
      )}
    >
      {value.replaceAll("_", " ")}
    </span>
  );
}
