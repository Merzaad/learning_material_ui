import { selectDarkMode } from './layoutSlice'
import { useAppSelector } from '../app/hooks'

const themeMaker = () => {
  const darkMode = useAppSelector(selectDarkMode)
  const txtColor = darkMode ? '#CA3E47' : '#1E3440'
  const bgColor = darkMode ? '#313131' : '#FEFBF3'
  const paperColor = darkMode ? '#1D1D1D' : '#B8B8B8'
  const appColor = darkMode ? '#181818' : '#9D9D9D'
  return {
    bgColor, txtColor, paperColor, appColor,
  }
}
export default themeMaker
