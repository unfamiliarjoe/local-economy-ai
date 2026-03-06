import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { constituents, recordsRequests, serviceRequests } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("constituents")
@UseGuards(RbacGuard)
export class ConstituentsController {
  @Get()
  @RequirePermissions(Permission.constituentsView)
  list() {
    return constituents;
  }

  @Get(":id")
  @RequirePermissions(Permission.constituentsView)
  detail(@Param("id") id: string) {
    const c = constituents.find((x) => x.id === id);
    return {
      ...c,
      timeline: [
        ...serviceRequests.filter((x) => x.residentName === c?.name).map((x) => ({ type: "311", id: x.id, status: x.status })),
        ...recordsRequests.filter((x) => x.requesterName === c?.name).map((x) => ({ type: "records", id: x.id, status: x.status }))
      ]
    };
  }
}
