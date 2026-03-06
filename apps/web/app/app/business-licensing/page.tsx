import Link from "next/link";
import { Badge, PageHeader, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function BusinessLicensingPage() {
  const apps = await api.licenseApps("staff");
  return (
    <div className="space-y-4">
      <PageHeader title="Business Licensing" subtitle="License intake, compliance checks, and approvals." />
      <TableShell headers={["Application", "Business", "License Type", "Status", "Reviewer", "Expires"]} rows={(apps || []).map((a:any)=>[
        <Link key={a.id} href={`/app/business-licensing/${a.id}`} className="text-sky-300">{a.id}</Link>,
        a.businessName,
        a.licenseTypeId,
        <Badge key={`${a.id}-s`}>{a.status}</Badge>,
        a.reviewer,
        a.expiresOn || "—"
      ])} />
    </div>
  );
}
