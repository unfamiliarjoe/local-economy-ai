import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { recordsRequests } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const intakeSchema = z.object({ requesterName: z.string().min(2), category: z.string().min(3), description: z.string().min(10) });

@Controller("records-requests")
@UseGuards(RbacGuard)
export class RecordsRequestsController {
  @Get()
  @RequirePermissions(Permission.recordsRequestsView)
  list(@Query("status") status?: string) {
    return recordsRequests.filter((r) => !status || r.status === status);
  }

  @Get(":id")
  @RequirePermissions(Permission.recordsRequestsView)
  detail(@Param("id") id: string) {
    const req = recordsRequests.find((r) => r.id === id);
    return {
      ...req,
      timeline: ["Submitted", "Acknowledged", "Record search initiated"],
      release: { packageReady: false, redactionBatch: "RDX-19" },
      ai: { summary: `FOIA summary for ${id}`, likelyDocuments: ["incident report", "dispatch log"], redactionHints: ["phone numbers", "home addresses"] }
    };
  }

  @Post()
  @RequirePermissions(Permission.recordsRequestsCreate)
  create(@Body() body: unknown) {
    const payload = intakeSchema.parse(body);
    return { id: `RR-${9300 + recordsRequests.length}`, status: "submitted", reviewer: "Unassigned", dueDate: "2026-03-30", ...payload };
  }

  @Patch(":id/status")
  @RequirePermissions(Permission.recordsRequestsReview)
  update(@Param("id") id: string, @Body() body: { status: string; reviewer?: string }) {
    return { id, ...body, updated: true };
  }
}
