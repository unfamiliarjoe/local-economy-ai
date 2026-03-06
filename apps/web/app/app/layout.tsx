import type { ReactNode } from "react";
import { PortalShell, type PortalNavItem } from "../../components/portal/portal-shell";

const nav: PortalNavItem[] = [
  { label: "Start", section: true },
  { href: "/app", label: "Dashboard" },
  { href: "/app/getting-started", label: "Getting Started" },
  { href: "/app/executive", label: "Executive" },

  { label: "Strategy & Public Value", section: true },
  { href: "/app/strategy", label: "Strategy" },
  { href: "/app/map", label: "Map Command" },
  { href: "/app/reports", label: "Reports" },

  { label: "Operations", section: true },
  { href: "/app/permitting", label: "Permitting" },
  { href: "/app/zoning", label: "Zoning" },
  { href: "/app/infrastructure", label: "Infrastructure" },
  { href: "/app/service-requests", label: "311 Requests" },
  { href: "/app/code-enforcement", label: "Code Enforcement" },
  { href: "/app/inspections", label: "Inspections" },
  { href: "/app/workforce", label: "Workforce" },
  { href: "/app/utilities", label: "Utilities" },
  { href: "/app/assets", label: "Assets" },
  { href: "/app/fleet", label: "Fleet" },
  { href: "/app/facilities", label: "Facilities" },
  { href: "/app/parks-recreation", label: "Parks & Rec" },

  { label: "Finance & Economy", section: true },
  { href: "/app/finance", label: "Finance" },
  { href: "/app/finance/budget", label: "Budget Chain" },
  { href: "/app/contracts", label: "Contracts" },
  { href: "/app/vendor-performance", label: "Vendor Performance" },
  { href: "/app/funding", label: "Funding" },
  { href: "/app/procurement", label: "Procurement" },
  { href: "/app/grants", label: "Grants" },
  { href: "/app/business-licensing", label: "Business Licensing" },
  { href: "/app/economic-development", label: "Economic Development" },
  { href: "/app/marketplace", label: "Marketplace" },
  { href: "/app/payments", label: "Payments" },
  { href: "/app/disbursements", label: "Disbursements" },

  { label: "Governance & Trust", section: true },
  { href: "/app/records-requests", label: "Records Requests" },
  { href: "/app/legislative", label: "Legislative" },
  { href: "/app/boards", label: "Boards" },
  { href: "/app/courts", label: "Courts" },
  { href: "/app/public-safety", label: "Public Safety" },
  { href: "/app/communications", label: "Communications" },
  { href: "/app/emergency-management", label: "Emergency Mgmt" },
  { href: "/app/capital-planning", label: "Capital Planning" },
  { href: "/app/clerk", label: "Clerk" },
  { href: "/app/compliance", label: "Compliance" },

  { label: "Implementation & Admin", section: true },
  { href: "/app/onboarding", label: "Onboarding" },
  { href: "/app/regional", label: "Regional" },
  { href: "/app/integrations", label: "Integrations" },
  { href: "/app/imports", label: "Imports" },
  { href: "/app/exports", label: "Exports" },
  { href: "/app/documents", label: "Documents" },
  { href: "/app/notifications", label: "Notifications" },
  { href: "/app/tasks", label: "Tasks" },
  { href: "/app/constituents", label: "Constituents" },
  { href: "/app/settings", label: "Settings" },
  { href: "/app/settings/security", label: "Security" },
  { href: "/app/settings/access", label: "Access" },
  { href: "/app/settings/integrations", label: "Integration Policies" },
  { href: "/app/settings/workflows", label: "Workflows" }
];

export default function Layout({ children }: { children: ReactNode }) {
  return <PortalShell title="Staff Portal" roleLabel="Municipal Staff" nav={nav}>{children}</PortalShell>;
}
