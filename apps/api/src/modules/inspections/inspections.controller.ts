import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { inspections } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("inspections")
@UseGuards(RbacGuard)
export class InspectionsController {
  @Get() @RequirePermissions(Permission.inspectionsView) list(@Query("relatedType") relatedType?: string) { return inspections.filter((i)=>!relatedType||i.relatedType===relatedType); }
  @Get(":id") @RequirePermissions(Permission.inspectionsView) detail(@Param("id") id: string) { const i=inspections.find((x)=>x.id===id); return { ...i, findings: "No critical deficiencies noted.", timeline: ["Scheduled", "Inspector assigned", "On-site visit"] }; }
  @Post() @RequirePermissions(Permission.inspectionsManage) create(@Body() body: { type: string; inspector: string; relatedType: string; relatedId: string; scheduledFor: string }) { return { id: `INSP-${500+inspections.length}`, status: "scheduled", ...body }; }
  @Patch(":id/status") @RequirePermissions(Permission.inspectionsManage) update(@Param("id") id: string, @Body() body: { status: string }) { return { id, ...body, updated: true }; }
}
