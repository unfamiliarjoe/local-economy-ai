import { VendorPerformanceController } from "../src/modules/vendor-performance/vendor-performance.controller";

describe("VendorPerformanceController", () => {
  const c = new VendorPerformanceController();
  it("lists vendor scorecards", () => expect(c.list().length).toBeGreaterThan(0));
  it("returns detail with ai", () => expect(c.detail("VND-14").ai.assistiveOnly).toBe(true));
});
