import { Badge, Button } from "@leai/ui";
import Link from "next/link";

export function MarketingHero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24">
      <Badge className="w-fit">LEAI · CIVIC OPERATING SYSTEM</Badge>
      <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
        The AI Operating System for Cities, Counties, Municipal Agencies, and Local Economies.
      </h1>
      <p className="max-w-3xl text-lg text-slate-300">
        Modernize permitting, 311, benefits, procurement, records, and executive analytics in one trusted, configurable platform.
      </p>
      <div className="flex gap-3">
        <Link href="/contact"><Button>Request a demo</Button></Link>
        <Link href="/platform"><Button variant="secondary">Explore platform</Button></Link>
      </div>
    </section>
  );
}
