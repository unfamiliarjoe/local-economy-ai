import { api } from "../lib/api";

describe("phase 8 api surface", () => {
  it("exposes strategy and onboarding methods", () => {
    expect(typeof api.strategy).toBe("function");
    expect(typeof api.onboardingReadiness).toBe("function");
  });

  it("exposes map/funding/vendor methods", () => {
    expect(typeof api.mapSummary).toBe("function");
    expect(typeof api.fundingOpportunities).toBe("function");
    expect(typeof api.vendorPerformanceDetail).toBe("function");
  });
});
