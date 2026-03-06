import { Controller, Get, Headers, UseGuards } from "@nestjs/common";
import { demoUsers, DemoRole } from "../../common/demo-data";
import { RbacGuard } from "../rbac/rbac.guard";

@Controller("me")
@UseGuards(RbacGuard)
export class MeController {
  @Get()
  getMe(@Headers("x-demo-role") role?: DemoRole) {
    return demoUsers[role || "staff"];
  }
}
