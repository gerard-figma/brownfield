import { Link } from 'react-router-dom'

export default function NavBar({ brand }) {
  const items = [
    { to: '/dashboard', text: 'Dashboard' },
    { to: '/settings', text: 'Settings' },
    { to: '/empty', text: 'Reports' },
  ]

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 22px',
        borderBottom: '1px solid #E5E7EB',
        backgroundColor: '#FFFFFF',
        gap: 6,
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 700, color: '#2563EB' }}>{brand}</div>
      <nav style={{ display: 'flex', gap: 18 }}>
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            style={{ color: '#3B82F6', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}
          >
            {it.text}
          </Link>
        ))}
      </nav>
    </header>
  )
}
