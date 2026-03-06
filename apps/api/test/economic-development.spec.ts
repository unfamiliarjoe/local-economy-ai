import { EconomicDevelopmentController } from "../src/modules/economic-development/economic-development.controller";

describe("EconomicDevelopmentController", () => {
  const controller = new EconomicDevelopmentController();

  it("lists projects and cases", () => {
    expect(controller.projects(undefined).length).toBeGreaterThan(0);
    expect(controller.cases().length).toBeGreaterThan(0);
  });
});
