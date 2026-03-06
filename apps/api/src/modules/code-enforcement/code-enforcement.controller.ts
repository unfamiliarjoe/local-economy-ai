import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { codeEnforcementCases } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createSchema = z.object({ category: z.string().min(2), address: z.string().min(4), complaint: z.string().min(8) });

@Controller("code-enforcement")
@UseGuards(RbacGuard)
export class CodeEnforcementController {
  @Get() @RequirePermissions(Permission.codeEnforcementView) list() { return codeEnforcementCases; }
  @Get(":id") @RequirePermissions(Permission.codeEnforcementView) detail(@Param("id") id: string) {
    const c = codeEnforcementCases.find((x) => x.id === id);
    return { ...c, timeline: ["Intake", "Assigned", "Inspection scheduling"], ai: { summary: `Case ${id} summary`, suggestedNotice: "Notice of violation draft" } };
  }
  @Post() @RequirePermissions(Permission.codeEnforcementManage) create(@Body() body: unknown) { return { id: `CE-${200 + codeEnforcementCases.length}`, status: "intake", ...createSchema.parse(body) }; }
  @Patch(":id/status") @RequirePermissions(Permission.codeEnforcementManage) update(@Param("id") id: string, @Body() body: { status: string }) { return { id, ...body, updated: true }; }
}
