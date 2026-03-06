import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { strategyInitiatives } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("strategy")
@UseGuards(RbacGuard)
export class StrategyController {
  @Get()
  @RequirePermissions(Permission.strategyView)
  list() {
    return strategyInitiatives;
  }

  @Get(":id")
  @RequirePermissions(Permission.strategyView)
  detail(@Param("id") id: string) {
    const initiative = strategyInitiatives.find((x) => x.id === id);
    return {
      ...initiative,
      blockers: initiative?.status === "at_risk" ? ["Staffing bandwidth", "Procurement lead time"] : ["No major blockers"],
      aiPrep: { digest: `Assistive pre-read for ${initiative?.title ?? id}`, confidence: "medium", assistiveOnly: true }
    };
  }
}
