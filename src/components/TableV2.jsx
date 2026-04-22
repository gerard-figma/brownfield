import { Fragment } from 'react'

/**
 * Simple table helper.
 *
 * Training note: tbody rows use the row index as `key`. That is OK for static
 * demos, but breaks down when rows are reordered, filtered, or inserted — prefer
 * a stable `id` on each row object instead.
 */
export function TableV2(props) {
  const headers = props.headers
  const rows = props.dataRows

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#F9FAFB]">
            {headers.map((h) => (
              <th
                key={h}
                className="border-b border-[#E5E7EB] px-4 py-3 text-left font-semibold text-[#374151]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <Fragment key={idx}>
              <tr className="border-b border-[#E5E7EB]">
                {row.cells.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-[#374151]">
                    {cell}
                  </td>
                ))}
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
