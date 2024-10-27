import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InCallActionButtons from '../../components/OnCallButtons';

const CallScreen = () => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.camaraPreview} />
        {/* <Text>CallScreen</Text> */}
        <InCallActionButtons />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#34b4eb',
  },
  camaraPreview: {
    // flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor:'red',
    borderRadius: 10,
    position: 'absolute',
    height: '30%',
    width: '40%',
    right: 20,
    top: 50
  },
});

export default CallScreen;
