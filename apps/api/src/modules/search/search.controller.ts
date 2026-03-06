import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { searchIndex } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("search")
@UseGuards(RbacGuard)
@RequirePermissions(Permission.searchRead)
export class SearchController {
  @Get()
  query(@Query("q") q = "") {
    const query = q.toLowerCase();
    return searchIndex.filter((item) => item.title.toLowerCase().includes(query));
  }
}
