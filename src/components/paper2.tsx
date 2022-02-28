import * as React from 'react'
import { Paper } from '@mui/material'
import themeMaker from '../features/themeMaker'
import StepperM from './stepper/stepper'

const Paper2 = () => {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '5px',
        background: paperColor,
      }}
    >
      <StepperM stepperId={0} />
    </Paper>
  )
}
export default Paper2
