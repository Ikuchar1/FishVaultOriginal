export const TABS = [
  { label: 'Dashboard', value: '/dashboard' },
  { label: 'Add Catch', value: '/addcatch' },
  { label: 'My Catches', value: '/mycatches' },
]

export function routeToTab(pathname) {
  const match = TABS.find((t) => t.value === pathname)
  return match ? match.value : null
}
