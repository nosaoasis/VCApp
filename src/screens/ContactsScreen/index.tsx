import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  FlatList,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import contactsList from '../../../assets/data/contacts.json';
import RootStackParamList from '../../interface/types';

type ContactsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Contacts'
>;

const ContactsScreen = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [contacts, setContacts] = useState(contactsList);

  const navigation = useNavigation<ContactsScreenNavigationProp>();

  const handleSearchInput = (text: string) => {
    // console.log("the value of the input search is", text);
    setSearchInputValue(text);
  };

  useEffect(() => {
    const filteredContacts = contactsList.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    );
    setContacts(filteredContacts);
  }, [searchInputValue]);

  const callUser = (user: string) => {
    navigation.navigate('Calling', {user});
  };

  return (
    <>
      <View style={styles.page}>
        <TextInput
          style={styles.searchInput}
          value={searchInputValue}
          onChangeText={handleSearchInput}
          placeholder="Search...."
        />
        <FlatList
          data={contacts}
          renderItem={({item}) => (
            <Pressable onPress={() => callUser(item.user_display_name)}>
              <Text style={styles.contactName}>{item.user_display_name}</Text>
            </Pressable>
          )}
          ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 15,
    // backgroundColor: 'green'
  },
  searchInput: {
    backgroundColor: '#000',
    paddingLeft: 10,
    color: '#afb3b3',
    borderRadius: 10,
    fontSize: 19,
    borderColor: 'green',
  },
  contactName: {
    fontSize: 16,
    marginVertical: 15,
    color: '#afb3b3',
  },
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#4b4d4d',
  },
});

export default ContactsScreen;
