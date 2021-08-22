import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactListScreen from "./screens/ContactListScreen";
import AddContactScreen from "./screens/AddContactScreen";
import ContactDetailScreen from "./screens/ContactDetailScreen";
import { ContactsProvider } from "./contexts/Contacts"

const Stack = createNativeStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <ContactsProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="ContactList"
                component={ContactListScreen}
                options={{
                  title: "Contacts"
                }}>
              </Stack.Screen>
              <Stack.Screen
                name="AddContact"
                component={AddContactScreen}
              />
              <Stack.Screen
                name="ContactDetail"
                component={ContactDetailScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </ContactsProvider>
    );
  }
}


