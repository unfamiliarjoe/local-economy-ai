export type PlatformRole =
  | "platform_super_admin"
  | "platform_support_engineer"
  | "municipality_admin"
  | "department_admin"
  | "resident"
  | "vendor";

export interface TenantScopedRecord {
  id: string;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
}
