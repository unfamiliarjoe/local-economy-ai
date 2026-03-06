import { SettingsController } from "../src/modules/settings/settings.controller";

describe("SettingsController", () => {
  const c = new SettingsController();

  it("returns security controls", () => {
    expect(c.security().privilegedActionConfirmation).toBe(true);
  });

  it("returns role/access policy metadata", () => {
    expect(c.access().privilegedRoles.length).toBeGreaterThan(0);
  });

  it("returns foundational admin datasets", () => {
    expect(c.general().tenantName).toContain("City");
    expect(c.departments().length).toBeGreaterThan(0);
    expect(c.roles().length).toBeGreaterThan(0);
    expect(c.templates().length).toBeGreaterThan(0);
  });
});
