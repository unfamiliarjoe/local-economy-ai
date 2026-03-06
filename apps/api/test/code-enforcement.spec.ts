import { CodeEnforcementController } from "../src/modules/code-enforcement/code-enforcement.controller";

describe("CodeEnforcementController", () => {
  const c = new CodeEnforcementController();
  it("lists cases", () => expect(c.list().length).toBeGreaterThan(0));
});
