function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Card maxW="lg" m={8}>
      <CardBody>
        <Heading size="md">FishVault</Heading>
        <Text color="gray.600" mb={3}>Track your catches in style.</Text>
        <Button colorScheme="teal">Add Catch</Button>
      </CardBody>
    </Card>
    </div>
  )
}

export default Dashboard
