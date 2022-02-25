import * as React from 'react'

import {
  Box, IconButton, Snackbar, Button,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { snackbarOpen, toggleSnackbar } from '../../features/layoutSlice'
import themeMaker from '../../features/themeMaker'

export default function SnackbarM(props:{snackbarId: number}) {
  const { snackbarId } = props
  const { bgColor, txtColor } = themeMaker()
  const open = useAppSelector(snackbarOpen)[snackbarId]
  const dispatch = useAppDispatch()

  const handleClick = (): void => {
    dispatch(toggleSnackbar({ target: snackbarId, value: true }))
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(toggleSnackbar({ target: snackbarId, value: false }))
  }

  const action = (
    <IconButton
      onClick={handleClose}
    >
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
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Snackbar message"
        action={action}
      />
    </Box>
  )
}
