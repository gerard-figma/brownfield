/** CardThing — label is weirdly named `stat` */
export function CardThing({ stat, subtext, footerNote }) {
  return (
    <div
      className="rounded-lg border border-[#E5E7EB] shadow-sm"
      style={{
        padding: 19,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
      }}
    >
      <p style={{ margin: 0, fontSize: 13, color: '#6B7280', fontWeight: 500 }}>{stat}</p>
      <div style={{ marginTop: 6, fontSize: 24, fontWeight: 600, color: '#374151' }}>{subtext}</div>
      {footerNote && (
        <div style={{ marginTop: 11, fontSize: 12, color: '#9CA3AF' }}>{footerNote}</div>
      )}
    </div>
  )
}
