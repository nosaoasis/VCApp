import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InCallActionButtons from '../../components/OnCallButtons';
import { useNavigation, useRoute, RouteProp } from "@react-navigation/core";
import RootStackParamList from '../../interface/types';

type CallingScreenRouteProp = RouteProp<RootStackParamList, 'Calling'>


const CallingScreen = () => {

  // const navigation = useNavigation();
  const route = useRoute<CallingScreenRouteProp>();

  const user = route?.params?.user;
  console.log('User value is', user);

  // const 

  return (
    <>
      <View style={styles.page}>
        <View style={styles.cameraPreview}>
          <Text style={styles.name}>{user}</Text>
          <Text style={styles.phoneNumber}>ringing... +234 802 858 6656</Text>
        </View>
        <InCallActionButtons />
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
    // paddingHorizontal: 10,
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
    backgroundColor: '#1c2121',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // alignItems: 'center',
  },
});

export default CallingScreen;
