import { OnboardingController } from "../src/modules/onboarding/onboarding.controller";

describe("OnboardingController", () => {
  const c = new OnboardingController();
  it("returns readiness", () => expect(c.readiness().score).toBeGreaterThan(0));
});
