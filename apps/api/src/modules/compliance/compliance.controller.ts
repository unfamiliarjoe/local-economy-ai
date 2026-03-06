import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { complianceLogs, executiveSummary, integrationJobs } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("compliance")
@UseGuards(RbacGuard)
export class ComplianceController {
  @Get()
  @RequirePermissions(Permission.complianceView)
  summary() {
    return {
      highRiskEvents: complianceLogs.filter((x) => x.risk === "high").length,
      mediumRiskEvents: complianceLogs.filter((x) => x.risk === "medium").length,
      aiUsageEvents: executiveSummary.metrics.find((m) => m.label === "Incidents pending review")?.value ?? 0,
      integrationFailures: integrationJobs.filter((j) => j.status === "failed").length,
      privilegedActionsToday: complianceLogs.length
    };
  }

  @Get("audit-logs")
  @RequirePermissions(Permission.complianceView)
  logs(@Query("risk") risk?: string, @Query("q") q?: string) {
    return complianceLogs.filter(
      (row) => (!risk || row.risk === risk) && (!q || row.action.toLowerCase().includes(q.toLowerCase()) || row.actor.toLowerCase().includes(q.toLowerCase()))
    );
  }

  @Get("exports")
  @RequirePermissions(Permission.complianceView)
  exports() {
    return [
      { id: "EXP-AUD-01", type: "audit-log-export", requestedBy: "Ava Martinez", status: "completed" },
      { id: "EXP-AUD-02", type: "ai-usage-export", requestedBy: "Security Auditor", status: "queued" }
    ];
  }
}
