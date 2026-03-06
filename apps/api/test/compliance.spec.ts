import { ComplianceController } from "../src/modules/compliance/compliance.controller";

describe("ComplianceController", () => {
  const c = new ComplianceController();

  it("returns filtered audit logs by risk", () => {
    const high = c.logs("high");
    expect(high.length).toBeGreaterThan(0);
    expect(high.every((row) => row.risk === "high")).toBe(true);
  });

  it("returns logs filtered by free-text query", () => {
    const rows = c.logs(undefined, "AI");
    expect(rows.length).toBeGreaterThan(0);
  });

  it("returns export queue metadata", () => {
    expect(c.exports().length).toBeGreaterThan(0);
  });
});
