import React from 'react'
import { Grid } from '@mui/material'
import { useAppSelector } from './app/hooks'
import { darkMode } from './features/layoutSlice'
import PaperTL from './components/paperTL'
import NavbarM from './components/navbar/navbar'
import PaperM from './components/paperM'
import PaperTR from './components/paperTR'
import PaperBL from './components/paperBL'

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
          <PaperTL />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaperTR />
        </Grid>
        <Grid item xs={12} md={12}>
          <PaperM />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaperBL />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaperTL />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
