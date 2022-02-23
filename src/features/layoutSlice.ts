import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface LayoutState {
  darkMode: boolean
  cardMenu: boolean[]
  accordionDrop: boolean[]
  stepperActive: number[]
  tabActive: string[]
}

const initialState: LayoutState = {
  darkMode: !!(localStorage.getItem('darkMode') === 'true'),
  cardMenu: [false, false, false, false],
  accordionDrop: [false, false, false, false],
  stepperActive: [0],
  tabActive: ['0'],
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
      x.cardMenu[id] = !x.cardMenu[id]
    },
    toggleAccordion: (state, action: PayloadAction<number>) => {
      const x = state
      const id = action.payload
      x.accordionDrop[id] = !x.accordionDrop[id]
    },
    setStepper: (state, action: PayloadAction<{target: number, value: number}>) => {
      const x = state
      const id = action.payload.target
      x.stepperActive[id] = action.payload.value
    },
    setTab: (state, action: PayloadAction<{target: number, value: string}>) => {
      const x = state
      const id = action.payload.target
      x.tabActive[id] = action.payload.value
    },
  },
})

export const darkMode = (state: RootState) => state.layout.darkMode
export const cardMenu = (state: RootState) => state.layout.cardMenu
export const accordionDrop = (state: RootState) => state.layout.accordionDrop
export const stepperActive = (state: RootState) => state.layout.stepperActive
export const tabAcive = (state: RootState) => state.layout.tabActive

export const {
  toggleDarkMode, toggleCardMenu, toggleAccordion, setStepper, setTab,
} = layoutSlice.actions

export default layoutSlice.reducer
