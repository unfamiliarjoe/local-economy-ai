import { PermitsController } from "../src/modules/permits/permits.controller";

describe("PermitsController", () => {
  const controller = new PermitsController();

  it("lists permits", () => {
    const items = controller.list(undefined, undefined);
    expect(items.length).toBeGreaterThan(0);
  });

  it("creates permit with validation", () => {
    const created = controller.create({ type: "Building", applicantName: "Test", address: "12 Main St", description: "Interior remodel and ADA updates" });
    expect(created.id).toContain("PRM-2026-");
  });
});
