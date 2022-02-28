import * as React from 'react'
import { Paper, Grid } from '@mui/material'
import Mcard from './card/card'
import themeMaker from '../features/themeMaker'

const Paper4 = () => {
  const { paperColor } = themeMaker()
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '5px',
        background: paperColor,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Mcard cardId={0} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mcard cardId={1} />
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Paper4
