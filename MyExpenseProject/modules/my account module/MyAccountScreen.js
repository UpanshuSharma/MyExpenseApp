import { View, Text,Button } from 'react-native'
import React ,{useContext}from 'react'

import { AuthContext } from '../../navigation/AuthenticationProvider'



const MyAccountScreen = () => {
   const {logout}=useContext(AuthContext);
  return (
    <View>
      <Text>MyAccountScreen</Text>
      
      <Button
      title='Logout'
       onPress={()=>logout()}
      />
    </View>
  )
}

export default MyAccountScreen