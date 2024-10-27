import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import bgImg from '../../../assets/images/her_name_is_music.jpg';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const IncomingCallScreen = () => {
  const handleAccept = () => {
    console.warn('hello there....how are you doing today?....');
  };

  const handleDecline = () => {
    console.warn(
      'hello there....you can reach me later...a little busy at the moment...',
    );
  };

  return (
    <>
      <ImageBackground source={bgImg} style={styles.bg} resizeMode="cover">
        {/* <Image source={bgImg} style={styles.bg} resizeMode='cover' /> */}
        <View style={styles.overlay}>
          <Text style={styles.name}>Mummy</Text>
          <Text style={styles.phoneNumber}>
            incoming call from... +234 802 858 6656
          </Text>

          <View style={styles.callResponse}>
            <View style={styles.row}>
              <View style={[styles.itemsCenter]}>
                <MaterialIcons name="alarm" color="white" size={25} />
                <Text style={styles.text}>Remind me</Text>
              </View>
              <View style={[styles.itemsCenter]}>
                <FontAwesome5 name="comment" color="white" size={25} />
                <Text style={styles.text}>Message</Text>
              </View>
            </View>
            <View style={[styles.row, styles.callAnswerReject]}>
              <View style={[styles.itemsCenter]}>
                <Pressable onPress={handleDecline} style={[styles.itemsCenter]}>
                  <Ionicons
                    style={[
                      styles.callAnswerRejectIcons,
                      {backgroundColor: 'red'},
                    ]}
                    name="close"
                    color="white"
                    size={50}
                  />
                  <Text style={[styles.text, {fontWeight: 'bold'}]}>
                    Decline
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.itemsCenter]}>
                <Pressable onPress={handleAccept} style={[styles.itemsCenter]}>
                  <Ionicons
                    style={[
                      styles.callAnswerRejectIcons,
                      {backgroundColor: 'green'},
                    ]}
                    name="checkmark"
                    color="white"
                    size={50}
                  />
                  <Text style={[styles.text, {fontWeight: 'bold'}]}>
                    Accept
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  // page: {
  //   // padding: 15,
  //   backgroundColor: '#7b4e80',
  //   height: '100%',
  // },
  bg: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#000',
    opacity: 0.7,
    alignItems: 'center',
    height: '100%',
    width: '100%',
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
    color: 'white',
  },
  callResponse: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: 'auto',
    // position: 'absolute',
    // bottom: 30,
    marginTop: 'auto',
    padding: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
  callAnswerReject: {
    marginTop: 40,
  },
  callAnswerRejectIcons: {
    padding: 15,
    borderRadius: 100,
    backgroundColor: 'blue',
    marginBottom: 15,
    marginTop: 30,
  },
});

export default IncomingCallScreen;
