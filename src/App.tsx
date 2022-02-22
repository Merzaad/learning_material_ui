import React from 'react'
import { Grid, Box } from '@mui/material'
import { useAppSelector } from './app/hooks'
import { darkMode } from './features/layoutSlice'
import PaperM from './components/paperM'
import NavbarM from './components/navbar/navbar'

function App() {
  const dark = useAppSelector(darkMode)
  return (
    <Box
      sx={{
        padding: '20px',
        background: dark ? '#222831' : '#EEEEEE',
        height: '100vh',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <NavbarM />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaperM />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaperM />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaperM />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaperM />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
