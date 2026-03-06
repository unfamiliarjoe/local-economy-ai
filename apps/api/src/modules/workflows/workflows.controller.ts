import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { workflows } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createWorkflowSchema = z.object({ name: z.string().min(3), module: z.string().min(2), stages: z.array(z.string()).min(2) });

@Controller("workflows")
@UseGuards(RbacGuard)
@RequirePermissions(Permission.workflowsManage)
export class WorkflowsController {
  @Get()
  list() { return workflows; }

  @Get(":id")
  detail(@Param("id") id: string) {
    const wf = workflows.find((w) => w.id === id);
    return {
      ...wf,
      transitions: ["submitted -> under_review", "under_review -> approved"],
      sla: "5 business days",
      aiPromptConfig: "default-module-copilot-v1"
    };
  }

  @Post()
  create(@Body() body: unknown) {
    const payload = createWorkflowSchema.parse(body);
    return { id: `WF-${workflows.length + 10}`, ...payload };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: { stages?: string[] }) {
    return { id, ...body, updated: true };
  }
}
