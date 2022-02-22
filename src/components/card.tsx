import * as React from 'react'
import {
  Card, CardHeader, CardContent, IconButton, Tooltip,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useAppSelector } from '../app/hooks'
import { darkMode } from '../features/layoutSlice'

export default function Mcard() {
  const dark = useAppSelector(darkMode)
  return (
    <Card
      sx={{
        background: dark ? '#141E27' : '#E0DDAA',
        color: dark ? '#E0DDAA' : '#141E27',
      }}
    >
      <CardHeader
        title="CardTtile"
        action={(
          <Tooltip title="tooltip">
            <IconButton
              sx={{
                color: dark ? '#E0DDAA' : '#141E27',
              }}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        )}
      />
      <CardContent>
        Using this approach in production is discouraged though
        - the client has to download the entire library, regardless
      </CardContent>
    </Card>
  )
}
