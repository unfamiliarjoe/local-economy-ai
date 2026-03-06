export function validateIssueForm(location: string, summary: string) {
  return Boolean(location.trim()) && summary.trim().length >= 8;
}

export function validateBidAmount(amount: number) {
  return Number.isFinite(amount) && amount > 0;
}
