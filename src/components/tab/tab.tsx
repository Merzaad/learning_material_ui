import * as React from 'react'
import { Box, Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { tabAcive, changeTab } from '../../features/layoutSlice'
import themeMaker from '../../features/themeMaker'

type tab = {
  index: number
}

const TabM = (props: tab) => {
  const { index } = props
  const dipatch = useAppDispatch()
  const activeTab = useAppSelector(tabAcive)
  const { bgColor, txtColor } = themeMaker()

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    dipatch(changeTab({ target: index, value: newValue }))
  }

  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
        color: txtColor,
      }}
    >
      <TabContext value={activeTab[index]}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange}>
            <Tab
              label={`Tab ${index} Item 1`}
              value="0"
              sx={{
                color: txtColor,
              }}
            />
            <Tab
              label={`Tab ${index} Item 2`}
              value="1"
              sx={{
                color: txtColor,
              }}
            />
          </TabList>
        </Box>
        <TabPanel
          value="0"
          sx={{
            background: bgColor,
          }}
        >
          MUI provides a simple, customizable, and accessible library of React components. Follow
          your own design system, or start with Material Design.
        </TabPanel>
        <TabPanel
          value="1"
          sx={{
            background: bgColor,
          }}
        >
          What is material UI for? Image result for material ui Material-UI is simply a library that
          allows us to import and use different components to create a user interface in our React
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default TabM
