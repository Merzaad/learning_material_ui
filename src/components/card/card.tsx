import * as React from 'react'
import {
  Card, CardHeader, CardContent, IconButton, Tooltip,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { darkMode, toggleCardMenu } from '../../features/layoutSlice'
import CardMenu from './cardMenu'

export default function CardM(props: {cardId: number}) {
  const { cardId } = props
  const dispatch = useAppDispatch()
  const open = (): void => {
    dispatch(toggleCardMenu(cardId))
  }
  const dark = useAppSelector(darkMode)
  return (
    <Card
      sx={{
        background: dark ? '#141E27' : '#E0DDAA',
        color: dark ? '#E0DDAA' : '#141E27',
      }}
    >
      <CardHeader
        key={cardId}
        title={`cardItem${cardId}`}
        action={(
          <Tooltip title="tooltip" placement="top">
            <IconButton
              sx={{
                color: dark ? '#E0DDAA' : '#141E27',
              }}
              onClick={open}
              id={`cardMenu${cardId}`}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        )}
        sx={{
          position: 'relative',
        }}
      />
      <CardMenu ancherId={cardId} />
      <CardContent>
        Using this approach in production is discouraged though
        - the client has to download the entire library, regardless
      </CardContent>
    </Card>
  )
}
