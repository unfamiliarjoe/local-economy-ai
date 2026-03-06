import { Controller, Get, Patch, Param, UseGuards } from "@nestjs/common";
import { notifications } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("notifications")
@UseGuards(RbacGuard)
@RequirePermissions(Permission.notificationsRead)
export class NotificationsController {
  @Get()
  list() {
    return notifications;
  }

  @Patch(":id/read")
  read(@Param("id") id: string) {
    return { id, updated: true };
  }
}
