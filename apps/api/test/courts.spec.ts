import { CourtsController } from "../src/modules/courts/courts.controller";

describe("CourtsController", () => {
  const controller = new CourtsController();

  it("returns schedules", () => {
    expect(controller.list().length).toBeGreaterThan(0);
  });
});
