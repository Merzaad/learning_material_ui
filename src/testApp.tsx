import React from 'react'
import { Grid } from '@mui/material'
import CardM from './components/card/card'
import themeMaker from './features/themeMaker'
import { useAppSelector } from './app/hooks'
import { selectTestData } from './features/layoutSlice'

const TestApp = () => {
  const { appColor } = themeMaker()
  const board : any[] = []
  for (let i = 2; i < 10; i += 1) {
    const data = useAppSelector(selectTestData)
    board.push(
      <Grid key={i} item xs={12} md={3}>
        <CardM data={data[i]} index={i} />
      </Grid>,
    )
  }
  return (
    <div
      style={{
        padding: '20px',
        background: appColor,
        paddingBottom: '100px',
      }}
    >

      <Grid container spacing={2}>
        {board}
      </Grid>
    </div>
  )
}

export default TestApp
