import Link from "next/link";
import { Card, PageHeader, SecurityCallout } from "@leai/ui";

const links = [
  { key: "general", label: "General", desc: "Tenant profile, timezone, contact channels, and public metadata." },
  { key: "departments", label: "Departments", desc: "Department owners, enabled modules, and operational scopes." },
  { key: "roles", label: "Access Roles", desc: "Privilege boundaries, high-risk roles, and assignment visibility." },
  { key: "templates", label: "Templates", desc: "Notice, packet, and communication templates with governance controls." },
  { key: "branding", label: "Branding", desc: "Seal, accent palette, and public portal visual controls." },
  { key: "integrations", label: "Integration Settings", desc: "Connector health, migration guardrails, and sync policies." },
  { key: "security", label: "Security Policies", desc: "Session, MFA placeholders, and privileged action safeguards." },
  { key: "access", label: "Access Controls", desc: "RBAC model, impersonation policy, and external sharing constraints." }
];

export default function Page() {
  return (
    <div className="space-y-4">
      <PageHeader title="Tenant Settings" subtitle="Administrative control center for configuration, governance, and trust policies." />
      <SecurityCallout message="Changes in this area can impact permissions, compliance evidence, and resident-facing experiences." />
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((item) => (
          <Card key={item.key}>
            <p className="text-sm font-semibold text-slate-100">{item.label}</p>
            <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
            <Link className="mt-3 inline-block text-sm text-sky-300" href={`/app/settings/${item.key}`}>
              Open {item.label}
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
