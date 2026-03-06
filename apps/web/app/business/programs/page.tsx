"use client";
import { useEffect, useState } from "react";
import { Button, Card, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default function BusinessProgramsPage() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [grants, setGrants] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.econPrograms("vendor").then((d) => setPrograms(Array.isArray(d) ? d : []));
    api.grantPrograms("vendor").then((d) => setGrants(Array.isArray(d) ? d : []));
  }, []);

  async function expressInterest() {
    const created = await api.createGrantApp({ programId: "GRT-PGM-07", applicantName: "Brookhaven Civil Works LLC", requestedAmount: 50000, narrative: "Workforce apprenticeship expansion with local hiring focus." }, "vendor");
    setMessage(`Submitted program application ${created.id}`);
  }

  return (
    <div className="space-y-4">
      <PageHeader title="Programs & Incentives" subtitle="Explore grants and economic incentive opportunities." />
      <TableShell headers={["Incentive", "Status", "Focus"]} rows={programs.map((p:any)=>[p.name,p.status,p.focus])} />
      <TableShell headers={["Grant Program", "Status", "Owner"]} rows={grants.map((g:any)=>[g.name,g.status,g.owner])} />
      <Card><Button onClick={expressInterest}>Apply to featured grant</Button>{message ? <p className="mt-2 text-sm text-emerald-300">{message}</p> : null}</Card>
    </div>
  );
}
