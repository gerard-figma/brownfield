import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import { CardThing } from '../components/CardThing.jsx'
import BigButton from '../components/BigButton.jsx'

export default function IntegrationsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#EFF6FF]">
      <NavBar brand="Acme" />
      <div className="mx-auto max-w-4xl px-6 py-8">
        <h1 className="mb-2 text-[22px] font-bold text-[#1E40AF]">Integrations & webhooks</h1>
        <p className="mb-6 text-sm text-[#6B7280]">
          Connect tools, then pipe metrics into reports or billing alerts.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <CardThing stat="Slack" subtext="Connected" footerNote="#ops-alerts" />
          <CardThing stat="Zapier" subtext="2 zaps" footerNote="Last run 1h ago" />
          <CardThing stat="Segment" subtext="Paused" footerNote="Needs API key" />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <BigButton variant="ghost" onClick={() => navigate('/empty')}>
            View report pipeline
          </BigButton>
          <BigButton variant="primary" extraStyle={{ fontSize: 13 }} onClick={() => navigate('/team')}>
            Pick notify channel (team)
          </BigButton>
        </div>

        <p className="mt-4 text-xs text-[#9CA3AF]">
          API tokens live in{' '}
          <Link to="/settings" className="text-[#2563EB] no-underline hover:underline">
            workspace settings
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
