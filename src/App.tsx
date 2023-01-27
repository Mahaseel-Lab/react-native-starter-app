import analytics from '@react-native-firebase/analytics'
import crashlytics from '@react-native-firebase/crashlytics'
import messaging from '@react-native-firebase/messaging'
import React from 'react'
import { Alert } from 'react-native'
import AppContainer from './components/AppContainer'
import NavigatorComp from './components/NavigatorComp'
import SplashScreen from './components/splashscreen'
import CustomStatusBar from './ui/StatusBar'

const App = () => {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    crashlytics().log('App mounted.')

    analytics().logAppOpen()

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage))
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AppContainer>
      <CustomStatusBar />
      {loaded ? <NavigatorComp /> : <SplashScreen setLoaded={setLoaded} />}
    </AppContainer>
  )
}

export default App
