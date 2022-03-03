import * as React from 'react'
import { Paper } from '@mui/material'
import themeMaker from '../../features/themeMaker'
import ListM from '../list/list'

const Paper5 = () => {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '5px',
        background: paperColor,
      }}
    >
      <ListM />
    </Paper>
  )
}

export default Paper5
