import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { regionalInitiatives } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("regional")
@UseGuards(RbacGuard)
export class RegionalController {
  @Get()
  @RequirePermissions(Permission.regionalView)
  list() {
    return regionalInitiatives;
  }

  @Get(":id")
  @RequirePermissions(Permission.regionalView)
  detail(@Param("id") id: string) {
    const initiative = regionalInitiatives.find((x) => x.id === id);
    return { ...initiative, coordinationNotes: ["Quarterly partner check-in", "Shared KPI baseline alignment"] };
  }
}
