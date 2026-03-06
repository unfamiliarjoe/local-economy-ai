import { PageHeader, StartHereCard } from "@leai/ui";

const journeys = [
  {
    title: "City Manager Narrative",
    description: "Start in executive, review strategy risks, then validate transparency-facing outcomes.",
    href: "/app/executive",
    cta: "Open executive center"
  },
  {
    title: "Operations Director Narrative",
    description: "Move from map command to workforce assignments and resolve high-priority queue items.",
    href: "/app/map",
    cta: "Open map command"
  },
  {
    title: "Implementation Team Narrative",
    description: "Track onboarding checklist, migration progress, and launch readiness blockers.",
    href: "/app/onboarding",
    cta: "Open implementation engine"
  }
];

export default function Page() {
  return (
    <div className="space-y-4">
      <PageHeader title="Getting Started" subtitle="Guided release-candidate walkthroughs for leadership, operations, and implementation teams." />
      <div className="grid gap-4 md:grid-cols-3">
        {journeys.map((journey) => (
          <StartHereCard
            key={journey.title}
            title={journey.title}
            description={journey.description}
            href={journey.href}
            cta={journey.cta}
          />
        ))}
      </div>
    </div>
  );
}
