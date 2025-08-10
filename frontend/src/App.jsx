import NavBar from './components/NavBar.jsx'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import AddCatch from './pages/AddCatch.jsx'
import MyCatches from './pages/MyCatches.jsx'
import { AppShell, Text } from '@mantine/core'

export default function App() {

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <NavBar />
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addcatch" element={<AddCatch />} />
          <Route path="/mycatches" element={<MyCatches />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}
