import { PageHeader, SecurityCallout, StartHereCard, TableShell } from "@leai/ui";
import { api } from "../../../../lib/api";

export default async function Page() {
  const security = await api.settingsSecurity();

  return (
    <div className="space-y-4">
      <PageHeader title="Security Settings" subtitle="Session policy, MFA/SSO readiness, retention posture, and privileged-action controls." />
      <SecurityCallout message="Security policy changes should be reviewed by IT and recorded in compliance workflows before rollout." />
      <TableShell
        headers={["Policy", "Value"]}
        rows={[
          ["SSO enabled", String(security.ssoEnabled)],
          ["MFA policy", security.mfaPolicy],
          ["Session timeout", `${security.sessionTimeoutMinutes} minutes`],
          ["Retention policy", security.dataRetentionPolicy],
          ["Privileged confirmations", String(security.privilegedActionConfirmation)]
        ]}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <StartHereCard title="Access model review" description="Validate high-privilege role assignments and impersonation policies." href="/app/settings/access" cta="Open access controls" />
        <StartHereCard title="Compliance correlation" description="Confirm security policies are reflected in risk monitoring and export packs." href="/app/compliance" cta="Open compliance center" />
      </div>
    </div>
  );
}
