import { selectDarkMode } from './layoutSlice'
import { useAppSelector } from '../app/hooks'

const themeMaker = () => {
  const darkMode = useAppSelector(selectDarkMode)
  const bgColor = darkMode ? '#393E46' : '#EEEEEE'
  const txtColor = darkMode ? '#EEEEEE' : '#393E46'
  const paperColor = darkMode ? '#00ADB5' : '#495371'
  return { bgColor, txtColor, paperColor }
}
export default themeMaker
