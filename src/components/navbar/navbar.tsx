import * as React from 'react'
import { Container, Switch } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectDarkMode, toggleDarkMode } from '../../features/layoutSlice'

const navbarM = () => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(selectDarkMode)

  const handleChange = (): void => {
    dispatch(toggleDarkMode())
  }
  return (
    <Container>
      <Switch checked={darkMode} onChange={handleChange} color="default" />
    </Container>
  )
}
export default navbarM
