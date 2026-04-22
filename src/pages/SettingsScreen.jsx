import { useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import { InputField } from '../components/InputField.jsx'
import ToggleSwitch from '../components/ToggleSwitch.jsx'
import BigButton from '../components/BigButton.jsx'

export default function SettingsScreen() {
  const [workspaceName, setWorkspaceName] = useState('Acme Ops')
  const [notifyEmail, setNotifyEmail] = useState(true)
  const [betaFeatures, setBetaFeatures] = useState(false)
  const [region, setRegion] = useState('us-east')

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <NavBar brand="Acme" />
      <div className="mx-auto max-w-2xl px-6 py-8">
        <h1 className="mb-2 text-2xl font-semibold text-[#374151]">Workspace settings</h1>
        <p className="mb-6 text-sm text-[#6B7280]">Changes apply to this environment only.</p>

        <div className="rounded-lg border border-[#E5E7EB] bg-white p-6">
          <InputField
            labelText="Workspace name"
            id="ws-name"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            placeholder="e.g. Acme"
          />

          <div className="mb-2 flex items-center gap-4">
            <div>
              <div className="text-sm font-semibold text-[#374151]">Email notifications</div>
              <div className="mt-1 text-xs text-[#9CA3AF]">Digest to admins</div>
            </div>
            <ToggleSwitch isOn={notifyEmail} whenToggle={setNotifyEmail} />
          </div>

          <div className="mb-5 mt-2 flex items-center gap-4">
            <div>
              <div className="text-sm font-semibold text-[#374151]">Beta features</div>
              <div className="mt-1 text-xs text-[#9CA3AF]">May be unstable</div>
            </div>
            <ToggleSwitch isOn={betaFeatures} whenToggle={setBetaFeatures} />
          </div>

          <label htmlFor="region" className="mb-2 block text-sm font-semibold text-[#374151]">
            Data region
          </label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="mb-5 w-full rounded-md border border-[#D1D5DB] bg-white px-3 py-2 text-sm text-[#111827]"
          >
            <option value="us-east">US East</option>
            <option value="eu-west">EU West</option>
            <option value="apac">APAC</option>
          </select>

          <BigButton variant="primary" extraStyle={{ marginTop: 4 }}>
            Save changes
          </BigButton>
        </div>
      </div>
    </div>
  )
}
