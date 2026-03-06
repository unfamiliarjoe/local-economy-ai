"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, Input, PageHeader } from "@leai/ui";
import { api } from "../../../lib/api";

export default function ResidentRecordsRequests() {
  const [rows, setRows] = useState<any[]>([]);
  const [category, setCategory] = useState("Police incident records");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => { api.recordsRequests("resident").then((d)=>setRows(Array.isArray(d)?d:[])); }, []);

  async function submit() {
    if (description.length < 10) return setMsg("Please provide enough detail.");
    const created = await api.createRecordsRequest({ requesterName: "Nina Patel", category, description });
    setMsg(`Submitted ${created.id}`);
  }

  return <div className="space-y-4"><PageHeader title="Records Requests" subtitle="Submit and track public records requests." /><Card><Input value={category} onChange={(e)=>setCategory(e.target.value)} /><textarea className="mt-3 min-h-24 w-full rounded-xl border border-slate-700 bg-slate-950 p-3" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Describe records sought" /><Button className="mt-3" onClick={submit}>Submit request</Button>{msg?<p className="mt-2 text-sm text-emerald-300">{msg}</p>:null}</Card><Card><ul className="text-sm space-y-2">{rows.map((r:any)=><li key={r.id}><Link className="text-sky-300" href={`/resident/records-requests/${r.id}`}>{r.id}</Link> · {r.status}</li>)}</ul></Card></div>;
}
