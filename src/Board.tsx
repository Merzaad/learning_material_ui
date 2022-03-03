import React from 'react'
import { Grid } from '@mui/material'
import CardM from './components/card/card'
import themeMaker from './features/themeMaker'
import { useAppSelector } from './app/hooks'
import { selectTestDataBase } from './features/layoutSlice'

const Board = () => {
  const { appColor } = themeMaker()
  const testDataBase = useAppSelector(selectTestDataBase)
  const board = testDataBase.map((data) => (
    <Grid key={data.index} item xs={12} md={3}>
      <CardM data={data} />
    </Grid>
  ))
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

export default Board
