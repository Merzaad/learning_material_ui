/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Tooltip,
  CardMedia,
  CardActions,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useAppDispatch } from '../../app/hooks'
import { toggleCardMenu } from '../../features/layoutSlice'
import MenuM from '../menu/menu'
import themeMaker from '../../features/themeMaker'

type card = {
  index: number
}

const CardM = (props: card) => {
  const { index } = props
  const { bgColor, txtColor } = themeMaker()
  const dispatch = useAppDispatch()

  const handleClick = (): void => {
    dispatch(toggleCardMenu(index))
  }

  return (
    <Card
      key={index}
      sx={{
        background: bgColor,
        color: txtColor,
      }}
    >
      <CardHeader
        title={`cardItem${index}`}
        action={
          <Tooltip title="tooltip" placement="top">
            <IconButton
              sx={{
                color: txtColor,
              }}
              onClick={handleClick}
              id={`card${index}`}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        }
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
      <MenuM index={index} />
      <CardContent>
        Using this approach in production is discouraged though - the client has to download the
        entire library, regardless
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
