import { Controller, Get, UseGuards } from "@nestjs/common";
import { assets, facilities, fleetUnits, parksPrograms } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller()
@UseGuards(RbacGuard)
export class AssetsController {
  @Get("assets") @RequirePermissions(Permission.assetsView) assets() { return assets; }
  @Get("fleet") @RequirePermissions(Permission.assetsView) fleet() { return fleetUnits; }
  @Get("facilities") @RequirePermissions(Permission.assetsView) facilities() { return facilities; }
  @Get("parks-programs") @RequirePermissions(Permission.assetsView) parksPrograms() { return parksPrograms; }
}
