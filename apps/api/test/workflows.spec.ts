import { WorkflowsController } from "../src/modules/workflows/workflows.controller";

describe("WorkflowsController", () => {
  const controller = new WorkflowsController();

  it("returns workflow definitions", () => {
    expect(controller.list().length).toBeGreaterThan(0);
  });
});
