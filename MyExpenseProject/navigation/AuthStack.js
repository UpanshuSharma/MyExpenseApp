import {  View } from 'react-native'
import React from 'react'

/* Import navigation & stack-navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OnboardingScreen from  '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        // screenOptions={
        //  { 
        //    headerShown:false,
        //  }
        // }
        >
              <Stack.Screen 
                name="Onboarding" 
                component={OnboardingScreen}
                options={{header:()=>null}}
              />
              <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{header:()=>null}}
              />
              <Stack.Screen 
                 name="SignUpScreen" 
                 component={SignUpScreen}
                 options={({navigation}) => ({
                  title: '',
                  headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                  },
                  headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                      <FontAwesome.Button 
                        name="long-arrow-left"
                        size={25}
                        backgroundColor="#f9fafd"
                        color="#333"
                        onPress={() => navigation.navigate('Login')}
                      />
                    </View>
                  ),
                })}
                /> 
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AuthStack
