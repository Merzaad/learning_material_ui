import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface LayoutState {
  darkMode: boolean
  cardMenu: boolean[]
  accordionDrop: boolean[]
}

const initialState: LayoutState = {
  darkMode: !!(localStorage.getItem('darkMode') === 'true'),
  cardMenu: [false, false, false, false],
  accordionDrop: [false],
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
  },
})

export const darkMode = (state: RootState) => state.layout.darkMode
export const cardMenu = (state: RootState) => state.layout.cardMenu
export const accordionDrop = (state: RootState) => state.layout.accordionDrop

export const { toggleDarkMode, toggleCardMenu, toggleAccordion } = layoutSlice.actions

export default layoutSlice.reducer
