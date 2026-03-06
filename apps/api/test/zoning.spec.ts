import { ZoningController } from "../src/modules/zoning/zoning.controller";

describe("ZoningController", () => {
  const controller = new ZoningController();

  it("returns zoning detail with ai summary", () => {
    const detail = controller.detail("ZNG-2026-014");
    expect(detail.ai.summary).toContain("AI assist");
  });
});
