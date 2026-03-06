import { IntegrationsController } from "../src/modules/integrations/integrations.controller";

describe("IntegrationsController", () => {
  const c = new IntegrationsController();
  it("returns integration catalog", () => expect(c.integrations().length).toBeGreaterThan(0));
});
