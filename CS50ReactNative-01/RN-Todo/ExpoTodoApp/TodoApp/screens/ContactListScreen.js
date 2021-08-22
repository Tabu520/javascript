import React from 'react';
import { Button, View, StyleSheet, StatusBar, SectionList } from 'react-native';

import ContactsList from '../components/ContactsList';
import { ContactContext } from "../contexts/Contacts"

export default class ContactListScreen extends React.Component {

  state = {
    showContacts: true
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  }

  render() {
    const { navigation, route } = this.props
    navigation.setOptions(
      {
        headerTitle: 'Contacts1',
        headerRight: () => (
          <Button
            title="Add"
            onPress={() => {
              navigation.navigate("AddContact")
            }} />
        )
      }
    )
    return (
      <View style={styles.container}>
        {
          this.state.showContacts && (
            <ContactContext.Consumer>
              {
                ({ contacts }) =>
                  <ContactsList
                    contacts={contacts}
                    onSelectContact={contact => {
                      navigation.navigate("ContactDetail", {
                        phone: contact.phone,
                        name: contact.name
                      })
                    }}
                  />
              }
            </ContactContext.Consumer>
          )
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 5
  },

  count: {
    fontSize: 48
  },

  btn: {
    backgroundColor: 'red'
  },

  sectionHeader: {
    fontSize: 24
  }
});