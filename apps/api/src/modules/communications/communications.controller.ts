import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { communicationsNotices } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("communications")
@UseGuards(RbacGuard)
export class CommunicationsController {
  @Get() @RequirePermissions(Permission.communicationsView) list() { return communicationsNotices; }
  @Get(":id") @RequirePermissions(Permission.communicationsView) detail(@Param("id") id: string) { const n=communicationsNotices.find((x)=>x.id===id); return { ...n, history: ["Draft created", "Audience selected"] }; }
  @Post() @RequirePermissions(Permission.communicationsManage) create(@Body() body: { title: string; audience: string; channel: string }) { return { id: `COM-${80+communicationsNotices.length}`, status: "draft", ...body }; }
}
