import { Card, Input, Button } from "@leai/ui";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-semibold">Create account</h1>
        <div className="mt-6 space-y-3">
          <Input placeholder="Full name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button>Create demo account</Button>
        </div>
      </Card>
    </main>
  );
}
