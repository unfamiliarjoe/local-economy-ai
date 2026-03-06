import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { documentIntelligence, documents } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

@Controller("documents")
@UseGuards(RbacGuard)
@RequirePermissions(Permission.documentsRead)
export class DocumentsController {
  @Get()
  list(@Query("tag") tag?: string, @Query("q") q?: string) {
    return documents.filter((d) => (!tag || d.tags.includes(tag)) && (!q || d.name.toLowerCase().includes(q.toLowerCase())));
  }

  @Get(":id")
  detail(@Param("id") id: string) {
    const doc = documents.find((d) => d.id === id);
    const intel = documentIntelligence.find((i) => i.id === id);
    return {
      ...doc,
      linkedRecord: intel?.linkedRecord,
      metadata: { ownerDepartment: "Records", retentionClass: "Municipal Standard" },
      versions: ["v1", "v2"],
      activity: ["Uploaded", "Reviewed", "Tagged for workflow linkage"],
      ai: intel
    };
  }
}
