import { Controller, Get, UseGuards } from "@nestjs/common";
import { fundingGaps, fundingOpportunities } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("funding")
@UseGuards(RbacGuard)
export class FundingController {
  @Get()
  @RequirePermissions(Permission.fundingView)
  summary() {
    return {
      opportunities: fundingOpportunities.length,
      highFit: fundingOpportunities.filter((x) => x.fit === "high").length,
      unresolvedGaps: fundingGaps.filter((x) => x.requested > x.secured).length
    };
  }

  @Get("opportunities")
  @RequirePermissions(Permission.fundingView)
  opportunities() {
    return fundingOpportunities;
  }

  @Get("calendar")
  @RequirePermissions(Permission.fundingView)
  calendar() {
    return fundingOpportunities.map((x) => ({ id: x.id, title: x.title, date: x.deadline, type: "deadline" }));
  }

  @Get("gaps")
  @RequirePermissions(Permission.fundingView)
  gaps() {
    return fundingGaps;
  }
}
