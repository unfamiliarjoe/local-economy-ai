import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { utilityCases } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("utilities")
@UseGuards(RbacGuard)
export class UtilitiesController {
  @Get("cases") @RequirePermissions(Permission.utilitiesView) list() { return utilityCases; }
  @Get("cases/:id") @RequirePermissions(Permission.utilitiesView) detail(@Param("id") id: string) { const c=utilityCases.find((u)=>u.id===id); return { ...c, notices: ["Account update sent"], timeline: ["Opened", "Agent assigned", "Resolution pending"] }; }
  @Post("cases") @RequirePermissions(Permission.utilitiesManage) create(@Body() body: { account: string; type: string; details: string }) { return { id: `UTL-${100+utilityCases.length}`, status: "under_review", owner: "Utility Desk", ...body }; }
}
