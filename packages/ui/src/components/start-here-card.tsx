import Link from "next/link";
import { Card } from "./card";

export function StartHereCard({ title, description, href, cta }: { title: string; description: string; href: string; cta: string }) {
  return (
    <Card>
      <p className="text-sm font-semibold text-slate-100">{title}</p>
      <p className="mt-1 text-sm text-slate-300">{description}</p>
      <Link className="mt-3 inline-block text-sm text-sky-300" href={href}>
        {cta}
      </Link>
    </Card>
  );
}
