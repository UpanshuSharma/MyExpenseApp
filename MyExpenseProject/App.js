import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/* Import navigation & stack-navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';



const App = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator
        screenOptions={
         { 
           headerShown:false,
         }
        }>
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})