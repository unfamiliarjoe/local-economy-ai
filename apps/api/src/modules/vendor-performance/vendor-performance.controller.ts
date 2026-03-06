import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { contracts, vendorPerformance } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("vendor-performance")
@UseGuards(RbacGuard)
export class VendorPerformanceController {
  @Get()
  @RequirePermissions(Permission.vendorPerformanceView)
  list() {
    return vendorPerformance;
  }

  @Get(":id")
  @RequirePermissions(Permission.vendorPerformanceView)
  detail(@Param("id") id: string) {
    const v = vendorPerformance.find((x) => x.id === id);
    return {
      ...v,
      contracts: contracts.filter((c) => c.vendorId === id),
      ai: {
        summary: `Assistive vendor digest for ${v?.vendor ?? id}`,
        renewalFlag: v?.risk === "medium" ? "Review insurance and milestone slippage." : "No immediate risk flag.",
        assistiveOnly: true
      }
    };
  }
}
