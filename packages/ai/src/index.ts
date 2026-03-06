export type AIProvider = "openai" | "anthropic" | "local";

export interface PromptTemplate {
  key: string;
  version: number;
  systemPrompt: string;
}

export const promptRegistry: PromptTemplate[] = [
  {
    key: "permit-summary",
    version: 1,
    systemPrompt:
      "You are an assistive municipal copilot. Provide concise summaries and clearly label uncertainty."
  }
];
