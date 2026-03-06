import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { grantApplications, grantAwards, grantPrograms } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createGrantAppSchema = z.object({
  programId: z.string().min(2),
  applicantName: z.string().min(2),
  requestedAmount: z.number().positive(),
  narrative: z.string().min(20)
});

@Controller("grants")
@UseGuards(RbacGuard)
export class GrantsController {
  @Get("programs")
  @RequirePermissions(Permission.grantsView)
  programs() {
    return grantPrograms;
  }

  @Get("applications")
  @RequirePermissions(Permission.grantsView)
  applications() {
    return grantApplications;
  }

  @Get("applications/:id")
  @RequirePermissions(Permission.grantsView)
  detail(@Param("id") id: string) {
    const app = grantApplications.find((g) => g.id === id);
    return {
      ...app,
      awards: grantAwards.filter((a) => a.applicationId === id),
      timeline: ["Submitted", "Reviewer assigned", "Panel scoring"],
      ai: { summary: `Application ${id} has strong corridor foot-traffic impact narrative.`, missingMaterials: [] }
    };
  }

  @Post("applications")
  @RequirePermissions(Permission.grantsCreate)
  create(@Body() body: unknown) {
    const payload = createGrantAppSchema.parse(body);
    return { id: `GRT-APP-${800 + grantApplications.length}`, status: "submitted", reviewer: "Unassigned", ...payload };
  }

  @Patch("applications/:id/status")
  @RequirePermissions(Permission.grantsReview)
  update(@Param("id") id: string, @Body() body: { status: string; reviewer?: string }) {
    return { id, ...body, updated: true };
  }
}
