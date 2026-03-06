import type { ReactNode } from "react";
import { Card } from "./card";

export function FilterBar({ children }: { children: ReactNode }) {
  return <Card className="flex flex-wrap items-center gap-2">{children}</Card>;
}
