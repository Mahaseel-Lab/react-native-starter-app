import React, { useState } from 'react'
import AppContainer from './components/AppContainer'
import NavigatorComp from './components/NavigatorComp'
import SplashScreen from './components/splashscreen'

const App = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <AppContainer>
      {loaded ? <NavigatorComp /> : <SplashScreen setLoaded={setLoaded} />}
    </AppContainer>
  )
}

export default App
