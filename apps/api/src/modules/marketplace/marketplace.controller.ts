import { Controller, Get, UseGuards } from "@nestjs/common";
import { marketplaceVendors } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("marketplace")
@UseGuards(RbacGuard)
export class MarketplaceController {
  @Get()
  @RequirePermissions(Permission.marketplaceView)
  list() {
    return marketplaceVendors;
  }
}
