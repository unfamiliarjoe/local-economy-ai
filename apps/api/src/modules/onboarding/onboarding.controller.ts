import { Controller, Get, UseGuards } from "@nestjs/common";
import { onboardingChecklist } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("onboarding")
@UseGuards(RbacGuard)
export class OnboardingController {
  @Get()
  @RequirePermissions(Permission.onboardingManage)
  summary() {
    return {
      completed: onboardingChecklist.filter((x) => x.status === "completed").length,
      inProgress: onboardingChecklist.filter((x) => x.status === "in_progress").length,
      pending: onboardingChecklist.filter((x) => x.status === "pending").length
    };
  }

  @Get("checklist")
  @RequirePermissions(Permission.onboardingManage)
  checklist() {
    return onboardingChecklist;
  }

  @Get("imports")
  @RequirePermissions(Permission.onboardingManage)
  imports() {
    return [
      { id: "ONB-IMP-1", source: "legacy-permits.csv", status: "completed", mappedFields: 42 },
      { id: "ONB-IMP-2", source: "legacy-code-cases.csv", status: "in_progress", mappedFields: 31 }
    ];
  }

  @Get("readiness")
  @RequirePermissions(Permission.onboardingManage)
  readiness() {
    return { score: 74, blockers: ["Finalize SSO connector", "Confirm department owners"] };
  }
}
