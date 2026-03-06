import { Controller, Get } from "@nestjs/common";

@Controller("settings")
export class SettingsController {
  @Get("general")
  general() {
    return {
      tenantName: "City of Brookhaven",
      timezone: "America/New_York",
      locale: "en-US",
      contactEmail: "cityops@brookhaven.gov",
      openDataPortalEnabled: true
    };
  }

  @Get("departments")
  departments() {
    return [
      { id: "DEPT-OPS", name: "Public Works", leader: "Maya Thompson", active: true },
      { id: "DEPT-PLN", name: "Planning & Development", leader: "Jordan Lee", active: true },
      { id: "DEPT-CLK", name: "Clerk & Records", leader: "Alex Rivera", active: true }
    ];
  }

  @Get("roles")
  roles() {
    return [
      { id: "municipality_admin", scope: "tenant", privileged: true, users: 3 },
      { id: "staff", scope: "tenant", privileged: false, users: 42 },
      { id: "inspector", scope: "department", privileged: false, users: 8 }
    ];
  }

  @Get("templates")
  templates() {
    return [
      { id: "TPL-NOTICE-CODE", type: "notice", module: "code-enforcement", status: "active" },
      { id: "TPL-PACKET-BOARD", type: "meeting-packet", module: "boards", status: "active" },
      { id: "TPL-ALERT-WEATHER", type: "broadcast", module: "communications", status: "draft" }
    ];
  }

  @Get("branding")
  branding() {
    return {
      tenant: "city-of-brookhaven",
      displayName: "City of Brookhaven",
      accentColor: "#38bdf8",
      logoUrl: "/branding/brookhaven-seal.svg"
    };
  }

  @Get("security")
  security() {
    return {
      ssoEnabled: false,
      mfaPolicy: "optional",
      sessionTimeoutMinutes: 60,
      dataRetentionPolicy: "municipal-default",
      privilegedActionConfirmation: true
    };
  }

  @Get("access")
  access() {
    return {
      roleModel: "rbac",
      privilegedRoles: ["municipality_admin", "platform_admin"],
      impersonationRequiresReason: true,
      externalSharingPolicy: "restricted"
    };
  }

  @Get("integrations")
  integrations() {
    return {
      configured: ["email-provider", "gis-connector"],
      pending: ["sso-provider", "erp-finance"],
      importExportGuardrails: "enabled"
    };
  }
}
