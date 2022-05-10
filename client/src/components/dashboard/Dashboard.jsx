import { Box } from '@mantine/core'
import React from 'react'
import Collections from './Collections'
import Header from './Header'
import Lists from './Lists'

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <Collections />
      <Lists />
    </Box>
  )
}

export default Dashboard