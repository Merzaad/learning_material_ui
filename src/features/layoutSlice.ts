import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface LayoutState {
  darkMode: boolean
  cardMenu: boolean[]
}

const initialState: LayoutState = {
  darkMode: false,
  cardMenu: [false, false],
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const x = state
      x.darkMode = !x.darkMode
    },
    toggleCardMenu: (state, action: PayloadAction<number>) => {
      const x = state
      const id = action.payload
      x.cardMenu[id] = !x.cardMenu[id]
    },
  },
})

export const darkMode = (state: RootState) => state.layout.darkMode
export const cardMenu = (state: RootState) => state.layout.cardMenu

export const { toggleDarkMode, toggleCardMenu } = layoutSlice.actions

export default layoutSlice.reducer
