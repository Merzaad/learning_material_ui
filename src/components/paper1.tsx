import * as React from 'react'
import { Paper } from '@mui/material'
import AccordionM from './accordion/accordion'
import themeMaker from '../features/themeMaker'

export default function Paper1() {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '10px',
        background: paperColor,
      }}
    >
      <AccordionM accordionId={0} />
      <AccordionM accordionId={1} />
      <AccordionM accordionId={2} />
      <AccordionM accordionId={3} />

    </Paper>
  )
}
