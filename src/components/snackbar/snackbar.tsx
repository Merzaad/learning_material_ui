/* eslint-disable object-curly-newline */
import * as React from 'react'

import { Box, IconButton, Snackbar, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { snackbarOpen, toggleSnackbar, testApiSetData } from '../../features/layoutSlice'
import themeMaker from '../../features/themeMaker'
import testApi from '../../features/testApi'

type snackbar = {
  index: number
}

const SnackbarM = (props: snackbar) => {
  const { index } = props
  const { bgColor, txtColor } = themeMaker()
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(snackbarOpen)[index]

  const handleRequest = (): void => {
    dispatch(toggleSnackbar({ target: index, value: true }))
    testApi()
      .then((data) => {
        for (let i = 0; i < 10; i += 1) {
          dispatch(testApiSetData({
            index: i,
            text: data.articles[i].description,
            title: data.articles[i].title,
            imgSrc: data.articles[i].urlToImage,
          }))
        }
      })
      .catch((error) => console.log(`handleClick -> error : ${error}`))
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
        onClick={handleRequest}
      >
        snackbar + testApi
      </Button>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Api called check console"
        action={action}
      />
    </Box>
  )
}

export default SnackbarM
