import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { serviceRequests } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createSchema = z.object({
  category: z.string().min(2),
  location: z.string().min(3),
  summary: z.string().min(8),
  residentName: z.string().min(2)
});

@Controller("service-requests")
@UseGuards(RbacGuard)
export class ServiceRequestsController {
  @Get()
  @RequirePermissions(Permission.serviceRequestsView)
  list(@Query("status") status?: string, @Query("resident") resident?: string) {
    return serviceRequests.filter((r) => (!status || r.status === status) && (!resident || r.residentName === resident));
  }

  @Get(":id")
  @RequirePermissions(Permission.serviceRequestsView)
  detail(@Param("id") id: string) {
    const item = serviceRequests.find((r) => r.id === id);
    return {
      ...item,
      timeline: ["Submitted", "Auto-categorized", "Queued for triage"],
      ai: { suggestedCategory: item?.category, possibleDuplicate: "311-88399" }
    };
  }

  @Post()
  @RequirePermissions(Permission.serviceRequestsCreate)
  create(@Body() body: unknown) {
    const payload = createSchema.parse(body);
    const priority = payload.category.toLowerCase().includes("pothole") ? "high" : "medium";
    return { id: `311-${89000 + serviceRequests.length}`, status: "submitted", assignee: "Unassigned", priority, ...payload };
  }

  @Patch(":id/status")
  @RequirePermissions(Permission.serviceRequestsAssign)
  update(@Param("id") id: string, @Body() body: { status: string; assignee?: string }) {
    return { id, ...body, updated: true };
  }
}
