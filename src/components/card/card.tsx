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
import CardMenu from '../menu/menu'
import themeMaker from '../../features/themeMaker'
import { cardDataType } from '../../features/types'

type card = {
  index: number
  data: cardDataType
}

const CardM = (props: card) => {
  const { index, data } = props
  const { bgColor, txtColor } = themeMaker()
  const dispatch = useAppDispatch()

  const handleMenu = (): void => {
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
        title={data ? data.title : 'initialTitle'}
        action={
          <Tooltip title="tooltip" placement="top">
            <IconButton
              sx={{
                color: txtColor,
              }}
              onClick={handleMenu}
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
        src={data ? data.imgSrc : 'initialTitle'}
        alt="Card Media Alt"
      />
      <CardMenu index={index} />
      <CardContent>
        {data ? data.text : 'initialTitle'}
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
