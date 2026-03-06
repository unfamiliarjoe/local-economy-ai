import { BusinessLicensingController } from "../src/modules/business-licensing/business-licensing.controller";

describe("BusinessLicensingController", () => {
  const controller = new BusinessLicensingController();

  it("lists license applications", () => {
    expect(controller.applications().length).toBeGreaterThan(0);
  });

  it("creates license application", () => {
    const created = controller.create({ licenseTypeId: "LIC-TYP-02", businessName: "Biz", address: "1 Main", ownerName: "Owner" });
    expect(created.status).toBe("submitted");
  });
});
