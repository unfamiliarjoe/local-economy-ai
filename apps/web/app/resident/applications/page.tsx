"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Input, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default function ResidentApplications() {
  const [permits, setPermits] = useState<any[]>([]);
  const [benefits, setBenefits] = useState<any[]>([]);
  const [grants, setGrants] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.permits().then((d)=>setPermits(Array.isArray(d)?d:[]));
    api.benefitsApps("resident").then((d)=>setBenefits(Array.isArray(d)?d:[]));
    api.grantApps("resident").then((d)=>setGrants(Array.isArray(d)?d:[]));
  }, []);

  async function startBenefits() {
    const created = await api.createBenefitsApp({ programId: "BEN-PGM-01", residentName: "Nina Patel", householdSize: 3, requestedSupport: "Utility arrears support" });
    setMessage(`Started benefits application ${created.id}`);
  }

  async function startGrant() {
    const created = await api.createGrantApp({ programId: "GRT-PGM-07", applicantName: "Nina Patel", requestedAmount: 12000, narrative: "Neighborhood storefront activation micro-project." }, "resident");
    setMessage(`Started grant application ${created.id}`);
  }

  return (
    <div className="space-y-4">
      <PageHeader title="Applications" subtitle="Track permits, benefits, and grant applications in one place." />
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="font-semibold">Start benefits application</h3><Button className="mt-3" onClick={startBenefits}>Apply now</Button></Card>
        <Card><h3 className="font-semibold">Start grant application</h3><Button className="mt-3" onClick={startGrant}>Apply now</Button></Card>
      </div>
      {message ? <Card><p className="text-sm text-emerald-300">{message}</p></Card> : null}
      <TableShell headers={["Permit", "Type", "Stage", "Docs"]} rows={permits.filter((p:any)=>p.applicantName==="Nina Patel").map((p:any)=>[
        <Link key={p.id} href={`/app/permitting/${p.id}`} className="text-sky-300">{p.id}</Link>, p.type, <Badge key={`${p.id}-s`}>{p.stage}</Badge>, `${p.receivedDocs}/${p.requiredDocs}`
      ])} />
      <TableShell headers={["Benefits App", "Program", "Status", "Caseworker"]} rows={benefits.map((b:any)=>[b.id,b.programId,<Badge key={b.id}>{b.status}</Badge>,b.caseworker])} />
      <TableShell headers={["Grant App", "Program", "Status", "Requested"]} rows={grants.map((g:any)=>[g.id,g.programId,<Badge key={g.id}>{g.status}</Badge>,`$${g.requestedAmount?.toLocaleString?.()||g.requestedAmount}`])} />
    </div>
  );
}
