import * as React from 'react'
import { Paper } from '@mui/material'
import themeMaker from '../features/themeMaker'
import TabM from './tab/tab'

const Paper6 = () => {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '5px',
        background: paperColor,
      }}
    >
      <TabM index={0} />
    </Paper>
  )
}

export default Paper6
