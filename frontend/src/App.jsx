import { useEffect, useState } from 'react'
import api from './api'

export default function App() {
  const [catches, setCatches] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/api/catch')
      .then(res => setCatches(res.data))
      .catch(err => setError(err.message))
  }, [])

  return (
    <div style={{ padding: 16 }}>
      <h1>FishVault</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {catches.map(c => (
          <li key={c.id}>
            {c.species} — {c.length}" — {c.weight} lbs @ {c.location}
          </li>
        ))}
      </ul>
    </div>
  )
}
