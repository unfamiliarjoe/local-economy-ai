import { SearchController } from "../src/modules/search/search.controller";

describe("SearchController", () => {
  const controller = new SearchController();

  it("filters by query", () => {
    const result = controller.query("permit");
    expect(result.some((item) => item.title.toLowerCase().includes("permit"))).toBe(true);
  });
});
