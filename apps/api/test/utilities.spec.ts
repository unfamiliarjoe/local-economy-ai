import { UtilitiesController } from "../src/modules/utilities/utilities.controller";

describe("UtilitiesController", () => {
  const c = new UtilitiesController();
  it("lists utility cases", () => expect(c.list().length).toBeGreaterThan(0));
});
