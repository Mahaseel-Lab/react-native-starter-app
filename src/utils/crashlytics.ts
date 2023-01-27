import crashlytics from '@react-native-firebase/crashlytics'

// Incase they want to optout.
// See https://rnfirebase.io/crashlytics/usage#opt-out

export async function toggleCrashlytics(enabled: boolean) {
  await crashlytics().setCrashlyticsCollectionEnabled(enabled)
  return crashlytics().isCrashlyticsCollectionEnabled
}
