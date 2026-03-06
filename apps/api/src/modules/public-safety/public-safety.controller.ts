import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { incidents } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createIncidentSchema = z.object({ type: z.string().min(2), officer: z.string().min(2), occurredAt: z.string().min(8), narrative: z.string().min(12) });

@Controller("public-safety")
@UseGuards(RbacGuard)
export class PublicSafetyController {
  @Get("incidents")
  @RequirePermissions(Permission.publicSafetyView)
  list() { return incidents; }

  @Get("incidents/:id")
  @RequirePermissions(Permission.publicSafetyView)
  detail(@Param("id") id: string) {
    const item = incidents.find((i) => i.id === id);
    return {
      ...item,
      reviewChain: ["Filed by officer", "Supervisor review pending"],
      redaction: { suggested: ["DOB", "phone number"] },
      ai: { summary: `Administrative incident summary for ${id}`, missingFields: ["Witness contact"] }
    };
  }

  @Post("incidents")
  @RequirePermissions(Permission.publicSafetyFileReport)
  create(@Body() body: unknown) {
    const payload = createIncidentSchema.parse(body);
    return { id: `INC-${900 + incidents.length}`, status: "submitted", supervisor: "Unassigned", ...payload };
  }

  @Patch("incidents/:id/status")
  @RequirePermissions(Permission.publicSafetyReview)
  update(@Param("id") id: string, @Body() body: { status: string; supervisor?: string }) {
    return { id, ...body, updated: true };
  }
}
