import Link from "next/link";
import { PageHeader, StartHereCard } from "@leai/ui";

const areas = [
  {
    title: "Public projects",
    description: "Current status of city projects with plain-language progress signals.",
    href: "/transparency/projects",
    cta: "View projects"
  },
  {
    title: "Public procurement",
    description: "Open solicitations and procurement visibility for businesses and residents.",
    href: "/transparency/procurement",
    cta: "View procurement"
  },
  {
    title: "Budget visibility",
    description: "How approved funds move into contracts and delivered outcomes.",
    href: "/transparency/budget",
    cta: "View budget"
  },
  {
    title: "Meeting transparency",
    description: "Upcoming meetings and governance schedule references.",
    href: "/transparency/meetings",
    cta: "View meetings"
  }
];

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <PageHeader title="Public Transparency" subtitle="Accessible public accountability view for projects, procurement, budget, and governance timelines." />
      <div className="grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <StartHereCard key={area.href} title={area.title} description={area.description} href={area.href} cta={area.cta} />
        ))}
      </div>
      <Link className="text-sm text-sky-300" href="/app/executive">Municipal staff: open executive center</Link>
    </div>
  );
}
