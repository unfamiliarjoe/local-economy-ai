import { BenefitsController } from "../src/modules/benefits/benefits.controller";

describe("BenefitsController", () => {
  const controller = new BenefitsController();

  it("lists applications", () => {
    const results = controller.applications(undefined);
    expect(results.length).toBeGreaterThan(0);
  });

  it("creates application", () => {
    const created = controller.create({ programId: "BEN-PGM-01", residentName: "Test Resident", householdSize: 2, requestedSupport: "Food assistance" });
    expect(created.status).toBe("submitted");
  });
});
