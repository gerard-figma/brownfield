import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import BigButton from '../components/BigButton.jsx'

const buckets = [
  { label: 'Current', amount: '$18,400', color: '#10B981' },
  { label: '1–30 days', amount: '$3,200', color: '#3B82F6' },
  { label: '31–60 days', amount: '$890', color: '#9CA3AF' },
  { label: '61+ days', amount: '$120', color: '#EF4444' },
]

export default function BillingAgingReport() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <NavBar brand="Acme" />
      <div className="mx-auto max-w-xl px-6 py-8">
        <p className="mb-3 text-sm">
          <Link to="/billing" className="text-[#2563EB] no-underline hover:underline">
            Billing
          </Link>
          <span className="text-[#9CA3AF]"> / </span>
          <span className="text-[#6B7280]">Aging</span>
        </p>

        <h1 className="mb-2 text-2xl font-bold text-[#374151]">Accounts receivable aging</h1>
        <p className="mb-6 text-sm text-[#6B7280]">Snapshot only — not wired to a live ledger.</p>

        <div className="flex flex-col gap-3">
          {buckets.map((b) => (
            <div
              key={b.label}
              className="flex items-center justify-between rounded-lg border border-[#E5E7EB] bg-white p-4 text-[15px]"
              style={{ borderLeftWidth: 4, borderLeftColor: b.color }}
            >
              <span className="font-semibold text-[#374151]">{b.label}</span>
              <span className="font-semibold text-[#111827]">{b.amount}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <BigButton variant="ghost" onClick={() => navigate('/billing')}>
            ← Back to invoices
          </BigButton>
        </div>
      </div>
    </div>
  )
}
