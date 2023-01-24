import { useFocusEffect } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useCallback, useState } from 'react'
import { useAuthContext } from '../common/context/authContext'
import Main from '../screens/loggedinScreens/Main'
import OtherScreen from '../screens/loggedinScreens/OtherScreen'
import LoginScreen from '../screens/loggedoutScreens/Login'
import RegisterScreen from '../screens/loggedoutScreens/Register'
import {
  LoggedInScreens as LoggedInScreensTypes,
  LoggedOutScreens as LoggedOutScreensTypes
} from '../types/navigation.types'

const AuthStack = createNativeStackNavigator<LoggedOutScreensTypes>()
const MainStack = createNativeStackNavigator<LoggedInScreensTypes>()

const LoggedOutScreens = ({ signedIn }: { signedIn: boolean }) => (
  <>
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Log in',
          animationTypeForReplace: signedIn ? 'pop' : 'push'
        }}
      />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  </>
)

const LoggedInScreens = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="Main" component={Main} />
    <MainStack.Screen name="Other" component={OtherScreen} />
  </MainStack.Navigator>
)

export const NavigatorComp = () => {
  const { isSignedIn, getToken } = useAuthContext()
  const [signedIn, setSignedIn] = useState(false)

  useFocusEffect(
    useCallback(() => {
      // Get token and check if signedin
      const getTokenAsync = async () => {
        const token = getToken()
        if (typeof token === 'string') return setSignedIn(true)
        token.then(result => (result ? setSignedIn(true) : setSignedIn(false)))
      }
      getTokenAsync()
    }, [getToken])
  )
  return signedIn ? (
    <LoggedInScreens />
  ) : (
    <LoggedOutScreens signedIn={isSignedIn} />
  )
}

export default NavigatorComp
