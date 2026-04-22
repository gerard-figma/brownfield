/**
 * Card for dashboard-style metrics.
 *
 * Training note: the first prop is named `stat`, but callers pass a human
 * label like "Users" or "Revenue". A clearer name would be `title` or `label`.
 */
export function CardThing({ stat, subtext, footerNote }) {
  return (
    <div className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <p className="m-0 text-[13px] font-medium text-[#6B7280]">{stat}</p>
      <div className="mt-2 text-2xl font-semibold text-[#374151]">{subtext}</div>
      {footerNote && <div className="mt-3 text-xs text-[#9CA3AF]">{footerNote}</div>}
    </div>
  )
}
