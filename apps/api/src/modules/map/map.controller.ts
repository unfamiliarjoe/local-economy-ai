import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { mapRecords } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("map")
@UseGuards(RbacGuard)
export class MapController {
  @Get()
  @RequirePermissions(Permission.mapView)
  list(@Query("module") module?: string, @Query("district") district?: string) {
    return mapRecords.filter((r) => (!module || r.module === module) && (!district || r.district === district));
  }

  @Get("summary")
  @RequirePermissions(Permission.mapView)
  summary() {
    return {
      total: mapRecords.length,
      byModule: mapRecords.reduce<Record<string, number>>((acc, row) => {
        acc[row.module] = (acc[row.module] || 0) + 1;
        return acc;
      }, {}),
      overlays: ["districts", "service_areas", "corridors"]
    };
  }
}
