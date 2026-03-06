import Link from "next/link";
import { Badge, Breadcrumbs } from "@leai/ui";
import type { ReactNode } from "react";

export type PortalNavItem =
  | { label: string; section: true }
  | { href: string; label: string; section?: false };

export function PortalShell({ title, roleLabel, nav, children }: { title: string; roleLabel: string; nav: PortalNavItem[]; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto grid max-w-[1400px] gap-6 p-6 md:grid-cols-[280px_1fr]">
        <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm font-semibold">LOCAL ECONOMY AI</p>
          <Badge className="mt-3">{roleLabel}</Badge>
          <nav className="mt-6 space-y-1 text-sm text-slate-300">
            {nav.map((item) =>
              item.section ? (
                <p key={`section-${item.label}`} className="px-3 pt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.label}
                </p>
              ) : (
                <Link key={item.href} className="block rounded-lg px-3 py-2 hover:bg-slate-800" href={item.href}>
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </aside>
        <section className="min-w-0 space-y-4">
          <header className="sticky top-4 z-10 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
            <div>
              <Breadcrumbs items={["City of Brookhaven", title]} />
              <p className="mt-1 font-medium">{title}</p>
            </div>
            <button className="rounded-lg border border-slate-700 px-3 py-1 text-sm">⌘K Search</button>
          </header>
          {children}
        </section>
      </div>
    </div>
  );
}
