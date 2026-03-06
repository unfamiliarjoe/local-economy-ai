import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { permitInspections, permits, permitTypes } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createPermitSchema = z.object({
  type: z.string().min(2),
  applicantName: z.string().min(2),
  address: z.string().min(4),
  description: z.string().min(8)
});

@Controller()
@UseGuards(RbacGuard)
export class PermitsController {
  @Get("permit-types")
  @RequirePermissions(Permission.permitsView)
  listTypes() {
    return permitTypes;
  }

  @Get("permits")
  @RequirePermissions(Permission.permitsView)
  list(@Query("stage") stage?: string, @Query("q") q?: string) {
    return permits.filter((p) => (!stage || p.stage === stage) && (!q || p.id.includes(q) || p.applicantName.toLowerCase().includes(q.toLowerCase())));
  }

  @Get("permits/:id")
  @RequirePermissions(Permission.permitsView)
  detail(@Param("id") id: string) {
    const permit = permits.find((p) => p.id === id);
    return {
      ...permit,
      timeline: ["Application submitted", "Initial review completed", "Awaiting final document"],
      ai: {
        summary: `AI assist: ${id} likely complete pending one attachment.`,
        missingDocuments: permit && permit.receivedDocs < permit.requiredDocs ? ["Contractor insurance certificate"] : []
      }
    };
  }

  @Post("permits")
  @RequirePermissions(Permission.permitsCreate)
  create(@Body() body: unknown) {
    const payload = createPermitSchema.parse(body);
    return { id: `PRM-2026-${100 + permits.length}`, stage: "submitted", ...payload };
  }

  @Patch("permits/:id/stage")
  @RequirePermissions(Permission.permitsReview)
  stage(@Param("id") id: string, @Body() body: { stage: string }) {
    return { id, stage: body.stage, updated: true };
  }

  @Patch("permits/:id/assign")
  @RequirePermissions(Permission.permitsAssign)
  assign(@Param("id") id: string, @Body() body: { reviewer: string }) {
    return { id, reviewer: body.reviewer, updated: true };
  }

  @Get("inspections")
  @RequirePermissions(Permission.permitsView)
  inspections(@Query("permitId") permitId?: string) {
    return permitInspections.filter((i) => !permitId || i.permitId === permitId);
  }

  @Post("inspections")
  @RequirePermissions(Permission.inspectionsSchedule)
  schedule(@Body() body: { permitId: string; scheduledFor: string; inspector: string }) {
    return { id: `INSP-${3000 + permitInspections.length}`, status: "scheduled", ...body };
  }
}
