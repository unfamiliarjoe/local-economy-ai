import type { ReactNode } from "react";
import { PortalShell } from "../../components/portal/portal-shell";

const nav = [
  { href: "/resident/dashboard", label: "Dashboard" },
  { href: "/resident/applications", label: "Applications" },
  { href: "/resident/documents", label: "Documents" },
  { href: "/resident/notices", label: "Notices" },
  { href: "/resident/service-requests", label: "311 Requests" },
  { href: "/resident/records-requests", label: "Records Requests" },
  { href: "/resident/profile", label: "Profile" },
  { href: "/resident/payments", label: "Payments" }
];

export default function Layout({ children }: { children: ReactNode }) {
  return <PortalShell title="Resident Portal" roleLabel="Resident" nav={nav}>{children}</PortalShell>;
}
