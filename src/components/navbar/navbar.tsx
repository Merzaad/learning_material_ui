import * as React from 'react'
import { Container, Switch } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectDarkMode, toggleDarkMode } from '../../features/layoutSlice'

export default function NavbarM() {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(selectDarkMode)

  const toggleDark = (): void => {
    dispatch(toggleDarkMode())
  }
  return (
    <Container>
      <Switch
        checked={darkMode}
        onChange={toggleDark}
        color="default"
      />
    </Container>
  )
}
