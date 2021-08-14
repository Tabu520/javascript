import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

export default class AddContactForm extends Component {

    static propTypes = {
        addContact: PropTypes.func
    }

    state = {
        name: '',
        phone: ''
    }

    handleNameChange = name => {
        this.setState({name})
    }

    handlePhoneChange = phone => {
        this.setState({phone})
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
                />
                <Button title="Add contact" />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    inputForm: {
        margin: 10,
        marginTop: StatusBar.currentHeight + 10
    },

    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    }
});