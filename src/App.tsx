import AppContainer from './components/AppContainer'
import NavigatorComp from './components/NavigatorComp'
import LottieView from 'lottie-react-native'
import { StyleSheet } from 'react-native'

const App = () => {
  return (
    <AppContainer>
      <LottieView
        style={styles.splash}
        source={require('./assets/splash-screen.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => {
          console.log('animation finished')
        }}
      />
      <NavigatorComp />
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    margin: 0
  }
})
export default App
