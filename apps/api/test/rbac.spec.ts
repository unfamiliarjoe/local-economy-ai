import { Permission, rolePermissions } from "../src/modules/rbac/permissions";

describe("RBAC mappings", () => {
  it("grants staff dashboard and tasks access", () => {
    expect(rolePermissions.staff).toContain(Permission.dashboardStaffRead);
    expect(rolePermissions.staff).toContain(Permission.tasksRead);
  });

  it("does not grant resident staff dashboard access", () => {
    expect(rolePermissions.resident).not.toContain(Permission.dashboardStaffRead);
  });

  it("grants staff release-candidate strategic surfaces", () => {
    expect(rolePermissions.staff).toContain(Permission.mapView);
    expect(rolePermissions.staff).toContain(Permission.strategyView);
    expect(rolePermissions.staff).toContain(Permission.onboardingManage);
  });

  it("grants resident and vendor payment visibility but not onboarding management", () => {
    expect(rolePermissions.resident).toContain(Permission.paymentsView);
    expect(rolePermissions.vendor).toContain(Permission.paymentsView);
    expect(rolePermissions.vendor).not.toContain(Permission.onboardingManage);
  });
});
