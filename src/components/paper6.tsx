import * as React from 'react'
import { Paper } from '@mui/material'
import themeMaker from '../features/themeMaker'
import TabM from './tab/tab'

export default function Paper6() {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '10px',
        background: paperColor,
      }}
    >
      <TabM tabId={0} />
    </Paper>
  )
}
