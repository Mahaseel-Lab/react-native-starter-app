import { Text, View, Button, StyleSheet } from 'react-native'
import { LoggedInScreens } from '../../types/navigation.types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAuthContext } from '../../common/context/authContext'
import { useSafeAreaPadding } from '../../common/hooks/safeAreaHook'
import { useColorModeValue } from '../../common/hooks/useColorModeValue'

type Props = NativeStackScreenProps<LoggedInScreens, 'Main'>

const Main = ({ navigation }: Props) => {
  const { logout } = useAuthContext()
  const padding = useSafeAreaPadding()
  const color = useColorModeValue('#fff', '#000')
  const textColor = useColorModeValue('#000', '#fff')

  return (
    <View style={[styles.container, padding, { backgroundColor: color }]}>
      <Text style={{ color: textColor }}>Hello, World!</Text>
      <Button
        title="Click to go to other page"
        onPress={() => navigation.navigate('Other')}
      />
      <Button title="Click to logout" onPress={() => logout()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default Main
