import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, TextInput, StyleSheet} from 'react-native';
import contactsList from '../../../assets/data/contacts.json';

const ContactsScreen = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [contacts, setContacts] = useState(contactsList)

  const handleSearchInput = (text:string) => {
    // console.log("the value of the input search is", text);
    setSearchInputValue(text);
  };

  useEffect(() => {
    const filteredContacts = contactsList.filter(contact => contact.user_display_name.toLowerCase().includes(searchInputValue.toLowerCase()));
    setContacts(filteredContacts);
  }, [searchInputValue]);

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
            <Text style={styles.contactName}>{item.user_display_name}</Text>
          )}
          ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
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
