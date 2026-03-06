import { prettyStage } from "../lib/status";

describe("executive helpers smoke", () => {
  it("keeps status formatting usable", () => {
    expect(prettyStage("packet_in_progress")).toBe("Packet In Progress");
  });
});
