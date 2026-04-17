import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SettingsScreen from './pages/SettingsScreen.jsx'
import EmptyThing from './pages/EmptyThing.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/empty" element={<EmptyThing />} />
      </Routes>
    </BrowserRouter>
  )
}
