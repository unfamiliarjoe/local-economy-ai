import { DashboardController } from "../src/modules/dashboard/dashboard.controller";

describe("DashboardController", () => {
  const controller = new DashboardController();

  it("returns staff summary with kpis", () => {
    const result = controller.staff();
    expect(Array.isArray(result.kpis)).toBe(true);
    expect(result.kpis.length).toBeGreaterThan(0);
  });
});
