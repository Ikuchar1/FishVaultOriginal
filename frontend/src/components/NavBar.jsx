import { AppShell, Group, Text, Avatar, Menu, Tabs, Container, Burger, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown, IconLogout, IconSettings } from '@tabler/icons-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TABS, routeToTab } from './navTabs'

export default function NavBar() {
    const location = useLocation()
    const navigate = useNavigate()
    const [opened, { toggle, close }] = useDisclosure(false)

    const active = routeToTab(location.pathname)

    const handleChange = (val) => {
        if (val) {
            navigate(val)
            close()
        }
    }

    return (
        <AppShell.Header withBorder>
            <Container size="lg">
                <Group justify="space-between" h={60}>
                    {/* Left: Brand + mobile burger */}
                    <Group gap="sm">
                        <Text component={Link} to="/" fw={800} size="xl" style={{ textDecoration: 'none' }}>
                            FishVault
                        </Text>
                        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" hiddenFrom="sm" />
                    </Group>

                    {/* Center/Right: Tabs (desktop) */}
                    <Tabs value={active} onChange={handleChange} visibleFrom="sm" variant="outline">
                        <Tabs.List>
                            {TABS.map((t) => (
                                <Tabs.Tab key={t.value} value={t.value} component={Link} to={t.value}>
                                    {t.label}
                                </Tabs.Tab>
                            ))}
                        </Tabs.List>
                    </Tabs>

                    {/* Right: Profile menu */}
                    <Menu position="bottom-end" withinPortal>
                        <Menu.Target>
                            <UnstyledButton>
                                <Group gap={8} wrap="nowrap">
                                    <Avatar src="https://i.pravatar.cc/100?img=11" radius="xl" size={40} />
                                    <Text size="sm" fw={500}>Ian Kuchar</Text>
                                    <IconChevronDown size={14} />
                                </Group>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item leftSection={<IconSettings size={16} />} component={Link} to="/profile">
                                Account settings
                            </Menu.Item>
                            <Menu.Item leftSection={<IconLogout size={16} />} onClick={() => console.log('logout')}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Container>

            {/* Mobile collapsed nav when burger opened */}
            {opened && (
                <Container size="lg" hiddenFrom="sm" pb="md">
                    <Tabs value={active} onChange={handleChange} variant="pills">
                        <Tabs.List>
                            {TABS.map((t) => (
                                <Tabs.Tab key={t.value} value={t.value} component={Link} to={t.value}>
                                    {t.label}
                                </Tabs.Tab>
                            ))}
                        </Tabs.List>
                    </Tabs>
                </Container>
            )}
        </AppShell.Header>
    )
}