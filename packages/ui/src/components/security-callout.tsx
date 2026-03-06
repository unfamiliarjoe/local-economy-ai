import { Card } from "./card";

export function SecurityCallout({ message }: { message: string }) {
  return <Card className="border-rose-500/40 bg-rose-950/30"><p className="text-xs uppercase tracking-wide text-rose-300">Security Notice</p><p className="mt-2 text-sm text-rose-100">{message}</p></Card>;
}
