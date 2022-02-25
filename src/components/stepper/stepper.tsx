import * as React from 'react'
import {
  Paper, Stepper, Step,
  StepLabel, StepContent, Button,
  Typography, Box,
} from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setStepper, stepperActive } from '../../features/layoutSlice'
import themeMaker from '../../features/themeMaker'

const steps = [
  {
    id: 0,
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    id: 1,
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    id: 2,
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
]

export default function StepperM(props: {stepperId: number}) {
  const { bgColor, txtColor } = themeMaker()
  const { stepperId } = props
  const stepper = useAppSelector(stepperActive)
  const activeStep = stepper[stepperId]
  const dispatch = useAppDispatch()
  const handleNext = (): void => {
    dispatch(setStepper({ target: stepperId, value: activeStep + 1 }))
  }
  const handleBack = (): void => {
    dispatch(setStepper({ target: stepperId, value: activeStep - 1 }))
  }
  const handleReset = (): void => {
    dispatch(setStepper({ target: stepperId, value: 0 }))
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
