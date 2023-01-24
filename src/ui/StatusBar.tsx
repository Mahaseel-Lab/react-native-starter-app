import { useColorScheme, StatusBar as StatBar } from 'react-native'

const CustomStatusBar = () => {
  const colorMode = useColorScheme() === 'light'
  return (
    <StatBar
      backgroundColor={colorMode ? '#fff' : '#000'}
      barStyle={colorMode ? 'dark-content' : 'light-content'}
    />
  )
}

export default CustomStatusBar
