import { ExecutiveController } from "../src/modules/executive/executive.controller";

describe("ExecutiveController", () => {
  const controller = new ExecutiveController();

  it("returns summary metrics", () => {
    expect(controller.summary().metrics.length).toBeGreaterThan(3);
  });
});
