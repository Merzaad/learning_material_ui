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
import { testDataType } from '../../features/types'

type cardData = {
  data: testDataType
}

const CardM = (props: cardData) => {
  const { data } = props
  const { bgColor, txtColor } = themeMaker()
  const dispatch = useAppDispatch()

  const handleMenu = (): void => {
    dispatch(toggleCardMenu(data.index))
  }

  return (
    <Card
      key={data.index}
      sx={{
        background: bgColor,
        color: txtColor,
        height: '500px',
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
              id={`card${data.index}`}
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
      <CardMenu index={data.index} />
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
