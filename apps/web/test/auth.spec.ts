import { redirectForRole } from "../lib/auth";

describe("auth routing", () => {
  it("redirects resident", () => {
    expect(redirectForRole("resident")).toBe("/resident/dashboard");
  });

  it("redirects staff to app", () => {
    expect(redirectForRole("staff")).toBe("/app");
  });
});
