import Link from "next/link";
import { Card, PageHeader } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() { const s=await api.clerkSummary(); return <div className="space-y-4"><PageHeader title="Clerk / Recorder" subtitle="Filings, publication, and public register operations." /><Card><p className="text-sm">Register entries: {s.registerEntries||0}</p><p className="text-sm">Publication queue: {s.publicationQueue||0}</p><Link className="text-sky-300 text-sm" href="/app/clerk/register">Open register</Link></Card></div>; }
