import { StyleSheet, Text, View } from 'react-native'

const OtherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default OtherScreen
