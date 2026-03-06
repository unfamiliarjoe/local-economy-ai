import { InspectionsController } from "../src/modules/inspections/inspections.controller";

describe("InspectionsController", () => {
  const c = new InspectionsController();
  it("lists inspections", () => expect(c.list(undefined).length).toBeGreaterThan(0));
});
