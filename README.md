# react-native-starter-app template

This is an opinionated template for react native, it includes a splash screen, react native paper and firebase.

# Includes
It includes `firebase` (Crashlytics, messaging and Analytics), react-native paper, react-native-safe-area-context, Navigation with stack navigator.

It also has Auth Context with reducer already setup, and a splashscreen (Lottie file).

# Usage
To use it simple run npx react-native init

```
npx react-native init ProjectName --template https://github.com/Mahaseel-Lab/react-native-starter-app
```

Then you *MUST* create a firebase project and add your project to it.
Please note that to get the project working you need to [generate the android credentials](https://rnfirebase.io/#generating-android-credentials) and add them to your project (In android/app Folder).
