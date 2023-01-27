import analytics from '@react-native-firebase/analytics'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useAuthContext } from '../../common/context/authContext'
import { useSafeAreaPadding } from '../../common/hooks/safeAreaHook'
import { useColorModeValue } from '../../common/hooks/useColorModeValue'
import { LoggedOutScreens } from '../../types/navigation.types'

type Props = NativeStackScreenProps<LoggedOutScreens, 'Login'>

const LoginScreen = ({ navigation }: Props) => {
  const Auth = useAuthContext()
  const padding = useSafeAreaPadding()
  const color = useColorModeValue('#fff', '#000')
  const textColor = useColorModeValue('#000', '#fff')

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = async () => {
    await analytics().logEvent('Login', {
      interaction: 'User Pressed Login!'
    })
    Auth.login(String(Math.random() * 10))
  }

  return (
    <View style={[padding, styles.container, { backgroundColor: color }]}>
      <TextInput
        label={'Username'}
        mode="flat"
        style={{ color: textColor }}
        value={username}
        onChangeText={text => setUsername(text)}
        accessibilityLabelledBy={'USERNAME'}
        accessibilityLanguage={'EN'}
      />
      <TextInput
        label={'Password'}
        mode="flat"
        value={pass}
        onChangeText={text => setPass(text)}
        style={{ color: textColor, borderColor: color }}
        accessibilityLabelledBy={'PASSWORD'}
        accessibilityLanguage={'EN'}
      />
      <Button mode="outlined" onPress={handleLogin}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
        Register
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 25,
    paddingLeft: 25,
    justifyContent: 'center'
  }
})
export default LoginScreen
