import { Fragment } from 'react'

export function TableV2(props) {
  const headers = props.headers
  const rows = props.dataRows

  return (
    <div style={{ marginTop: 18, overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ backgroundColor: '#F9FAFB' }}>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left border-b border-[#E5E7EB]"
                style={{ padding: '10px 14px', color: '#374151', fontWeight: 600 }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <Fragment key={idx}>
              <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                {row.cells.map((cell, j) => (
                  <td key={j} style={{ padding: '11px 14px', color: '#374151' }}>
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
