import * as React from 'react'
import {
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleAccordion, accordionDrop, darkMode } from '../../features/layoutSlice'

export default function AccodrionM(props: {accordionId: number}) {
  const { accordionId } = props
  const dispatch = useAppDispatch()
  const expanded = useAppSelector(accordionDrop)[accordionId]
  const dark = useAppSelector(darkMode)
  const open = (): void => {
    dispatch(toggleAccordion(accordionId))
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={open}
      sx={{
        background: dark ? '#141E27' : '#E0DDAA',
        color: dark ? '#E0DDAA' : '#141E27',
      }}
    >
      <AccordionSummary
        expandIcon={<MoreHorizIcon />}
      >
        AccordionSummary
      </AccordionSummary>
      <AccordionDetails>
        Using this approach in production is discouraged though - the
        client has to download the entire library, regardless
      </AccordionDetails>
    </Accordion>
  )
}
