import { ProcurementController } from "../src/modules/procurement/procurement.controller";

describe("ProcurementController", () => {
  const controller = new ProcurementController();

  it("returns solicitations", () => {
    expect(controller.listSolicitations(undefined).length).toBeGreaterThan(0);
  });

  it("submits bid", () => {
    const bid = controller.submitBid({ solicitationId: "SOL-2026-18", vendorName: "Vendor", amount: 1000, coverLetter: "This is our proposal cover letter." });
    expect(bid.status).toBe("submitted");
  });
});
