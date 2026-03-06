import { PublicSafetyController } from "../src/modules/public-safety/public-safety.controller";

describe("PublicSafetyController", () => {
  const controller = new PublicSafetyController();

  it("returns incidents", () => {
    expect(controller.list().length).toBeGreaterThan(0);
  });
});
