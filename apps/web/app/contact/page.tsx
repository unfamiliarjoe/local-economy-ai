"use client";
import { Button, Card, Input } from "@leai/ui";
import { useState } from "react";
import { SiteFooter } from "../../components/layout/site-footer";
import { SiteHeader } from "../../components/layout/site-header";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Card>
          <h1 className="text-3xl font-semibold">Request a demo</h1>
          <div className="mt-6 space-y-3">
            <Input placeholder="Full name" />
            <Input placeholder="Work email" />
            <Input placeholder="Organization" />
            <textarea className="min-h-28 w-full rounded-xl border border-slate-700 bg-slate-950 p-3" placeholder="What goals are you trying to achieve?" />
            <Button onClick={() => setStatus("Demo request submitted. Our team will follow up within one business day.")}>Submit</Button>
            {status ? <p className="text-sm text-emerald-300">{status}</p> : null}
          </div>
        </Card>
      </section>
      <SiteFooter />
    </main>
  );
}
