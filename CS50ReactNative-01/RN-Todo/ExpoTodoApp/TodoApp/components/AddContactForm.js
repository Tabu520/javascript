import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ContactContext } from "../contexts/Contacts";


export default class AddContactForm extends Component {

    static propTypes = {
        addContact: PropTypes.func
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false
    }

    handleNameChange = name => {
        this.setState({ name })
    }

    handlePhoneChange = phone => {
        if (+phone > 0 && phone.length <= 10) {
            this.setState({ phone })
        }
    }

    handleSubmitContact = () => {
        this.props.onSubmit(this.state)
    }

    validateForm = () => {
        const names = this.state.name.split(' ')
        if (+this.state.phone > 0 && this.state.phone.length == 10 && this.state.name.length >= 3 && names[0] && names[1]) {
            this.setState({
                isFormValid: true
            });
        } else {
            this.setState({
                isFormValid: false
            });
        }
    }

    validateForm2 = () => {
        if (+this.state.phone > 0 && this.state.phone.length == 10 && this.state.name.length >= 3) {
            return true
        } else {
            return false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name
            || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    render() {
        return (
            <View style={styles.inputForm}>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    placeholder="Name"
                    onChangeText={this.handleNameChange}
                />
                <TextInput
                    style={styles.input}
                    value={this.state.phone}
                    placeholder="Phone"
                    onChangeText={this.handlePhoneChange}
                    keyboardType="numeric"
                    maxLength={10}
                />
                <ContactContext.Consumer>
                    {
                        ({ addContact }) =>
                            <Button title="Add contact"
                                onPress={() => addContact(this.state)}
                                disabled={!this.state.isFormValid} />
                    }
                </ContactContext.Consumer>
                <Button title="Return contact list" onPress={this.handleSubmitContact} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    inputForm: {
        flex: 1,
        margin: 10,
        justifyContent: "center"
    },

    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    }
});