import { Card, Group, Text, AspectRatio, Image, Divider, ActionIcon, Tooltip, ThemeIcon, Badge } from '@mantine/core'
import { IconCamera, IconPencil, IconTrash } from '@tabler/icons-react'

// Helpers
function formatInches(value) {
  if (value == null || isNaN(value)) return ''
  return `${Number(value).toFixed(1)} in`
}

function formatPounds(value) {
  if (value == null || isNaN(value)) return ''
  return `${Number(value).toFixed(1)} lbs`
}

export default function CatchCard(props) {
  const {
    species,
    length,
    weight,
    location,
    notes,
    createdAt,
    imageUrl,
  } = props

  const dateLabel = createdAt ? new Date(createdAt).toLocaleDateString() : ''
  const hasImage = Boolean(imageUrl)

  return (
    <Card withBorder radius="md" shadow="sm" p={0} w="100%" style={{ overflow: 'hidden' }}>
      {/* Image area - portrait ratio for phone photos, edge-to-edge */}
      <AspectRatio ratio={3 / 4}>
        {hasImage ? (
          <Image
            src={imageUrl}
            alt={species ? `${species} photo` : 'Catch photo'}
            fit="cover"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'var(--mantine-color-gray-1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'var(--mantine-color-dimmed)',
            }}
            aria-label="No photo yet"
          >
            <ThemeIcon variant="light" size={48} radius="xl" color="gray">
              <IconCamera size={28} />
            </ThemeIcon>
            <Text size="sm" c="dimmed" mt={6}>
              No photo yet
            </Text>
          </div>
        )}
      </AspectRatio>

      {/* Body */}
      <div style={{ padding: 'var(--mantine-spacing-sm)' }}>
        <Group justify="space-between" align="flex-start">
          <Text fw={700} size="lg" style={{ lineHeight: 1.2 }}>
            {species || 'Unknown species'}
          </Text>
          {/* Optional small badge to highlight location on mobile */}
          {location && (
            <Badge variant="light" size="sm" radius="sm" title={location}>
              {location}
            </Badge>
          )}
        </Group>

        {/* Subline: length, weight, location (dimmed) */}
        <Text c="dimmed" size="sm" mt={4}>
          {formatInches(length)}
          {length != null && weight != null ? ' • ' : ''}
          {formatPounds(weight)}
          {(location && (length != null || weight != null)) ? ' • ' : ''}
          {location}
        </Text>

        {/* Notes (truncate on small screens) */}
        {notes && (
          <Text size="sm" mt="xs" lineClamp={3}>
            {notes}
          </Text>
        )}
      </div>

      <Divider />

      {/* Footer */}
      <div style={{ padding: 'var(--mantine-spacing-sm)' }}>
        <Group justify="space-between" align="center">
          <Text size="xs" c="dimmed">
            {dateLabel ? `Logged on ${dateLabel}` : ''}
          </Text>
          <Group gap="xs">
            <Tooltip label="Edit" withArrow>
              <ActionIcon variant="subtle" color="blue" aria-label="Edit" onClick={() => console.log('edit catch')}>
                <IconPencil size={18} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Delete" withArrow>
              <ActionIcon variant="subtle" color="red" aria-label="Delete" onClick={() => console.log('delete catch')}>
                <IconTrash size={18} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </div>
    </Card>
  )
}

// Example usage:
// <CatchCard
//   species="Largemouth Bass"
//   length={14.5}
//   weight={2.3}
//   location="Lake Zorinsky"
//   notes="Wacky rig, overcast."
//   createdAt={new Date().toISOString()}
//   // imageUrl={someUrl} // omit to see placeholder
// />
