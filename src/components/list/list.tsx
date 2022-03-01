import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import themeMaker from '../../features/themeMaker'
import data from './data'

const ListM = () => {
  const { bgColor, txtColor } = themeMaker()
  const items = data()

  return (
    <List
      sx={{
        background: bgColor,
        color: txtColor,
      }}
    >
      {items.map((item) => (
        <ListItem alignItems="flex-start" key={item.id}>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary={item.primary}
            sx={{
              color: txtColor,
            }}
            secondary={<Typography variant="body2">{item.secondary}</Typography>}
          />
        </ListItem>
      ))}
      <Divider variant="middle" />
    </List>
  )
}

export default ListM
