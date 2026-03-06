import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { reportPacks } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("reports")
@UseGuards(RbacGuard)
export class ReportsController {
  @Get()
  @RequirePermissions(Permission.reportsView)
  list() {
    return reportPacks;
  }

  @Get(":id")
  @RequirePermissions(Permission.reportsView)
  detail(@Param("id") id: string) {
    const pack = reportPacks.find((x) => x.id === id);
    return {
      ...pack,
      contents: ["summary.pdf", "source-metrics.csv", "audit-trail.json"],
      generatedAt: "2026-03-06T12:30:00Z"
    };
  }
}
