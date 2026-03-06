import Link from "next/link";
import { Card, InsightCard, PageHeader, SecurityCallout, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

function linkedRecordHref(linkedRecord?: string) {
  if (!linkedRecord) return "/app/documents";
  if (linkedRecord.startsWith("PRM-")) return `/app/permitting/${linkedRecord}`;
  if (linkedRecord.startsWith("RR-")) return `/app/records-requests/${linkedRecord}`;
  if (linkedRecord.startsWith("CE-")) return `/app/code-enforcement/${linkedRecord}`;
  return "/app/documents";
}

export default async function DocumentDetail({ params }: { params: { id: string } }) {
  const doc = await api.documentDetail(params.id, "staff");

  return (
    <div className="space-y-4">
      <PageHeader title={doc.name || params.id} subtitle="Metadata, linked records, versions, governed AI insights, and audit context." />
      <SecurityCallout message="Document access is role-scoped. Downloads and sensitive views should be tracked in audit logs." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="space-y-2 md:col-span-2">
          <p className="text-sm">Linked Record: <Link className="text-sky-300" href={linkedRecordHref(doc.linkedRecord)}>{doc.linkedRecord || "Unlinked"}</Link></p>
          <p className="text-sm">Retention: {doc.metadata?.retentionClass || "municipal-default"}</p>
          <p className="text-sm">Security Class: <StatusBadge value={doc.metadata?.securityClass || "internal"} /></p>
          <p className="text-sm">Versions: {(doc.versions || []).join(", ") || "N/A"}</p>
        </Card>
        <InsightCard
          title="AI Summary (Assistive)"
          body={`${doc.ai?.aiSummary || "No AI summary available."} Confidence: ${doc.ai?.confidence || "n/a"}. AI output is assistive-only and requires human review.`}
        />
      </div>
      <TableShell
        headers={["Audit Event", "Actor", "Detail"]}
        rows={[
          ["Viewed", "Maya Thompson", "Opened from records request case"],
          ["Download", "Ava Martinez", "PDF export generated for legal review"],
          ["AI summarize", "LEAI Copilot", "Assistive digest generated with policy mode: assistive-only"]
        ]}
      />
    </div>
  );
}
