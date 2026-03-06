import { CanActivate, ExecutionContext, ForbiddenException, Injectable, SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { DemoRole } from "../../common/demo-data";
import { PermissionKey, rolePermissions } from "./permissions";

const META_KEY = "required_permissions";
export const RequirePermissions = (...permissions: PermissionKey[]) => SetMetadata(META_KEY, permissions);

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<PermissionKey[]>(META_KEY, [
      context.getHandler(),
      context.getClass()
    ]) ?? [];
    if (!required.length) return true;
    const request = context.switchToHttp().getRequest();
    const role = (request.headers["x-demo-role"] as DemoRole) || "staff";
    const granted = rolePermissions[role] ?? [];
    const allowed = required.every((perm) => granted.includes(perm));
    if (!allowed) throw new ForbiddenException("Insufficient permissions for this route");
    return true;
  }
}
