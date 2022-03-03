export type testDataType = {
  index: number,
  text: string,
  title: string,
  imgSrc: string
}

export interface LayoutState {
  darkMode: boolean
  cardMenuOpen: boolean[]
  accordionDrop: boolean[]
  stepperActive: number[]
  tabActive: string[]
  snackbarOpen: boolean[]
  testDataBase: testDataType[]
}
