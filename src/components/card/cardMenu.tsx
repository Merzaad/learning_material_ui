import * as React from 'react'
import {
  Menu, MenuItem,
} from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { cardMenuOpen, toggleCardMenu } from '../../features/layoutSlice'

export default function CardMenu(props: {ancherId: number}) {
  const { ancherId } = props
  const ancher = document.getElementById(`card${ancherId}`)
  const dispatch = useAppDispatch()
  const menuOpen = useAppSelector(cardMenuOpen)
  const close = () : void => {
    dispatch(toggleCardMenu(ancherId))
  }
  return (
    <Menu
      anchorEl={ancher}
      open={!!menuOpen[ancherId]}
      onClose={close}
      elevation={0}
    >
      <MenuItem onClick={close}>Bookmark</MenuItem>
      <MenuItem onClick={close}>Delete</MenuItem>
    </Menu>
  )
}
