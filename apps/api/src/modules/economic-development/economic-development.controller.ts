import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { businessAssistanceCases, developmentProjects, incentivePrograms } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("economic-development")
@UseGuards(RbacGuard)
export class EconomicDevelopmentController {
  @Get("projects")
  @RequirePermissions(Permission.economicDevelopmentView)
  projects(@Query("status") status?: string) {
    return developmentProjects.filter((p) => !status || p.status === status);
  }

  @Get("projects/:id")
  @RequirePermissions(Permission.economicDevelopmentView)
  projectDetail(@Param("id") id: string) {
    const item = developmentProjects.find((p) => p.id === id);
    return {
      ...item,
      timeline: ["Prospect qualified", "Interdepartmental review", "Developer engagement active"],
      aiDigest: "Potential high-impact corridor anchor with workforce spillover potential."
    };
  }

  @Get("cases")
  @RequirePermissions(Permission.economicDevelopmentView)
  cases() {
    return businessAssistanceCases;
  }

  @Get("programs")
  @RequirePermissions(Permission.economicDevelopmentView)
  programs() {
    return incentivePrograms;
  }
}
