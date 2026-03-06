import { Controller, Get, UseGuards } from "@nestjs/common";
import { executiveSummary } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("executive")
@UseGuards(RbacGuard)
export class ExecutiveController {
  @Get("summary")
  @RequirePermissions(Permission.executiveView)
  summary() {
    return executiveSummary;
  }
}
