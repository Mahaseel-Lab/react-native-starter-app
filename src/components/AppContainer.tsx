import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { AuthContextProvider } from '../common/context/authContext'

interface Props {
  children: React.ReactNode
}

const AppContainer = ({ children }: Props) => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </PaperProvider>
    </NavigationContainer>
  )
}

export default AppContainer
