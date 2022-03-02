import * as React from 'react'
import { Box, Switch } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectDarkMode, toggleDarkMode } from '../../features/layoutSlice'

const navbarM = () => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(selectDarkMode)

  const handleDarkMode = (): void => {
    dispatch(toggleDarkMode())
  }
  return (
    <div>
      <Box
        sx={{
          background: 'gray',
          position: 'fixed',
          bottom: '0',
          zIndex: '1',
          width: '100%',
        }}
      >
        <Switch checked={darkMode} onChange={handleDarkMode} color="default" />
      </Box>
      <Outlet />
    </div>
  )
}
export default navbarM
