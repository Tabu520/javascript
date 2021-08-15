import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, StatusBar, Switch, FlatList, SectionList } from "react-native";

import Count from "./components/Count";
import CountEvenNumbers from "./components/CountEvenNumbers";
import contacts, { compareName } from "./components/contacts";
import Row from "./components/Row";
import ContactsList from "./components/ContactsList";
import AddContactForm from "./components/AddContactForm";


export default class App extends React.Component {

  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  }

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareName)
    }));
  }

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact]
    }));
  }

  render() {
    if(this.state.showForm) return <AddContactForm onSubmit={this.addContact}/>
    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Toggle Form" onPress={this.toggleForm} />
        <Button title="Sort" onPress={this.sort} />
        {
          this.state.showContacts && (
            <ContactsList
              contacts={this.state.contacts} />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    marginTop: StatusBar.currentHeight + 20,
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

