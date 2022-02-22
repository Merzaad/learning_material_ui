import * as React from 'react'
import { Paper } from '@mui/material'
import { useAppSelector } from '../app/hooks'
import { darkMode } from '../features/layoutSlice'
import AccordionM from './accordion/accordion'

export default function PaperBL() {
  const dark = useAppSelector(darkMode)
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '10px',
        background: dark ? '#203239' : '#D1D1D1',
      }}
    >
      <AccordionM accordionId={0} />
      <AccordionM accordionId={1} />
      <AccordionM accordionId={2} />
      <AccordionM accordionId={3} />

    </Paper>
  )
}
