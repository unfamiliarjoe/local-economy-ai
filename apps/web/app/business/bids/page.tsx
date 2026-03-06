"use client";
import { useEffect, useState } from "react";
import { Button, Card, Input, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";
import { validateBidAmount } from "../../../lib/validators";

export default function BusinessBidsPage() {
  const [solicitations, setSolicitations] = useState<any[]>([]);
  const [bids, setBids] = useState<any[]>([]);
  const [solicitationId, setSolicitationId] = useState("SOL-2026-18");
  const [amount, setAmount] = useState("100000");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.solicitations("vendor").then((d) => setSolicitations(Array.isArray(d) ? d : []));
    api.bids("vendor").then((d) => setBids(Array.isArray(d) ? d : []));
  }, []);

  async function submit() {
    if (!validateBidAmount(Number(amount))) {
      setMessage("Enter a valid bid amount.");
      return;
    }
    const created = await api.submitBid({ solicitationId, vendorName: "Brookhaven Civil Works LLC", amount: Number(amount), coverLetter: "We can mobilize in 14 days with local workforce commitments." });
    setMessage(`Submitted ${created.id}`);
  }

  return (
    <div className="space-y-4">
      <PageHeader title="Bids & Solicitations" subtitle="Track opportunities and submit compliant bids." />
      <TableShell headers={["Solicitation", "Title", "Status", "Deadline"]} rows={solicitations.map((s:any)=>[s.id,s.title,s.status,s.deadline])} />
      <Card>
        <h3 className="font-semibold">Submit Bid</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <Input value={solicitationId} onChange={(e)=>setSolicitationId(e.target.value)} />
          <Input value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <Button className="mt-3" onClick={submit}>Submit</Button>
        {message ? <p className="mt-2 text-sm text-emerald-300">{message}</p> : null}
      </Card>
      <TableShell headers={["Bid", "Solicitation", "Status", "Amount"]} rows={bids.map((b:any)=>[b.id,b.solicitationId,b.status,`$${b.amount.toLocaleString()}`])} />
    </div>
  );
}
