export function prettyStage(value: string) {
  return value.replaceAll("_", " ").replace(/\b\w/g, (s) => s.toUpperCase());
}
