import { Controller, Get, UseGuards } from "@nestjs/common";
import { tasks } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("tasks")
@UseGuards(RbacGuard)
@RequirePermissions(Permission.tasksRead)
export class TasksController {
  @Get()
  list() {
    return tasks;
  }
}
