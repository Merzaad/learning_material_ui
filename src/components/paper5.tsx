import * as React from 'react'
import { Paper } from '@mui/material'
import { useAppSelector } from '../app/hooks'
import { darkMode } from '../features/layoutSlice'
import ListM from './list/list'

export default function Paper5() {
  const dark = useAppSelector(darkMode)
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '10px',
        background: dark ? '#203239' : '#D1D1D1',
      }}
    >
      <ListM />
    </Paper>
  )
}
