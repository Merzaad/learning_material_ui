import * as React from 'react'
import {
  Card, CardHeader, CardContent, IconButton, Tooltip,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { darkMode, toggleCardMenu, cardMenu } from '../features/layoutSlice'
import MenuM from './menu'

export default function CardM(props: {cardId: number}) {
  const { cardId } = props
  const dispatch = useAppDispatch()
  const open = (): void => {
    dispatch(toggleCardMenu(cardId))
  }
  const isOpen = useAppSelector(cardMenu)
  const dark = useAppSelector(darkMode)
  return (
    <Card
      sx={{
        background: dark ? '#141E27' : '#E0DDAA',
        color: dark ? '#E0DDAA' : '#141E27',
      }}
    >
      <CardHeader
        title={`cardItem${cardId}`}
        action={(
          <Tooltip title="tooltip">
            <IconButton
              sx={{
                color: dark ? '#E0DDAA' : '#141E27',
              }}
              onClick={open}
              id={`cardMenu${cardId}`}
              aria-controls={isOpen ? 'basic-menu' : undefined}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        )}
        sx={{
          position: 'relative',
        }}
      />
      <MenuM ancherId={cardId} />
      <CardContent>
        Using this approach in production is discouraged though
        - the client has to download the entire library, regardless
      </CardContent>
    </Card>
  )
}
