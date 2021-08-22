import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Row = props => (
    <TouchableOpacity
        style={styles.row}
        onPress={() => {
            props.onSelectContact(props)
        }}
    >
        <Text >{props.name}</Text>
        <Text >{props.phone}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    row: {
        margin: 10
    }
});

export default Row