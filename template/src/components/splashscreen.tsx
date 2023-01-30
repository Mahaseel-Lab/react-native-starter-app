import { useFocusEffect } from '@react-navigation/native'
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native'
import { useCallback } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { useAuthContext } from '../common/context/authContext'

interface Props {
  setLoaded: (state: boolean) => void
  resizeMode?: AnimatedLottieViewProps['resizeMode']
}

export const SplashScreen = ({ setLoaded, resizeMode = 'contain' }: Props) => {
  const { height, width } = Dimensions.get('window')
  const { getToken } = useAuthContext()
  // Note: You can set resizeMode prop to resize the view.

  // Call this function to load data for example while
  // splash screen loads
  useFocusEffect(
    useCallback(() => {
      // Ex: Prepare Token from storage
      getToken()
    }, [getToken])
  )
  return (
    <LottieView
      source={require('../assets/splash-screen.json')}
      style={[styles.splash, { aspectRatio: width / height }]}
      autoPlay
      loop={false}
      resizeMode={resizeMode}
      onAnimationFinish={() => {
        setLoaded(true)
      }}
    />
  )
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    margin: 0
  }
})

export default SplashScreen
