import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { capitalProjects } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("capital-planning")
@UseGuards(RbacGuard)
export class CapitalPlanningController {
  @Get() @RequirePermissions(Permission.capitalPlanningView) list() { return capitalProjects; }
  @Get(":id") @RequirePermissions(Permission.capitalPlanningView) detail(@Param("id") id: string) { const p=capitalProjects.find((x)=>x.id===id); return { ...p, ranking: "Tier 1", dependencies: ["Utility upgrade"], timeline: ["Scoping", "Funding", "Execution"] }; }
}
