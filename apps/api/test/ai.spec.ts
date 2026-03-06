import { AiController } from "../src/modules/ai/ai.controller";

describe("AiController", () => {
  const c = new AiController();

  it("includes transparency fields in summarize output", () => {
    const res = c.summarize({ module: "permits", content: "missing signature" });
    expect(res.assistiveOnly).toBe(true);
    expect(res.generatedBy).toBe("LEAI Copilot");
    expect(res.citations.length).toBeGreaterThan(0);
  });

  it("returns usage summary", () => {
    expect(c.usageSummary().policyMode).toBe("assistive-only");
  });
});
