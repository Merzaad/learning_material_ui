import * as React from 'react'
import { Paper } from '@mui/material'
import themeMaker from '../features/themeMaker'
import SnackbarM from './snackbar/snackbar'

const Paper7 = () => {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '5px',
        background: paperColor,
      }}
    >
      <SnackbarM index={0} />
    </Paper>
  )
}
export default Paper7
