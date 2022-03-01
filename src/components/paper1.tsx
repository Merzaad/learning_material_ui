import * as React from 'react'
import { Paper } from '@mui/material'
import AccordionM from './accordion/accordion'
import themeMaker from '../features/themeMaker'

const Paper1 = () => {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '5px',
        background: paperColor,
      }}
    >
      <AccordionM index={0} />
      <AccordionM index={1} />
      <AccordionM index={2} />
      <AccordionM index={3} />
    </Paper>
  )
}
export default Paper1
