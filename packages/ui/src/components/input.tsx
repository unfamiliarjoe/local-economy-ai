import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("h-10 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 text-sm text-slate-100 outline-none ring-sky-500 focus:ring-2", props.className)} />;
}
