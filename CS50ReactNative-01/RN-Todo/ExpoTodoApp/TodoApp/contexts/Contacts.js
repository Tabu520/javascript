import React, { Component } from "react";

import contacts from "../components/contacts";
import { fetchUsers } from "../apis/api";

export const ContactContext = React.createContext();

export class ContactsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      showForm: false,
      showContacts: true,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const results = await fetchUsers();
    this.setState({ contacts: results });
  };

  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  sort = () => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts].sort(compareName),
    }));
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <ContactContext.Provider
        value={{
          contacts: this.state.contacts,
          toggleForm: this.toggleForm,
          sort: this.sort,
          addContact: this.addContact,
        }}>
        {this.props.children}
      </ContactContext.Provider>
    );
  }
}
