import { Controller, Get, UseGuards } from "@nestjs/common";
import { clerkRegister } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("clerk")
@UseGuards(RbacGuard)
export class ClerkController {
  @Get() @RequirePermissions(Permission.clerkView) summary() { return { registerEntries: clerkRegister.length, publicationQueue: 2 }; }
  @Get("register") @RequirePermissions(Permission.clerkView) register() { return clerkRegister; }
}
