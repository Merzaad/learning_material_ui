import * as React from 'react'
import { Paper } from '@mui/material'
import themeMaker from '../features/themeMaker'
import MdataGrid from './dataGrid/dataGrid'

export default function Paper3() {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '10px',
        background: paperColor,
      }}
    >
      <MdataGrid />
    </Paper>
  )
}
