import AsyncStorage from '@react-native-async-storage/async-storage'
import messaging from '@react-native-firebase/messaging'
import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler'
import { name as appName } from './app.json'
import App from './src/App'

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage)
  if (remoteMessage.data) {
    // Save the notification locally
    const notificationList =
      JSON.parse((await AsyncStorage.getItem('@SM_NOTIFICATIONS')) as string) ||
      []
    notificationList.push({
      title: remoteMessage.data.title,
      message: remoteMessage.data.message,
      isRead: false
    })
    await AsyncStorage.setItem(
      '@SM_NOTIFICATIONS',
      JSON.stringify(notificationList)
    )
  }
})

AppRegistry.registerComponent(appName, () => App)
