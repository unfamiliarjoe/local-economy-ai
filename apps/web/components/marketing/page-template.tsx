import { Card } from "@leai/ui";
import { SiteFooter } from "../layout/site-footer";
import { SiteHeader } from "../layout/site-header";

export function MarketingPageTemplate({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p className="mt-4 max-w-3xl text-slate-300">{subtitle}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Operational clarity across departments",
            "AI assistance with explicit human accountability",
            "Enterprise-grade trust and governance"
          ].map((text) => <Card key={text}><p>{text}</p></Card>)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
