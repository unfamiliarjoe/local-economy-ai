import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { licenseApplications, licenseTypes } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createLicenseSchema = z.object({
  licenseTypeId: z.string().min(2),
  businessName: z.string().min(2),
  address: z.string().min(4),
  ownerName: z.string().min(2)
});

@Controller("business-licensing")
@UseGuards(RbacGuard)
export class BusinessLicensingController {
  @Get("license-types")
  @RequirePermissions(Permission.businessLicensingView)
  types() {
    return licenseTypes;
  }

  @Get("applications")
  @RequirePermissions(Permission.businessLicensingView)
  applications() {
    return licenseApplications;
  }

  @Get("applications/:id")
  @RequirePermissions(Permission.businessLicensingView)
  detail(@Param("id") id: string) {
    const app = licenseApplications.find((l) => l.id === id);
    return {
      ...app,
      checklist: ["Tax registration", "Insurance COI", "Zoning compliance attestation"],
      timeline: ["Submitted", "Initial screening", "Reviewer assigned"],
      ai: { summary: `Business licensing summary for ${id}`, missingDocs: app?.status === "needs_info" ? ["Insurance COI"] : [] }
    };
  }

  @Post("applications")
  @RequirePermissions(Permission.businessLicensingCreate)
  create(@Body() body: unknown) {
    const payload = createLicenseSchema.parse(body);
    return { id: `LIC-APP-${1200 + licenseApplications.length}`, status: "submitted", reviewer: "Unassigned", ...payload };
  }

  @Patch("applications/:id/status")
  @RequirePermissions(Permission.businessLicensingReview)
  update(@Param("id") id: string, @Body() body: { status: string; reviewer?: string }) {
    return { id, ...body, updated: true };
  }
}
