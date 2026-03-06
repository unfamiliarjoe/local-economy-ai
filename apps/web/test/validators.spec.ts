import { validateBidAmount, validateIssueForm } from "../lib/validators";

describe("form validators", () => {
  it("validates 311 intake fields", () => {
    expect(validateIssueForm("Main St", "Large pothole near bus stop")).toBe(true);
    expect(validateIssueForm("", "short")).toBe(false);
  });

  it("validates bid amount", () => {
    expect(validateBidAmount(100)).toBe(true);
    expect(validateBidAmount(0)).toBe(false);
  });
});
