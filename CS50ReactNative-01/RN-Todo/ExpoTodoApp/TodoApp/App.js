import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, StatusBar, Switch, FlatList} from "react-native";

import Count from "./components/Count";
import CountEvenNumbers from "./components/CountEvenNumbers";
import contacts, {compareName} from "./components/contacts";
import Row from "./components/Row";


export default class App extends React.Component {

  state = {
    showContacts: true,
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareName)
    }));
  }

  renderItem = (obj) => <Row {...obj.item} />

  render() {
    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Sort" onPress={this.sort} />
        {
          this.state.showContacts && (
            <FlatList 
              data={this.state.contacts}
              renderItem = {this.renderItem}
            />
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
});

