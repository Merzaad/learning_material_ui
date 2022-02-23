import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '../../app/hooks'
import { darkMode } from '../../features/layoutSlice'

const items = [
  {
    primary: 'Item0',
    secondary: 'to Scott, Alex, Jennifer  — Wish I could come, but I\'m out of town this',
  },
  {
    primary: 'Item1',
    secondary: 'to Scott, Alex, Jennifer  — Wish I could come, but I\'m out of town this',
  },
]

export default function ListM() {
  const dark = useAppSelector(darkMode)
  return (
    <List
      sx={{
        background: dark ? '#141E27' : '#E0DDAA',
        color: dark ? '#E0DDAA' : '#141E27',
      }}
    >
      {items.map((item) => (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary={item.primary}
            sx={{
              color: dark ? '#E0DDAA' : '#141E27',
            }}
            secondary={(
              <Typography
                variant="body2"
              >
                {item.secondary}
              </Typography>
          )}
          />
        </ListItem>
      ))}
      <Divider variant="inset" component="li" />
    </List>
  )
}
