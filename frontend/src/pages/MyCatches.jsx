import { Container, Title, Stack, Text } from '@mantine/core'
import CatchCard from '../components/CatchCard.jsx'
import { useEffect, useState } from 'react'
import api from '../api'

function MyCatches() {
  const [catches, setCatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    api
      .get('/api/catch')
      .then((res) => {
        if (!active) return
        setCatches(Array.isArray(res.data) ? res.data : [])
      })
      .catch((err) => {
        if (!active) return
        setError(err?.response?.data || err.message || 'Failed to load catches')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <Container fluid px="sm">
      <Title order={2} mb="md">
        My Catches
      </Title>
      <Stack gap="md">
        {catches.map((c, i) => (
          <CatchCard key={i} {...c} />
        ))}
      </Stack>
      {loading && <Text>Loading...</Text>}
      {error && <Text color="red">{error}</Text>}
    </Container>
  )
}

export default MyCatches