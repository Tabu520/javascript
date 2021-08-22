import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default class ContactDetailScreen extends Component {

    render() {
        const { route, navigation } = this.props
        navigation.setOptions({
            headerTitle: `${route.params.name}`
        })
        return (
            <View style={styles.container}>
                <Text>{route.params.phone}</Text>
                <Button title="Go to random contact" />
            </View>
        );
    }

    _goToRandom = () => {
        const contacts = this.props.route.contacts;
        const phone = null;
        let randomContact;
        while (!randomContact) {
            const randomIndex = Math.floor(Math.random * 100);
            if (contacts[randomIndex].phone !== phone) {
                randomContact = contacts[randomIndex]
            }
        }
    };
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})