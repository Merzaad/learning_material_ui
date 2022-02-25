import * as React from 'react'
import {
  Card, CardHeader, CardContent, IconButton, Tooltip, CardMedia, CardActions,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
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
      key={cardId}
      sx={{
        background: dark ? '#141E27' : '#E0DDAA',
        color: dark ? '#E0DDAA' : '#141E27',
      }}
    >
      <CardHeader
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
      <CardMedia
        component="img"
        height="194"
        src="https://mui.com/static/images/cards/paella.jpg"
        alt="Card Media Alt"
      />
      <CardMenu ancherId={cardId} />
      <CardContent>
        Using this approach in production is discouraged though
        - the client has to download the entire library, regardless
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon
            sx={{
              color: dark ? '#E0DDAA' : '#141E27',
            }}
          />
        </IconButton>
        <IconButton>
          <ShareIcon
            sx={{
              color: dark ? '#E0DDAA' : '#141E27',
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  )
}
