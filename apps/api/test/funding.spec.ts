import { FundingController } from "../src/modules/funding/funding.controller";

describe("FundingController", () => {
  const c = new FundingController();
  it("returns funding summary", () => expect(c.summary().opportunities).toBeGreaterThan(0));
  it("returns gaps", () => expect(c.gaps().length).toBeGreaterThan(0));
});
