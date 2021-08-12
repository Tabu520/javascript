import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'

const Row = props =>(
    <View style={styles.row}>
        <Text >{props.name}</Text>
        <Text >{props.phone}</Text>
    </View>
)

const styles = StyleSheet.create({
    row: {
        margin: 10
    }
});

export default Row