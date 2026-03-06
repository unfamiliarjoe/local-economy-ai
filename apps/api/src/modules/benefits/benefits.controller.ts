import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { benefitsApplications, benefitsPrograms } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createApplicationSchema = z.object({
  programId: z.string().min(2),
  residentName: z.string().min(2),
  householdSize: z.number().int().positive(),
  requestedSupport: z.string().min(5)
});

@Controller("benefits")
@UseGuards(RbacGuard)
export class BenefitsController {
  @Get("programs")
  @RequirePermissions(Permission.benefitsView)
  programs() {
    return benefitsPrograms;
  }

  @Get("applications")
  @RequirePermissions(Permission.benefitsView)
  applications(@Query("status") status?: string) {
    return benefitsApplications.filter((a) => !status || a.status === status);
  }

  @Get("applications/:id")
  @RequirePermissions(Permission.benefitsView)
  detail(@Param("id") id: string) {
    const app = benefitsApplications.find((a) => a.id === id);
    return {
      ...app,
      checklist: ["Income verification", "Residency proof", "Household affidavit"],
      timeline: ["Submitted", "Assigned to caseworker", "Review in progress"],
      ai: {
        summary: `Assistive summary for ${id}`,
        missingDocuments: app && app.missingDocs > 0 ? ["Recent utility bill"] : [],
        eligibilityGuidance: "Likely eligible pending document completion. Human determination required."
      }
    };
  }

  @Post("applications")
  @RequirePermissions(Permission.benefitsCreate)
  create(@Body() body: unknown) {
    const payload = createApplicationSchema.parse(body);
    return { id: `BEN-APP-${3000 + benefitsApplications.length}`, status: "submitted", caseworker: "Unassigned", ...payload };
  }

  @Patch("applications/:id/status")
  @RequirePermissions(Permission.benefitsReview)
  updateStatus(@Param("id") id: string, @Body() body: { status: string; caseworker?: string }) {
    return { id, ...body, updated: true };
  }
}
