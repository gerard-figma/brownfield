import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BigButton from '../components/BigButton.jsx'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 55%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          boxShadow: '0 10px 40px rgba(37, 99, 235, 0.08)',
          padding: '32px 28px',
          border: '1px solid #E5E7EB',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 22 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: '#2563EB', letterSpacing: -0.5 }}>Acme</div>
          <div style={{ fontSize: 13, color: '#6B7280', marginTop: 6 }}>Dashboard</div>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '10px 12px',
              marginBottom: 16,
              borderRadius: 6,
              border: '1px solid #D1D5DB',
              fontSize: 14,
              outline: 'none',
            }}
          />

          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '10px 12px',
              marginBottom: 20,
              borderRadius: 6,
              border: '1px solid #D1D5DB',
              fontSize: 14,
            }}
          />

          <BigButton variant="primary" type="submit" extraStyle={{ width: '100%', padding: '11px 16px' }}>
            Sign in
          </BigButton>
        </form>
      </div>
    </div>
  )
}
