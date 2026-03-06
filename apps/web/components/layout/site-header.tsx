import Link from "next/link";

const links = [
  ["Platform", "/platform"],
  ["Solutions", "/solutions"],
  ["Security", "/security"],
  ["AI Governance", "/ai-governance"],
  ["Contact", "/contact"]
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-wide">LOCAL ECONOMY AI</Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="flex gap-2">
          <Link href="/login" className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm">Log in</Link>
          <Link href="/contact" className="rounded-lg bg-sky-500 px-3 py-1.5 text-sm font-medium text-slate-950">Request demo</Link>
        </div>
      </div>
    </header>
  );
}
