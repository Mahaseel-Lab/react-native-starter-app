import { MD3DarkTheme } from 'react-native-paper'

// See https://callstack.github.io/react-native-paper/theming.html
// For more options.
// Use https://m3.material.io/theme-builder#/dynamic
// to generate a palate
const theme = {
  ...MD3DarkTheme,
  myOwnProperty: true,
  colors: {
    // Put palate here instead of obj
    primary: '#fff',
    myColor: '#ABC'
  }
}

export default theme
