export type cardDataType = {
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
  testCardData: cardDataType[]
}
