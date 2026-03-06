import type { ReactNode } from "react";

export function TableShell({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-900 text-slate-400">
          <tr>{headers.map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-slate-800 bg-slate-950 text-slate-200">
          {rows.map((cells, i) => (
            <tr key={i}>{cells.map((cell, j) => <td key={j} className="px-4 py-3">{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
