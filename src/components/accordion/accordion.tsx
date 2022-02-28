import * as React from 'react'
import {
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import themeMaker from '../../features/themeMaker'
import {
  toggleAccordion, accordionDrop,
} from '../../features/layoutSlice'

const AccodrionM = (props: {accordionId: number}) => {
  const { accordionId } = props
  const dispatch = useAppDispatch()
  const expandedAccordion = useAppSelector(accordionDrop)[accordionId]
  const open = (): void => {
    dispatch(toggleAccordion(accordionId))
  }
  const { bgColor, txtColor } = themeMaker()

  return (
    <Accordion
      expanded={expandedAccordion}
      onChange={open}
      sx={{
        background: bgColor,
        color: txtColor,
      }}
    >
      <AccordionSummary
        expandIcon={(
          <MoreHorizIcon
            sx={{
              color: txtColor,
            }}
          />
)}
      >

        {`AccordionSummary${accordionId}`}
      </AccordionSummary>
      <AccordionDetails>
        Using this approach in production is discouraged though - the
        client has to download the entire library, regardless
      </AccordionDetails>
    </Accordion>
  )
}

export default AccodrionM