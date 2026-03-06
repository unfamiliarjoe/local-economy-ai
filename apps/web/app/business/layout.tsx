import type { ReactNode } from "react";
import { PortalShell } from "../../components/portal/portal-shell";

const nav = [
  { href: "/business/dashboard", label: "Dashboard" },
  { href: "/business/licenses", label: "Licenses" },
  { href: "/business/bids", label: "Bids" },
  { href: "/business/programs", label: "Programs" },
  { href: "/business/documents", label: "Documents" },
  { href: "/business/profile", label: "Profile" },
  { href: "/business/opportunities", label: "Opportunities" },
  { href: "/business/network", label: "Network" },
  { href: "/business/payments", label: "Payments" }
];

export default function Layout({ children }: { children: ReactNode }) {
  return <PortalShell title="Business & Vendor Portal" roleLabel="Vendor" nav={nav}>{children}</PortalShell>;
}
