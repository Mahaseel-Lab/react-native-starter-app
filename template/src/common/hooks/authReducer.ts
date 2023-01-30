import { useReducer, Reducer } from 'react'

export type AuthReducerState = {
  isLoading: boolean
  isSignedIn: boolean
  token: null | string
}

const AuthInitStateValues: AuthReducerState = {
  isLoading: true,
  isSignedIn: false,
  token: null
}

type AuthReducerAction =
  | {
      type: 'LOGIN'
      token: string | null
    }
  | {
      type: 'LOGOUT'
    }
  | {
      type: 'SET_TOKEN'
      token: string | null
    }

export const useAuthReducer = () => {
  const [state, dispatch] = useReducer<
    Reducer<AuthReducerState, AuthReducerAction>
  >((prevState, action) => {
    switch (action.type) {
      case 'LOGIN':
        prevState.token = action.token
        return {
          ...prevState,
          isLoading: false,
          isSignedIn: true,
          token: action.token
        }
      case 'LOGOUT':
        return {
          ...prevState,
          isLoading: false,
          isSignedIn: false,
          token: null
        }
      case 'SET_TOKEN':
        return {
          ...prevState,
          token: action.token,
          isSignedIn: true,
          isLoading: false
        }

      default:
        throw new Error('Auth Reducer called with wrong action!')
    }
  }, AuthInitStateValues)

  return { state, dispatch }
}
export default useAuthReducer
