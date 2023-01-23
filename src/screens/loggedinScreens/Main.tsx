import { Text, View, Button, StyleSheet } from 'react-native'
import { LoggedInScreens } from '../../types/navigation.types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAuthContext } from '../../common/context/authContext'

type Props = NativeStackScreenProps<LoggedInScreens, 'Main'>

const Main = ({ navigation }: Props) => {
  const { logout } = useAuthContext()

  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
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
