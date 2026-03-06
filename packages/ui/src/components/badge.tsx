import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span {...props} className={cn("inline-flex rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300", className)} />;
}
