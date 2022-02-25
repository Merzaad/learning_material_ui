import { selectDarkMode } from './layoutSlice'
import { useAppSelector } from '../app/hooks'

const themeMaker = () => {
  const darkMode = useAppSelector(selectDarkMode)
  const bgColor = darkMode ? '#444444' : '#FEFBF3'
  const txtColor = darkMode ? '#FFD369' : '#393E46'
  const paperColor = darkMode ? '#323232' : '#C9CCD5'
  const appColor = darkMode ? '#212121' : '#9D9D9D'
  return {
    bgColor, txtColor, paperColor, appColor,
  }
}
export default themeMaker
