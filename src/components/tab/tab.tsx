import * as React from 'react'
import { Box, Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { tabAcive, setTab, darkMode } from '../../features/layoutSlice'

export default function TabM(props:{tabId:number}) {
  const { tabId } = props
  const dipatch = useAppDispatch()
  const activeTab = useAppSelector(tabAcive)
  const dark = useAppSelector(darkMode)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dipatch(setTab({ target: tabId, value: newValue }))
  }

  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
        color: dark ? '#E0DDAA' : '#141E27',

      }}
    >
      <TabContext
        value={activeTab[tabId]}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab
              label="Item 0"
              value="0"
              sx={{
                color: dark ? '#E0DDAA' : '#141E27',
              }}
            />
            <Tab label="Item 1" value="1" />
          </TabList>
        </Box>
        <TabPanel
          value="0"
          sx={{
            background: dark ? '#141E27' : '#E0DDAA',
          }}
        >
          MUI provides a simple, customizable, and accessible library of React
          components. Follow your own design system, or start with Material Design.
        </TabPanel>
        <TabPanel
          value="1"
          sx={{
            background: dark ? '#141E27' : '#E0DDAA',
          }}
        >
          What is material UI for?
          Image result for material ui
          Material-UI is simply a library that allows us to import and use
          different components to create a user interface in our React
        </TabPanel>
      </TabContext>
    </Box>
  )
}
