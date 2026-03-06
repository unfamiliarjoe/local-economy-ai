import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { bidSubmissions, solicitations } from "../../common/demo-data";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const createBidSchema = z.object({
  solicitationId: z.string().min(2),
  vendorName: z.string().min(2),
  amount: z.number().positive(),
  coverLetter: z.string().min(10)
});

@Controller("procurement")
@UseGuards(RbacGuard)
export class ProcurementController {
  @Get("solicitations")
  @RequirePermissions(Permission.procurementView)
  listSolicitations(@Query("status") status?: string) {
    return solicitations.filter((s) => !status || s.status === status);
  }

  @Get("solicitations/:id")
  @RequirePermissions(Permission.procurementView)
  solicitationDetail(@Param("id") id: string) {
    const item = solicitations.find((s) => s.id === id);
    return {
      ...item,
      submissions: bidSubmissions.filter((b) => b.solicitationId === id),
      reviewSummary: "Evaluation committee packet prepared. 2 bids received.",
      timeline: ["Published", "Vendor Q&A", "Submission window open"],
      ai: { proposalSummary: "Comparative pricing spread is 11%.", clarificationDraft: "Please confirm mobilization timeline assumptions." }
    };
  }

  @Post("bids")
  @RequirePermissions(Permission.procurementSubmitBid)
  submitBid(@Body() body: unknown) {
    const payload = createBidSchema.parse(body);
    return { id: `BID-${10000 + bidSubmissions.length}`, status: "submitted", submittedAt: new Date().toISOString(), ...payload };
  }

  @Get("bids")
  @RequirePermissions(Permission.procurementView)
  bids(@Query("vendorName") vendorName?: string) {
    return bidSubmissions.filter((b) => !vendorName || b.vendorName === vendorName);
  }

  @Patch("solicitations/:id/status")
  @RequirePermissions(Permission.procurementReview)
  updateSolicitation(@Param("id") id: string, @Body() body: { status: string }) {
    return { id, ...body, updated: true };
  }
}
