import React, { useState } from 'react'
import AppContainer from './components/AppContainer'
import NavigatorComp from './components/NavigatorComp'
import SplashScreen from './components/splashscreen'
import CustomStatusBar from './ui/StatusBar'

const App = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <AppContainer>
      <CustomStatusBar />
      {loaded ? <NavigatorComp /> : <SplashScreen setLoaded={setLoaded} />}
    </AppContainer>
  )
}

export default App
