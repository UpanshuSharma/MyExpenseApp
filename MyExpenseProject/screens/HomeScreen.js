import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthenticationProvider';

const HomeScreen = () => {
  const {user,logout} = useContext(AuthContext)
  return (
    <View>
      <Text>HomeScreen</Text>

      <FormButton
      title="Logout"
      onPress={() => logout()}
    />
    </View>
  )
}

export default HomeScreen;