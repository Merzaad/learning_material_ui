import React from 'react'
import { Grid, Box } from '@mui/material'
import Mpaper from './components/paper'
import Navbar from './components/navbar'
import { useAppSelector } from './app/hooks'
import { darkMode } from './features/layoutSlice'

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
          <Navbar />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mpaper />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mpaper />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mpaper />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mpaper />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
