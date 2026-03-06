export function redirectForRole(role: string) {
  if (role === "resident") return "/resident/dashboard";
  if (role === "vendor") return "/business/dashboard";
  return "/app";
}
