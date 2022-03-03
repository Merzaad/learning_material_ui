import * as React from 'react'
import { Paper } from '@mui/material'
import themeMaker from '../../features/themeMaker'
import DataGridM from '../dataGrid/dataGrid'

const Paper3 = () => {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '5px',
        background: paperColor,
      }}
    >
      <DataGridM />
    </Paper>
  )
}
export default Paper3
