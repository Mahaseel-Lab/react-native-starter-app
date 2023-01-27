import AsyncStorage from '@react-native-async-storage/async-storage'
import crashlytics from '@react-native-firebase/crashlytics'
import React from 'react'
import useAuthReducer from '../hooks/authReducer'

interface AuthActions {
  login: (token: string) => void
  signUp: (token: string) => void
  setToken: (token: string) => void
  logout: () => void
  isSignedIn: boolean
  getToken: () => Promise<null | string> | string
}

interface Props {
  children: React.ReactNode
}

export const AuthContext = React.createContext<AuthActions>({
  login: (_token: string) => {
    return
  },
  logout: () => {
    return
  },
  signUp: (_token: string) => {
    return
  },
  setToken: (_token: string) => {
    return
  },
  isSignedIn: false,
  getToken: () => {
    return new Promise((resolve, _) => resolve(null))
  }
})

export const AuthContextProvider = ({ children }: Props) => {
  const { state, dispatch } = useAuthReducer()
  const authActions: AuthActions = React.useMemo(
    () => ({
      login: async (token: string) => {
        try {
          await AsyncStorage.setItem('@token', token)
          dispatch({ type: 'LOGIN', token })
        } catch (err) {
          crashlytics().recordError(err as Error)
          console.error(err)
        }
      },
      signUp: async (token: string) => {
        await AsyncStorage.setItem('@token', token)
        dispatch({ type: 'LOGIN', token })
      },
      setToken: async (token: string) => {
        await AsyncStorage.setItem('@token', token)
        dispatch({ type: 'SET_TOKEN', token })
      },
      logout: async () => {
        await AsyncStorage.clear()
        dispatch({ type: 'LOGOUT' })
      },
      isSignedIn: state.isSignedIn,
      getToken: async () => {
        if (state.token && state.isSignedIn) return state.token
        const token = await AsyncStorage.getItem('@token')
        if (token && !state.isSignedIn) {
          dispatch({ type: 'SET_TOKEN', token })
        }
        return token
      }
    }),
    [state, dispatch]
  )
  return (
    <AuthContext.Provider value={authActions}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => React.useContext(AuthContext)
