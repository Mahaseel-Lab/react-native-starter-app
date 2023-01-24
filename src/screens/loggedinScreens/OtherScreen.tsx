import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useSafeAreaPadding } from '../../common/hooks/safeAreaHook'
import { useColorModeValue } from '../../common/hooks/useColorModeValue'

const OtherScreen = () => {
  const padding = useSafeAreaPadding()
  const color = useColorModeValue('#fff', '#000')
  const textColor = useColorModeValue('#000', '#fff')

  return (
    <View style={[styles.container, padding, { backgroundColor: color }]}>
      <Text variant="headlineLarge" style={{ color: textColor }}>
        Hello, World!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default OtherScreen
