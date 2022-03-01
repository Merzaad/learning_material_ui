import * as React from 'react'

import { Box, IconButton, Snackbar, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { snackbarOpen, toggleSnackbar } from '../../features/layoutSlice'
import themeMaker from '../../features/themeMaker'

type snackbar = {
  index: number
}

const SnackbarM = (props: snackbar) => {
  const { index } = props
  const { bgColor, txtColor } = themeMaker()
  const isOpen = useAppSelector(snackbarOpen)[index]
  const dispatch = useAppDispatch()

  const handleClick = (): void => {
    dispatch(toggleSnackbar({ target: index, value: true }))
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(toggleSnackbar({ target: index, value: false }))
  }

  const action = (
    <IconButton onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  )

  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          color: txtColor,
          background: bgColor,
          ':hover': {
            background: bgColor,
            color: txtColor,
          },
        }}
        onClick={handleClick}
      >
        Snackbar
      </Button>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Snackbar message"
        action={action}
      />
    </Box>
  )
}

export default SnackbarM
