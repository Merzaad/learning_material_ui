import * as React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'

const actions = [
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
]

const SpeedDialM = () => (
  <Box>
    <SpeedDial
      ariaLabel="SpeedDialM"
      sx={{
        position: 'fixed',
        bottom: 10,
        right: 10,
      }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  </Box>
)

export default SpeedDialM
