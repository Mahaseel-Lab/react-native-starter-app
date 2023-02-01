import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {
  adaptNavigationTheme,
  Provider as PaperProvider
} from 'react-native-paper'
import { AuthContextProvider } from '../common/context/authContext'
import theme from '../config/theme'

interface Props {
  children: React.ReactNode
}

const AppContainer = ({ children }: Props) => {
  const { LightTheme } = adaptNavigationTheme({
    reactNavigationLight: DefaultTheme
  })
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default AppContainer
