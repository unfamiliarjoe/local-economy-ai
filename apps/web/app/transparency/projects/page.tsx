import { PageHeader, StatusBadge, TableShell } from "@leai/ui";
import { api } from "../../../lib/api";

export default async function Page() {
  const projects = await api.capitalProjects();

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <PageHeader title="Public Project Tracker" subtitle="Major projects, status, and investment priorities in plain-language format." />
      <TableShell
        headers={["Project", "Status", "Priority"]}
        rows={(projects || []).map((project: any) => [
          project.name,
          <StatusBadge key={project.id} value={project.status} />,
          project.priority
        ])}
      />
    </div>
  );
}
