import { FinanceController } from "../src/modules/finance/finance.controller";

describe("FinanceController", () => {
  const c = new FinanceController();
  it("returns approvals", () => expect(c.approvals().length).toBeGreaterThan(0));
});
