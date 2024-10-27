/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens();


import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCallScreen from './src/screens/IncomingCallScreen';
import CallScreen from './src/screens/CallScreen';

import Navigation from './src/Navigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        />
      {/* <ContactsScreen /> */}
      {/* <CallingScreen /> */}
      {/* <IncomingCallScreen /> */}
      {/* <CallScreen /> */}
      <Navigation />
    </>
        // <SafeAreaView>
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default App;
