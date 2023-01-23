import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { LoggedOutScreens } from '../../types/navigation.types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAuthContext } from '../../common/context/authContext'

type Props = NativeStackScreenProps<LoggedOutScreens, 'Login'>

const LoginScreen = ({ navigation }: Props) => {
  const Auth = useAuthContext()

  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput />
      <Text>email</Text>
      <Button
        title="Login"
        onPress={() => Auth.login(String(Math.random() * 10))}
      />
      <TextInput />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
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
export default LoginScreen
