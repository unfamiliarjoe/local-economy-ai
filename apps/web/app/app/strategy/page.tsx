import Link from "next/link";
import { PageHeader, SecurityCallout, StartHereCard, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.strategy();

  return (
    <div className="space-y-4">
      <PageHeader title="Strategy Cockpit" subtitle="Strategic initiatives, ownership, and delivery confidence for leadership operations." />
      <SecurityCallout message="Strategic status informs executive and board decisions. Maintain evidence-backed updates and track blockers transparently." />
      <TableShell
        headers={["Initiative", "Owner", "Status", "Progress", "Open"]}
        rows={(rows || []).map((row: any) => [
          row.title,
          row.owner,
          <StatusBadge key={row.id} value={row.status} />,
          `${row.progress}%`,
          <Link key={`${row.id}-l`} className="text-sky-300" href={`/app/strategy/${row.id}`}>
            Detail
          </Link>
        ])}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <StartHereCard
          title="Prepare executive pre-read"
          description="Use assistive AI drafts to create digestible weekly strategy updates before city manager reviews."
          href="/app/executive"
          cta="Open executive center"
        />
        <StartHereCard
          title="Align with public reporting"
          description="Link initiative progress to public-facing transparency pages for coherent accountability narratives."
          href="/transparency/projects"
          cta="Open transparency projects"
        />
      </div>
    </div>
  );
}
