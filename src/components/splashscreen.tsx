import { AnimatedLottieViewProps } from 'lottie-react-native'
import LottieView from 'lottie-react-native'
import { Dimensions, StyleSheet } from 'react-native'

interface Props {
  setLoaded: (state: boolean) => void
  resizeMode: AnimatedLottieViewProps['resizeMode']
}

export const SplashScreen = ({ setLoaded, resizeMode = 'contain' }: Props) => {
  const { height, width } = Dimensions.get('window')
  // Note: You can set resizeMode prop to resize the view.

  return (
    <LottieView
      source={require('../assets/splash-screen.json')}
      style={[styles.splash, { aspectRatio: width / height }]}
      autoPlay
      loop={true}
      resizeMode={resizeMode}
      onAnimationFinish={() => {
        setLoaded(false)
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
