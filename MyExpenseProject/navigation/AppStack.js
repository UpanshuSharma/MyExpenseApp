
import React from 'react'







/*................. Material Bottom Tab Navigation ...............................*/

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../modules/home module/HomeScreen';
import MyAccountScreen from '../modules/my account module/MyAccountScreen';
import AnalysisScreen from '../modules/Analysis module/AnalysisScreen';
import ExpenseScreen from '../modules/Expense module/ExpenseScreen';
const Tab = createMaterialBottomTabNavigator();
const AppStack = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      activeColor="white"
      barStyle={{ backgroundColor: 'pink' }}
    >
                <Tab.Screen
                     name="Home"
                     component={HomeScreen}
                     options={{
                        tabBarLabel: 'Home', 
                        tabBarColor: '#57746a',

                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                      }}
                     />
                <Tab.Screen
                         name="Expense"
                         component={ExpenseScreen} 
                         options={{
                            tabBarLabel: 'Expenses',
                            tabBarColor: '#731877',
                            tabBarIcon: ({ color }) => (
                              <Icons name="file-invoice-dollar" color={color} size={26} />
                            ),
                           
                          }}
                        />
                <Tab.Screen 
                            name="Analysis" 
                            component={AnalysisScreen} 
                            options={{
                                tabBarLabel: 'Analysis',
                                tabBarColor: 'red',
                                tabBarIcon: ({ color }) => (
                                  <MaterialCommunityIcons name="chart-areaspline" color={color} size={26} />
                                ),
                              }}
                            />
                <Tab.Screen
                         name="My Account" 
                         component={MyAccountScreen} 
                         options={{
                            tabBarLabel: 'My Account',
                            tabBarColor: 'brown',
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="account" color={color} size={26} />
                            ),
                          }}
                         />
    </Tab.Navigator>

  )
}

export default AppStack

