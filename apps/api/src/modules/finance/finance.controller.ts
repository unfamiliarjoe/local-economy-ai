import { Controller, Get, UseGuards } from "@nestjs/common";
import { financeApprovals } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("finance")
@UseGuards(RbacGuard)
export class FinanceController {
  @Get() @RequirePermissions(Permission.financeView) summary() { return { approvalsPending: financeApprovals.filter((x)=>x.status!=='approved').length, budgetItems: 14 }; }
  @Get("approvals") @RequirePermissions(Permission.financeView) approvals() { return financeApprovals; }
  @Get("purchasing") @RequirePermissions(Permission.financeView) purchasing() { return [{ id: "PUR-22", status: "pending", requester: "Parks", amount: 24000 }]; }
}
