import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { courtSchedules } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createScheduleSchema = z.object({ caseNumber: z.string().min(3), courtroom: z.string().min(2), dateTime: z.string().min(8), clerk: z.string().min(2) });

@Controller("courts")
@UseGuards(RbacGuard)
export class CourtsController {
  @Get("schedules")
  @RequirePermissions(Permission.courtsView)
  list() { return courtSchedules; }

  @Get("schedules/:id")
  @RequirePermissions(Permission.courtsView)
  detail(@Param("id") id: string) {
    const item = courtSchedules.find((c) => c.id === id);
    return {
      ...item,
      conflicts: item?.status === "rescheduled" ? ["Courtroom overlap risk detected"] : [],
      notices: ["Reminder sent to parties", "Clerk updated courtroom assignment"],
      ai: { conflictSummary: "Low conflict risk for current slot", dailyDigest: "Afternoon docket is over capacity by 2 matters." }
    };
  }

  @Post("schedules")
  @RequirePermissions(Permission.courtsManage)
  create(@Body() body: unknown) {
    const payload = createScheduleSchema.parse(body);
    return { id: `CRT-${1400 + courtSchedules.length}`, status: "scheduled", ...payload };
  }

  @Patch("schedules/:id/status")
  @RequirePermissions(Permission.courtsManage)
  update(@Param("id") id: string, @Body() body: { status: string }) {
    return { id, ...body, updated: true };
  }
}
