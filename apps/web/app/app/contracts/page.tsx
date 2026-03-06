import Link from "next/link";
import { PageHeader, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const rows = await api.contracts();

  return (
    <div className="space-y-4">
      <PageHeader title="Contracts" subtitle="Procurement award to execution contract chain with lifecycle visibility." />
      <TableShell
        headers={["Contract", "Vendor", "Status", "Value", "Details"]}
        rows={(rows || []).map((row: any) => [
          row.title,
          row.vendorId,
          <StatusBadge key={row.id} value={row.status} />,
          `$${row.value?.toLocaleString?.() ?? row.value}`,
          <Link key={`${row.id}-l`} className="text-sky-300" href={`/app/vendor-performance/${row.vendorId}`}>
            Vendor profile
          </Link>
        ])}
      />
    </div>
  );
}
