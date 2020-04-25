import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen"
        screenOptions={{
          headerTintColor: '#333333',
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerBackTitleVisible: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
