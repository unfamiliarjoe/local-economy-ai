import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { zoningCases } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createZoningSchema = z.object({
  requestType: z.string().min(2),
  applicant: z.string().min(2),
  parcel: z.string().min(3),
  summary: z.string().min(10)
});

@Controller("zoning-cases")
@UseGuards(RbacGuard)
export class ZoningController {
  @Get()
  @RequirePermissions(Permission.zoningView)
  list(@Query("status") status?: string) {
    return zoningCases.filter((c) => !status || c.status === status);
  }

  @Get(":id")
  @RequirePermissions(Permission.zoningView)
  detail(@Param("id") id: string) {
    const item = zoningCases.find((c) => c.id === id);
    return {
      ...item,
      staffMemo: "Preliminary planning analysis indicates moderate consistency with adjacent mixed-use pattern.",
      recommendation: item?.status === "under_review" ? "pending" : "recommend_approve_with_conditions",
      timeline: ["Intake complete", "Planner assignment", "Code review started"],
      ai: { summary: `AI assist: ${id} aligns with two prior variance outcomes.`, similarCases: ["ZNG-2025-032", "ZNG-2024-119"] }
    };
  }

  @Post()
  @RequirePermissions(Permission.zoningCreate)
  create(@Body() body: unknown) {
    const payload = createZoningSchema.parse(body);
    return { id: `ZNG-2026-${30 + zoningCases.length}`, status: "intake", ...payload };
  }

  @Patch(":id/status")
  @RequirePermissions(Permission.zoningReview)
  status(@Param("id") id: string, @Body() body: { status: string; planner?: string }) {
    return { id, ...body, updated: true };
  }
}
