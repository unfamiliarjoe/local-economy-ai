import { CodeEnforcementController } from "../src/modules/code-enforcement/code-enforcement.controller";

describe("CodeEnforcement create", () => {
  const c = new CodeEnforcementController();
  it("creates case", () => {
    const created = c.create({ category: "Graffiti", address: "10 Main", complaint: "Graffiti on side wall" });
    expect(created.status).toBe("intake");
  });
});
