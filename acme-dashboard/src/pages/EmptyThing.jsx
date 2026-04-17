import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import BigButton from '../components/BigButton.jsx'

export default function EmptyThing() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <NavBar brand="Acme" />
      <div
        style={{
          maxWidth: 520,
          margin: '0 auto',
          padding: '48px 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            height: 180,
            margin: '0 auto',
            marginTop: 12,
            borderRadius: 12,
            border: '2px dashed #D1D5DB',
            backgroundColor: '#F9FAFB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9CA3AF',
            fontSize: 14,
          }}
        >
          illustration placeholder
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 600, color: '#374151', marginTop: 28, marginBottom: 10 }}>
          No reports yet
        </h1>
        <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.5, marginBottom: 22 }}>
          Connect a data source or import a CSV to see charts here. This screen is intentionally sparse.
        </p>

        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <BigButton variant="ghost" extraStyle={{ marginTop: 6 }}>
            Back to dashboard
          </BigButton>
        </Link>
      </div>
    </div>
  )
}
