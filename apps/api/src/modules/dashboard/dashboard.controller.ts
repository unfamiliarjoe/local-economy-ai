import { Controller, Get, UseGuards } from "@nestjs/common";
import { businessSummary, residentSummary, staffSummary } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("dashboard")
@UseGuards(RbacGuard)
export class DashboardController {
  @Get("staff-summary")
  @RequirePermissions(Permission.dashboardStaffRead)
  staff() {
    return staffSummary;
  }

  @Get("resident-summary")
  @RequirePermissions(Permission.dashboardResidentRead)
  resident() {
    return residentSummary;
  }

  @Get("business-summary")
  @RequirePermissions(Permission.dashboardBusinessRead)
  business() {
    return businessSummary;
  }
}
