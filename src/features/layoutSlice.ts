import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { LayoutState, cardDataType } from './types'

const initialState: LayoutState = {
  darkMode: !!(localStorage.getItem('darkMode') === 'true'),
  cardMenuOpen: [],
  accordionDrop: [false, false, false, false],
  stepperActive: [0],
  tabActive: ['0'],
  snackbarOpen: [false],
  testCardData: [],
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const x = state
      x.darkMode = !x.darkMode
      localStorage.setItem('darkMode', String(x.darkMode))
    },
    toggleCardMenu: (state, action: PayloadAction<number>) => {
      const x = state
      const id = action.payload
      x.cardMenuOpen[id] = !x.cardMenuOpen[id]
    },
    toggleAccordion: (state, action: PayloadAction<number>) => {
      const x = state
      const id = action.payload
      x.accordionDrop[id] = !x.accordionDrop[id]
    },
    changeStepper: (state, action: PayloadAction<{target: number, value: number}>) => {
      const x = state
      const id = action.payload.target
      x.stepperActive[id] = action.payload.value
    },
    changeTab: (state, action: PayloadAction<{target: number, value: string}>) => {
      const x = state
      const id = action.payload.target
      x.tabActive[id] = action.payload.value
    },
    toggleSnackbar: (state, action: PayloadAction<{target: number, value: boolean}>) => {
      const x = state
      const id = action.payload.target
      x.snackbarOpen[id] = action.payload.value
    },
    testApiSetData: (state, action: PayloadAction<cardDataType>) => {
      const x = state
      const data = action.payload
      const { index } = data
      x.testCardData[index] = data
    },
  },
})

export const selectDarkMode = (state: RootState) => state.layout.darkMode
export const selectTestData = (state: RootState) => state.layout.testCardData
export const cardMenuOpen = (state: RootState) => state.layout.cardMenuOpen
export const accordionDrop = (state: RootState) => state.layout.accordionDrop
export const stepperActive = (state: RootState) => state.layout.stepperActive
export const tabAcive = (state: RootState) => state.layout.tabActive
export const snackbarOpen = (state: RootState) => state.layout.snackbarOpen

export const {
  toggleDarkMode, toggleCardMenu, toggleAccordion,
  changeStepper, changeTab, toggleSnackbar, testApiSetData,
} = layoutSlice.actions

export default layoutSlice.reducer
