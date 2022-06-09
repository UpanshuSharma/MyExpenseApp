import {  View } from 'react-native'
import React,{useEffect} from 'react'

/* Import navigation & stack-navigation */
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OnboardingScreen from  '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStack = () => {

  useEffect(()=>{
   
    // ...................Google SDK for Authentication
    GoogleSignin.configure({
      webClientId: '284120526752-m1js62nq5v1h25tbm7t5mt5vkeafqfgv.apps.googleusercontent.com',
    });
  },[])

  return (
   
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
   
  )
}

export default AuthStack
