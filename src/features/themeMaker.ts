import { selectDarkMode } from './layoutSlice'
import { useAppSelector } from '../app/hooks'

const themeMaker = () => {
  const darkMode = useAppSelector(selectDarkMode)
  const txtColor = darkMode ? '#F4FAC5' : '#1E3440'
  const bgColor = darkMode ? '#2D2D2D' : '#FEFBF3'
  const paperColor = darkMode ? '#1D1D1D' : '#B8B8B8'
  const appColor = darkMode ? '#181818' : '#9D9D9D'
  return {
    bgColor, txtColor, paperColor, appColor,
  }
}
export default themeMaker
