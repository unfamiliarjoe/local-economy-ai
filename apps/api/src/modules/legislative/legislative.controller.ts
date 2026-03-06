import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { agendaItems, meetings } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createMeetingSchema = z.object({ title: z.string().min(3), committee: z.string().min(2), date: z.string().min(8) });

@Controller("legislative")
@UseGuards(RbacGuard)
export class LegislativeController {
  @Get("meetings")
  @RequirePermissions(Permission.legislativeView)
  listMeetings() { return meetings; }

  @Get("meetings/:id")
  @RequirePermissions(Permission.legislativeView)
  detail(@Param("id") id: string) {
    const meeting = meetings.find((m) => m.id === id);
    return {
      ...meeting,
      agendaItems: agendaItems.filter((a) => a.meetingId === id),
      packet: { status: "in_progress", documents: ["packet cover", "staff memo", "ordinance draft"] },
      minutes: { status: "draft" },
      ai: { packetSummary: "Two high-impact items; procurement award and zoning variance hearing.", preReadDigest: "Recommend brief on procurement risk and zoning precedent." }
    };
  }

  @Post("meetings")
  @RequirePermissions(Permission.legislativeManage)
  createMeeting(@Body() body: unknown) {
    const payload = createMeetingSchema.parse(body);
    return { id: `MTG-${400 + meetings.length}`, status: "draft", ...payload };
  }

  @Patch("meetings/:id/status")
  @RequirePermissions(Permission.legislativeManage)
  updateMeeting(@Param("id") id: string, @Body() body: { status: string }) {
    return { id, ...body, updated: true };
  }
}
