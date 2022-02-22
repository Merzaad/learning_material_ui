import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface LayoutState {
  darkMode: boolean
}

const initialState: LayoutState = {
  darkMode: false,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const x = state
      x.darkMode = !x.darkMode
    },
  },
})

export const darkMode = (state: RootState) => state.layout.darkMode

export const { toggleDarkMode } = layoutSlice.actions

export default layoutSlice.reducer
