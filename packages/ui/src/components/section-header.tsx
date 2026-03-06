export function SectionHeader({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <div className="mb-4">
      {eyebrow ? <p className="text-xs uppercase tracking-wide text-sky-300">{eyebrow}</p> : null}
      <h2 className="text-xl font-semibold text-slate-100">{title}</h2>
    </div>
  );
}
