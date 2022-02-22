import * as React from 'react'
import {
  Menu, MenuItem,
} from '@mui/material'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { cardMenu, toggleCardMenu } from '../features/layoutSlice'

export default function MenuM(props: {ancherId: number}) {
  const { ancherId } = props
  const ancher = document.getElementById(`cardMenu${ancherId}`)
  const dispatch = useAppDispatch()
  const menu = useAppSelector(cardMenu)
  const close = () : void => {
    dispatch(toggleCardMenu(ancherId))
  }
  return (
    <Menu
      anchorEl={ancher}
      open={menu[ancherId]}
      onClose={close}
      elevation={0}
    >
      <MenuItem onClick={close}>Bookmark</MenuItem>
      <MenuItem onClick={close}>Delete</MenuItem>
    </Menu>
  )
}
