"use client";
import { Button, Card, Input } from "@leai/ui";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { redirectForRole } from "../../lib/auth";


export function LoginForm() {
  const [email, setEmail] = useState("jordan@brookhaven.gov");
  const [password, setPassword] = useState("Password123");
  const [role, setRole] = useState("staff");
  const [error, setError] = useState("");
  const router = useRouter();

  async function submit() {
    setError("");
    if (!email.includes("@") || password.length < 8) return setError("Please provide valid credentials.");
    document.cookie = `demo_role=${role}; path=/`;
    router.push(redirectForRole(role));
  }

  return (
    <Card className="w-full max-w-md">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <p className="mt-2 text-sm text-slate-400">Demo access by role for staff, residents, and vendors.</p>
      <div className="mt-6 space-y-3">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select className="h-10 w-full rounded-xl border border-slate-700 bg-slate-950 px-3" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="staff">Municipal Staff</option>
          <option value="municipality_admin">Municipality Admin</option>
          <option value="resident">Resident</option>
          <option value="vendor">Vendor/Business</option>
        </select>
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <Button onClick={submit}>Continue</Button>
      </div>
    </Card>
  );
}
