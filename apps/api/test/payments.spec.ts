import { PaymentsController } from "../src/modules/payments/payments.controller";

describe("PaymentsController", () => {
  const c = new PaymentsController();
  it("returns payment records", () => expect(c.payments().length).toBeGreaterThan(0));
  it("returns disbursement records", () => expect(c.disbursements().length).toBeGreaterThan(0));
});
