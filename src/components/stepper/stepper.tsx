import * as React from 'react'
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
  Box,
} from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setStepper, stepperActive } from '../../features/layoutSlice'
import themeMaker from '../../features/themeMaker'
import data from './data'

type stepper = {
  index: number
}

const StepperM = (props: stepper) => {
  const dispatch = useAppDispatch()
  const { bgColor, txtColor } = themeMaker()
  const { index } = props
  const steps = data()
  const activeStep = useAppSelector(stepperActive)[index]

  const handleNext = (): void => {
    dispatch(setStepper({ target: index, value: activeStep + 1 }))
  }

  const handleBack = (): void => {
    dispatch(setStepper({ target: index, value: activeStep - 1 }))
  }

  const handleReset = (): void => {
    dispatch(setStepper({ target: index, value: 0 }))
  }

  return (
    <Box
      sx={{
        padding: '10px',
        background: bgColor,
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography
                sx={{
                  color: txtColor,
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography
                sx={{
                  color: txtColor,
                }}
              >
                {step.description}
              </Typography>
              <Box>
                <Button
                  onClick={handleNext}
                  sx={{
                    color: txtColor,
                  }}
                >
                  {step.id === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={step.id === 0}
                  onClick={handleBack}
                  sx={{
                    color: txtColor,
                  }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          sx={{
            padding: '10px',
            background: bgColor,
          }}
        >
          <Typography
            sx={{
              color: txtColor,
            }}
          >
            All steps completed - you&apos;re finished
          </Typography>
          <Button
            onClick={handleReset}
            sx={{
              color: txtColor,
            }}
          >
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  )
}
export default StepperM
