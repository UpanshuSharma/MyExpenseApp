import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './AppStack';
const Stack = createStackNavigator();
import CustomHeader from '../components/CustomHeader';
import Routes from './Routes';

const MainStackWrapper = () => {
  return (
      <Stack.Navigator
       
           screenOptions={{
                        header: props =><CustomHeader />,
                        
           }}
      
      >
                <Stack.Screen name="Main" component={AppStack} />
      </Stack.Navigator>
  )
}

export default MainStackWrapper