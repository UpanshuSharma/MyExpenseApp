import { View, Text } from 'react-native';
import React,{useContext} from 'react';
import FormButton from '../../components/FormButton';
import { AuthContext } from '../../navigation/AuthenticationProvider';
const HomeSreen = () => {
  const {user,logout} = useContext(AuthContext)
  return (
    <View>
      <Text>HomeSreen</Text>
          {/**
           <FormButton
              title="Logout"
              onPress={() => logout()}
            />
        */}
    </View>
  )
}

export default HomeSreen;