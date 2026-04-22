import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import BigButton from '../components/BigButton.jsx'

export default function EmptyThing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <NavBar brand="Acme" />
      <div className="mx-auto max-w-lg px-6 py-12 text-center">
        <div className="mx-auto mt-3 flex h-44 max-w-md items-center justify-center rounded-xl border-2 border-dashed border-[#D1D5DB] bg-[#F9FAFB] text-sm text-[#9CA3AF]">
          illustration placeholder
        </div>

        <h1 className="mb-3 mt-7 text-2xl font-semibold text-[#374151]">No reports yet</h1>
        <p className="mb-6 text-[15px] leading-relaxed text-[#6B7280]">
          Connect a data source or import a CSV to see charts here. This screen is intentionally sparse.
        </p>

        <BigButton variant="ghost" extraStyle={{ marginTop: 4 }} onClick={() => navigate('/dashboard')}>
          Back to dashboard
        </BigButton>
      </div>
    </div>
  )
}
