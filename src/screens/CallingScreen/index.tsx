import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CallingScreen = () => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.cameraPreview}>
          <Text style={styles.name}>Mummy</Text>
          <Text style={styles.phoneNumber}>ringing +234 802 858 6656</Text>
          <View style={styles.buttonsContainer}>
            <Text>Button containers</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    // padding: 15,
    backgroundColor: '#7b4e80',
    height: '100%',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    // fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 15,
  },
  buttonsContainer: {
    position: 'absolute', // Position at the bottom
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1c2121',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    height: 100,
  },
});

export default CallingScreen;
