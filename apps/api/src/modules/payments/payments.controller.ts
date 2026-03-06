import { Controller, Get, UseGuards } from "@nestjs/common";
import { disbursements, payments } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller()
@UseGuards(RbacGuard)
export class PaymentsController {
  @Get("payments")
  @RequirePermissions(Permission.paymentsView)
  payments() {
    return payments;
  }

  @Get("disbursements")
  @RequirePermissions(Permission.paymentsView)
  disbursements() {
    return disbursements;
  }
}
