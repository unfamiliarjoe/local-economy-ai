import { Card, Input, Button } from "@leai/ui";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-semibold">Reset password</h1>
        <p className="mt-2 text-sm text-slate-400">Placeholder flow for secure reset orchestration.</p>
        <div className="mt-6 space-y-3"><Input placeholder="Email" /><Button>Send reset link</Button></div>
      </Card>
    </main>
  );
}
