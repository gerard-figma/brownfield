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
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      <NavBar brand="Acme" />
      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-[#374151]" style={{ fontSize: 24, fontWeight: 600, marginTop: 0, marginBottom: 8 }}>
          Workspace settings
        </h1>
        <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 22 }}>
          Changes apply to this environment only.
        </p>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            padding: '22px 24px',
            marginTop: 12,
          }}
        >
          <InputField
            labelText="Workspace name"
            id="ws-name"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            placeholder="e.g. Acme"
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Email notifications</div>
              <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 3 }}>Digest to admins</div>
            </div>
            <ToggleSwitch isOn={notifyEmail} whenToggle={setNotifyEmail} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, marginTop: 8 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Beta features</div>
              <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 3 }}>May be unstable</div>
            </div>
            <ToggleSwitch isOn={betaFeatures} whenToggle={setBetaFeatures} />
          </div>

          <label htmlFor="region" style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
            Data region
          </label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={{
              width: '100%',
              padding: '9px 11px',
              borderRadius: 6,
              border: '1px solid #D1D5DB',
              fontSize: 14,
              color: '#111827',
              marginBottom: 20,
              backgroundColor: '#FFFFFF',
            }}
          >
            <option value="us-east">US East (#3B82F6)</option>
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
