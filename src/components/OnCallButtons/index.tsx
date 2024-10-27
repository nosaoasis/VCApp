import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import RootStackParamList from '../../interface/types';

type ContactsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Contacts'
>;

const InCallActionButtons = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const navigation = useNavigation<ContactsScreenNavigationProp>();

  const handleReverseCamera = () => {
    console.warn('camera reversed');
  };
  const handleToggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };
  const handleMuteSelf = () => {
    setIsMuted((prev) => !prev);
  };
  const handleEndCall = () => {
    navigation.navigate('Contacts');
  };

  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.iconButton}>
        <Pressable onPress={handleReverseCamera}>
          <Ionicons style={styles.icons} name="camera-reverse" />
        </Pressable>
        <Pressable onPress={handleToggleCamera}>
          <MaterialIcons
            style={styles.icons}
            name={isCameraOn ? 'camera' : 'camera-off'}
          />
        </Pressable>
        <Pressable onPress={handleMuteSelf}>
          <MaterialIcons
            name="microphone-off"
            size={24}
            style={[
              styles.icons,
              {
                backgroundColor: isMuted ? 'yellow' : '#4a4a4a',
                color: isMuted ? 'black' : 'white',
              },
            ]}
          />
        </Pressable>
        <Pressable onPress={handleEndCall}>
          <MaterialIcons
            style={[styles.icons, {backgroundColor: 'red'}]}
            name="phone-hangup"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#1c2121',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 'auto',
  },
  iconButton: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  icons: {
    backgroundColor: '#4a4a4a',
    padding: 10,
    borderRadius: 50,
    fontSize: 30,
    color: 'white',
  },
});

export default InCallActionButtons;
