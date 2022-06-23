import React from 'react';
import HomeSreen from '../modules/home module/HomeScreen';
import AddExpense from '../modules/home module/AddExpense';
import EventExpense from '../modules/home module/EventExpense';

import {createStackNavigator, Header} from '@react-navigation/stack';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeSreen}
      />
      <Stack.Screen name="AddExpense" component={AddExpense} />
      <Stack.Screen name="EventExpense" component={EventExpense} />
    </Stack.Navigator>
  );
};

export default HomeStack;
