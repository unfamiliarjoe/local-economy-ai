import { PageHeader, SecurityCallout, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const detail = await api.constituentDetail(params.id);

  return (
    <div className="space-y-4">
      <PageHeader title={detail.name || params.id} subtitle="Constituent relationship timeline across requests, records, and communications." />
      <SecurityCallout message="Constituent records may include sensitive personal data. Access and downloads are role-scoped and auditable." />
      <TableShell
        headers={["Type", "Record", "Status"]}
        rows={(detail.timeline || []).map((item: any) => [item.type, item.id, <StatusBadge key={item.id} value={item.status} />])}
      />
    </div>
  );
}
