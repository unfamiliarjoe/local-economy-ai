"use client";
import { useEffect, useState } from "react";
import { Button, Card, Input, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default function BusinessLicensesPage() {
  const [apps, setApps] = useState<any[]>([]);
  const [licenseTypeId, setLicenseTypeId] = useState("LIC-TYP-02");
  const [ownerName, setOwnerName] = useState("Alex Rivers");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.licenseApps("vendor").then((d) => setApps(Array.isArray(d) ? d : []));
  }, []);

  async function submit() {
    const created = await api.createLicenseApp({ licenseTypeId, businessName: "Brookhaven Civil Works LLC", address: "77 River Ave", ownerName });
    setMessage(`Application ${created.id} started.`);
  }

  return (
    <div className="space-y-4">
      <PageHeader title="Licenses" subtitle="Start and track business license applications." />
      <Card>
        <h3 className="font-semibold">Start license application</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <Input value={licenseTypeId} onChange={(e)=>setLicenseTypeId(e.target.value)} />
          <Input value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} />
        </div>
        <Button className="mt-3" onClick={submit}>Create application</Button>
        {message ? <p className="mt-2 text-sm text-emerald-300">{message}</p> : null}
      </Card>
      <TableShell headers={["Application", "Business", "Status", "Reviewer", "Expires"]} rows={apps.map((a:any)=>[a.id,a.businessName,a.status,a.reviewer,a.expiresOn||"—"])} />
    </div>
  );
}
