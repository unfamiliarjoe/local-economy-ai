"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, Input, PageHeader } from "@leai/ui";
import { api } from "../../../lib/api";
import { validateIssueForm } from "../../../lib/validators";

export default function ResidentServiceRequests() {
  const [list, setList] = useState<any[]>([]);
  const [category, setCategory] = useState("Pothole");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.serviceRequests("resident").then((d) => setList(Array.isArray(d) ? d : []));
  }, []);

  async function submit() {
    if (!validateIssueForm(location, summary)) {
      setMessage("Please provide location and a clear description.");
      return;
    }
    const created = await api.createServiceRequest({ category, location, summary, residentName: "Nina Patel" });
    setMessage(`Submitted request ${created.id}`);
  }

  return (
    <div className="space-y-4">
      <PageHeader title="311 Requests" subtitle="Report issues and track status updates from city teams." />
      <Card>
        <h3 className="font-semibold">Report an issue</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <select className="h-10 rounded-xl border border-slate-700 bg-slate-950 px-3" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Pothole</option><option>Street Light Outage</option><option>Graffiti</option><option>Trash/Dumping</option>
          </select>
          <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <textarea className="mt-3 min-h-24 w-full rounded-xl border border-slate-700 bg-slate-950 p-3" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Describe the issue" />
        <Button className="mt-3" onClick={submit}>Submit request</Button>
        {message ? <p className="mt-2 text-sm text-emerald-300">{message}</p> : null}
      </Card>
      <Card>
        <h3 className="font-semibold">Your requests</h3>
        <ul className="mt-3 space-y-2 text-sm">{list.map((r) => <li key={r.id}><Link className="text-sky-300" href={`/resident/service-requests/${r.id}`}>{r.id}</Link> · {r.category} · {r.status}</li>)}</ul>
      </Card>
    </div>
  );
}
