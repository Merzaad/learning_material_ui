import * as React from 'react'
import { Container, Switch } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { darkMode, toggleDarkMode } from '../features/layoutSlice'

export default function Navbar() {
  const dispatch = useAppDispatch()
  const dark = useAppSelector(darkMode)
  const toggleDark = (): void => {
    dispatch(toggleDarkMode())
  }
  return (
    <Container>
      <Switch
        checked={dark}
        onChange={toggleDark}
        color="default"
      />
    </Container>
  )
}
