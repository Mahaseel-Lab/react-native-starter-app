import { useColorScheme } from 'react-native'

export const useColorModeValue = <T = string>(light: T, dark: T) => {
  return useColorScheme() === 'light' ? light : dark
}
