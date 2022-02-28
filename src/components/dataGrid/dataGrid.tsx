import * as React from 'react'
import {
  Box,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import themeMaker from '../../features/themeMaker'
import data from './data'

const DataGridM = () => {
  const { bgColor, txtColor } = themeMaker()
  const { rows, columns } = data()
  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          background: bgColor,
          color: txtColor,
        }}
      />
    </Box>
  )
}

export default DataGridM
