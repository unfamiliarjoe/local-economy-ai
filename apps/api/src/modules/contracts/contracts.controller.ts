import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { budgetChain, contracts } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("contracts")
@UseGuards(RbacGuard)
export class ContractsController {
  @Get()
  @RequirePermissions(Permission.contractsView)
  list() {
    return contracts;
  }

  @Get(":id")
  @RequirePermissions(Permission.contractsView)
  detail(@Param("id") id: string) {
    const contract = contracts.find((c) => c.id === id);
    return { ...contract, linkedChain: budgetChain.find((x) => x.contractId === id) };
  }
}
