import { Controller, Get, UseGuards } from "@nestjs/common";
import { boardGroups } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("boards")
@UseGuards(RbacGuard)
export class BoardsController {
  @Get() @RequirePermissions(Permission.legislativeView) list() { return boardGroups; }
}
