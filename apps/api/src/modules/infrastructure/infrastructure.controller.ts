import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { infrastructureProjects, maintenanceRequests, workOrders } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("infrastructure")
@UseGuards(RbacGuard)
export class InfrastructureController {
  @Get("projects")
  @RequirePermissions(Permission.infrastructureView)
  projects(@Query("status") status?: string) {
    return infrastructureProjects.filter((p) => !status || p.status === status);
  }

  @Get("projects/:id")
  @RequirePermissions(Permission.infrastructureView)
  projectDetail(@Param("id") id: string) {
    const project = infrastructureProjects.find((p) => p.id === id);
    return {
      ...project,
      milestones: ["Design package finalized", "Procurement complete", "Phase 1 execution"],
      timeline: ["Project approved", "Contractor mobilized", "Field work underway"]
    };
  }

  @Get("work-orders")
  @RequirePermissions(Permission.infrastructureView)
  listWorkOrders(@Query("status") status?: string) {
    return workOrders.filter((w) => !status || w.status === status);
  }

  @Get("work-orders/:id")
  @RequirePermissions(Permission.infrastructureView)
  workOrderDetail(@Param("id") id: string) {
    const wo = workOrders.find((w) => w.id === id);
    return { ...wo, timeline: ["Created", "Assigned", "Awaiting crew dispatch"] };
  }

  @Post("work-orders")
  @RequirePermissions(Permission.infrastructureManage)
  createWorkOrder(@Body() body: { projectId: string; title: string; priority: string; dueDate: string }) {
    return { id: `WO-${500 + workOrders.length}`, status: "new", assignee: "Unassigned", ...body };
  }

  @Patch("work-orders/:id/status")
  @RequirePermissions(Permission.infrastructureManage)
  updateWorkOrder(@Param("id") id: string, @Body() body: { status: string; assignee?: string }) {
    return { id, ...body, updated: true };
  }

  @Get("maintenance-requests")
  @RequirePermissions(Permission.infrastructureView)
  listRequests() {
    return maintenanceRequests;
  }

  @Post("maintenance-requests")
  @RequirePermissions(Permission.infrastructureManage)
  createRequest(@Body() body: { title: string; location: string; priority: string }) {
    return { id: `MR-${1200 + maintenanceRequests.length}`, status: "reported", ...body };
  }
}
