import analytics from '@react-native-firebase/analytics'
import crashlytics from '@react-native-firebase/crashlytics'
import React from 'react'
import AppContainer from './components/AppContainer'
import NavigatorComp from './components/NavigatorComp'
import SplashScreen from './components/splashscreen'
import CustomStatusBar from './ui/StatusBar'

const App = () => {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    crashlytics().log('App mounted.')
    analytics().logAppOpen()
  }, [])

  return (
    <AppContainer>
      <CustomStatusBar />
      {loaded ? <NavigatorComp /> : <SplashScreen setLoaded={setLoaded} />}
    </AppContainer>
  )
}

export default App
