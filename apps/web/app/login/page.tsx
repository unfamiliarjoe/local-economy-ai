import Link from "next/link";
import { LoginForm } from "../../components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="space-y-4">
        <LoginForm />
        <p className="text-sm text-slate-400">Need an account? <Link className="text-sky-300" href="/signup">Sign up</Link></p>
      </div>
    </main>
  );
}
