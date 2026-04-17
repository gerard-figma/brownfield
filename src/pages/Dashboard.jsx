import NavBar from '../components/NavBar.jsx'
import { CardThing } from '../components/CardThing.jsx'
import { TableV2 } from '../components/TableV2.jsx'
import styles from './Dashboard.module.css'

const tableStuff = {
  headers: ['Customer', 'Plan', 'MRR', 'Status'],
  dataRows: [
    { cells: ['Northwind LLC', 'Enterprise', '$4,200', <StatusPill ok />] },
    { cells: ['Contoso', 'Pro', '$890', <StatusPill ok />] },
    { cells: ['Fabrikam', 'Starter', '$120', <StatusPill bad />] },
    { cells: ['Adventure Co', 'Pro', '$650', <StatusPill ok />] },
    { cells: ['Tailspin Toys', 'Enterprise', '$12,400', <StatusPill ok />] },
  ],
}

function StatusPill({ ok, bad }) {
  const bg = ok ? '#10B981' : bad ? '#EF4444' : '#6B7280'
  const txt = ok ? 'Active' : bad ? 'At risk' : '—'
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 9px',
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        color: '#FFFFFF',
        backgroundColor: bg,
      }}
    >
      {txt}
    </span>
  )
}

export default function Dashboard() {
  return (
    <div className={styles.pageWrap}>
      <NavBar brand="Acme" />
      <main className={styles.mainArea}>
        <h1 className={styles.sectionTitle} style={{ marginTop: 4 }}>
          Overview
        </h1>
        <p style={{ marginTop: 7, marginBottom: 0, fontSize: 14, color: '#6B7280' }}>
          Last updated 2 minutes ago · internal only
        </p>

        <div className={styles.gridStats}>
          <CardThing stat="Users" subtext="12,480" footerNote="+3.2% vs last week" />
          <CardThing stat="Revenue" subtext="$842k" footerNote="MTD" />
          <CardThing stat="Tickets" subtext="37 open" footerNote="SLA 94%" />
          <CardThing stat="Uptime" subtext="99.98%" footerNote="30d rolling" />
        </div>

        <div className={styles.cardPanel}>
          <h2 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: '#374151' }}>Recent accounts</h2>
          <p style={{ marginTop: 6, fontSize: 13, color: '#9CA3AF', marginBottom: 0 }}>
            Hardcoded preview data — do not use in prod
          </p>
          <TableV2 headers={tableStuff.headers} dataRows={tableStuff.dataRows} />
        </div>
      </main>
    </div>
  )
}
