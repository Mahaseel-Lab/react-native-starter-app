import { useFocusEffect } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useCallback } from 'react'
import { useAuthContext } from '../common/context/authContext'
import Main from '../screens/loggedinScreens/Main'
import OtherScreen from '../screens/loggedinScreens/OtherScreen'
import LoginScreen from '../screens/loggedoutScreens/Login'
import RegisterScreen from '../screens/loggedoutScreens/Register'
import {
  LoggedInScreens as LoggedInScreensTypes,
  LoggedOutScreens as LoggedOutScreensTypes
} from '../types/navigation.types'

const NavStack = createNativeStackNavigator<
  LoggedOutScreensTypes & LoggedInScreensTypes
>()

export const NavigatorComp = () => {
  const { isSignedIn, getToken } = useAuthContext()

  useFocusEffect(
    useCallback(() => {
      // Get token and check if signedin
      getToken()
    }, [getToken])
  )
  return (
    <NavStack.Navigator screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <NavStack.Group>
          <NavStack.Screen name="Main" component={Main} />
          <NavStack.Screen name="Other" component={OtherScreen} />
        </NavStack.Group>
      ) : (
        <NavStack.Group>
          <NavStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Log in',
              animationTypeForReplace: isSignedIn ? 'pop' : 'push'
            }}
          />
          <NavStack.Screen name="Register" component={RegisterScreen} />
        </NavStack.Group>
      )}
    </NavStack.Navigator>
  )
}

export default NavigatorComp
