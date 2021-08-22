import React, { Component } from 'react';

import contacts from '../components/contacts';

export const ContactContext = React.createContext();

export class ContactsProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: contacts,
            showForm: false,
            showContacts: true,
        }
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
        return (
            <ContactContext.Provider value={{
                contacts: this.state.contacts,
                toggleForm: this.toggleForm,
                sort: this.sort,
                addContact: this.addContact
            }}>
                {this.props.children}
            </ContactContext.Provider>
        );
    }
}
