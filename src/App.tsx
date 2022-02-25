import React from 'react'
import { Grid } from '@mui/material'
import { useAppSelector } from './app/hooks'
import { darkMode } from './features/layoutSlice'
import Paper1 from './components/paper1'
import Paper2 from './components/paper2'
import Paper3 from './components/paper3'
import Paper4 from './components/paper4'
import Paper5 from './components/paper5'
import Paper6 from './components/paper6'
import Paper7 from './components/paper7'

import SpeedDialM from './components/speedDial/speedDial'
import NavbarM from './components/navbar/navbar'

function App() {
  const dark = useAppSelector(darkMode)
  return (
    <div
      style={{
        padding: '20px',
        background: dark ? '#222831' : '#EEEEEE',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <NavbarM />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper3 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper4 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper1 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper5 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper6 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper7 />
        </Grid>
      </Grid>
      <SpeedDialM />
    </div>
  )
}

export default App
