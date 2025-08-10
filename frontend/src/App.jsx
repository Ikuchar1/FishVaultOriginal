import { useEffect, useState } from 'react'
import api from './api'
import NavBar from './components/NavBar.jsx'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'

export default function App() {
  // const [catches, setCatches] = useState([])
  // const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/api/catch')
      .then(res => setCatches(res.data))
      .catch(err => setError(err.message))
  }, [])

  return (
    // <div style={{ padding: 16 }}>
    //   <h1>FishVault</h1>
    //   {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    //   <ul>
    //     {catches.map(c => (
    //       <li key={c.id}>
    //         {c.species} — {c.length}" — {c.weight} lbs @ {c.location}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </div>
  )
}
