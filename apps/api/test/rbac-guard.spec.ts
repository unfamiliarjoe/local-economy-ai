import { ForbiddenException } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common/interfaces";
import { RbacGuard } from "../src/modules/rbac/rbac.guard";
import { Permission } from "../src/modules/rbac/permissions";

function makeContext(role: string): ExecutionContext {
  return {
    getHandler: () => ({}),
    getClass: () => ({}),
    switchToHttp: () => ({ getRequest: () => ({ headers: { "x-demo-role": role } }) })
  } as unknown as ExecutionContext;
}

describe("RbacGuard", () => {
  it("allows staff when required permission is granted", () => {
    const guard = new RbacGuard({ getAllAndOverride: () => [Permission.tasksRead] } as any);
    expect(guard.canActivate(makeContext("staff"))).toBe(true);
  });

  it("denies unknown role on protected route", () => {
    const guard = new RbacGuard({ getAllAndOverride: () => [Permission.tasksRead] } as any);
    expect(() => guard.canActivate(makeContext("unknown_role"))).toThrow(ForbiddenException);
  });
});
