import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller("ai")
export class AiController {
  @Post("summarize")
  summarize(@Body() body: { module: string; content: string }) {
    return {
      module: body.module,
      summary: `Assistive summary placeholder for ${body.module}`,
      confidence: "medium",
      assistiveOnly: true,
      generatedBy: "LEAI Copilot",
      citations: ["record metadata", "linked document context"]
    };
  }

  @Get("usage-summary")
  usageSummary() {
    return {
      totalInteractions: 124,
      highConfidenceRate: "68%",
      humanReviewedActions: 42,
      policyMode: "assistive-only"
    };
  }
}
