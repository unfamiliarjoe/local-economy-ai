import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn("rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-black/10", className)} />;
}
