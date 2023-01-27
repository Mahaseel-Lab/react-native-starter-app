import messaging from '@react-native-firebase/messaging'

export async function requestUserPermissionForMessage() {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  if (enabled) {
    console.log('Authorization status:', authStatus)
  }
}

export function getFCMToken() {
  return messaging().getToken()
}

export function onFcmTokenChange(cb: (token: string) => Promise<void> | void) {
  return messaging().onTokenRefresh(token => cb(token))
}
