import * as React from 'react'
import { Paper } from '@mui/material'
import themeMaker from '../features/themeMaker'
import StepperM from './stepper/stepper'

export default function Paper2() {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '10px',
        background: paperColor,
      }}
    >
      <StepperM stepperId={0} />
    </Paper>
  )
}
