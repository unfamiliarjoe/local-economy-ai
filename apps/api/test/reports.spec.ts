import { ReportsController } from "../src/modules/reports/reports.controller";

describe("ReportsController", () => {
  const c = new ReportsController();
  it("lists report packs", () => expect(c.list().length).toBeGreaterThan(0));
});
