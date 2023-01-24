import LottieView from 'lottie-react-native'
import { StyleSheet } from 'react-native'

interface Props {
  setLoaded: (state: boolean) => void
}

export const SplashScreen = ({ setLoaded }: Props) => (
  <LottieView
    style={styles.splash}
    source={require('../assets/splash-screen.json')}
    autoPlay
    loop={false}
    resizeMode="center"
    onAnimationFinish={() => {
      setLoaded(true)
    }}
  />
)

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    margin: 0
  }
})

export default SplashScreen
