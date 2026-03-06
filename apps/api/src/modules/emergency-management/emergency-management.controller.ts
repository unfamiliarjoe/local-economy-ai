import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { emergencyEvents } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("emergency-management")
@UseGuards(RbacGuard)
export class EmergencyManagementController {
  @Get() @RequirePermissions(Permission.emergencyView) list() { return emergencyEvents; }
  @Get(":id") @RequirePermissions(Permission.emergencyView) detail(@Param("id") id: string) { const e=emergencyEvents.find((x)=>x.id===id); return { ...e, departments: ["Fire", "Public Works", "Communications"], timeline: ["Activated", "Resource coordination", "Status update"] }; }
}
