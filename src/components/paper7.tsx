import * as React from 'react'
import { Paper } from '@mui/material'
import { useAppSelector } from '../app/hooks'
import { darkMode } from '../features/layoutSlice'
import SnackbarM from './snackbar/snackbar'

export default function Paper6() {
  const dark = useAppSelector(darkMode)
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '10px',
        background: dark ? '#203239' : '#D1D1D1',
      }}
    >
      <SnackbarM snackbarId={0} />
    </Paper>
  )
}
