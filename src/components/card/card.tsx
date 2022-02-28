import * as React from 'react'
import {
  Card, CardHeader, CardContent, IconButton, Tooltip, CardMedia, CardActions,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useAppDispatch } from '../../app/hooks'
import { toggleCardMenu } from '../../features/layoutSlice'
import CardMenu from './cardMenu'
import themeMaker from '../../features/themeMaker'

const CardM = (props: {cardId: number}) => {
  const { cardId } = props
  const { bgColor, txtColor } = themeMaker()
  const dispatch = useAppDispatch()

  const open = (): void => {
    dispatch(toggleCardMenu(cardId))
  }
  return (
    <Card
      key={cardId}
      sx={{
        background: bgColor,
        color: txtColor,
      }}
    >
      <CardHeader
        title={`cardItem${cardId}`}
        action={(
          <Tooltip title="tooltip" placement="top">
            <IconButton
              sx={{
                color: txtColor,
              }}
              onClick={open}
              id={`card${cardId}`}
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
              color: txtColor,
            }}
          />
        </IconButton>
        <IconButton>
          <ShareIcon
            sx={{
              color: txtColor,
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CardM
