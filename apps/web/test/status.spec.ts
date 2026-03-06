import { prettyStage } from "../lib/status";

describe("status formatter", () => {
  it("formats snake case", () => {
    expect(prettyStage("inspection_scheduled")).toBe("Inspection Scheduled");
  });
});
