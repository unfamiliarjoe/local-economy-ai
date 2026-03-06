import { Controller, Get, UseGuards } from "@nestjs/common";
import { workforceAssignments } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("workforce")
@UseGuards(RbacGuard)
export class WorkforceController {
  @Get()
  @RequirePermissions(Permission.workforceView)
  list() {
    return workforceAssignments;
  }

  @Get("assignments")
  @RequirePermissions(Permission.workforceView)
  assignments() {
    return workforceAssignments;
  }

  @Get("capacity")
  @RequirePermissions(Permission.workforceView)
  capacity() {
    return {
      availableStaff: 23,
      overallocated: workforceAssignments.filter((x) => x.overtimeRisk !== "low").length,
      queuedAssignments: workforceAssignments.reduce((acc, row) => acc + row.todayAssignments, 0)
    };
  }
}
