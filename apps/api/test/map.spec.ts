import { MapController } from "../src/modules/map/map.controller";

describe("MapController", () => {
  const c = new MapController();
  it("returns map summary", () => expect(c.summary().total).toBeGreaterThan(0));
  it("filters by module", () => expect(c.list("permitting").every((r) => r.module === "permitting")).toBe(true));
});
