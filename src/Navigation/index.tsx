import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactsScreen from '../screens/ContactsScreen';
import CallScreen from '../screens/CallScreen';
import CallingScreen from '../screens/CallingScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contacts" component={ContactsScreen} />
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Call" component={CallScreen} />
            <Stack.Screen name="Calling" component={CallingScreen} />
            <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
