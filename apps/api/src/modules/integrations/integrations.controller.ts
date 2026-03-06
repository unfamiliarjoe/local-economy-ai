import { Controller, Get, UseGuards } from "@nestjs/common";
import { integrationJobs } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller()
@UseGuards(RbacGuard)
export class IntegrationsController {
  @Get("integrations") @RequirePermissions(Permission.integrationsManage) integrations() { return [{ id: "GIS-connector", status: "configured" }, { id: "email-provider", status: "connected" }]; }
  @Get("imports") @RequirePermissions(Permission.integrationsManage) imports() { return integrationJobs.filter((j)=>j.type.includes("Import")); }
  @Get("exports") @RequirePermissions(Permission.integrationsManage) exports() { return integrationJobs.filter((j)=>j.type.includes("Export")); }
}
