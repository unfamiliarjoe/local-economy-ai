import { Card } from "@leai/ui";

export function MarketingSections() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-20">
      <section className="grid gap-6 md:grid-cols-3">
        {["Unified operations", "AI with accountability", "Executive visibility"].map((item) => (
          <Card key={item}><h3 className="text-lg font-semibold">{item}</h3><p className="mt-2 text-sm text-slate-400">Purpose-built workflows for municipalities, departments, residents, and vendors.</p></Card>
        ))}
      </section>
      <section>
        <h2 className="text-3xl font-semibold">How LEAI works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Configure workflows", "Collect structured intake", "AI-assisted routing", "Measure outcomes"].map((step, i) => (
            <Card key={step}><p className="text-xs text-sky-300">STEP {i + 1}</p><p className="mt-2 font-medium">{step}</p></Card>
          ))}
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="text-xl font-semibold">Security & Trust</h3><p className="mt-2 text-sm text-slate-400">Tenant isolation, role-based access, audit logs, and clear AI disclosures built-in.</p></Card>
        <Card><h3 className="text-xl font-semibold">Economic Outcomes</h3><p className="mt-2 text-sm text-slate-400">Reduce processing time, improve business participation, and unlock local growth capacity.</p></Card>
      </section>
      <section>
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-3">
          {[["Can LEAI replace legacy systems?", "Yes. LEAI unifies fragmented workflows and can phase integrations by department."],["Is AI making final decisions?", "No. High-risk outputs are assistive only with explicit human review gates."]].map(([q,a]) => <Card key={q}><p className="font-medium">{q}</p><p className="mt-2 text-sm text-slate-400">{a}</p></Card>)}
        </div>
      </section>
    </div>
  );
}
