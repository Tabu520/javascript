import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, StatusBar, Switch } from "react-native";

export default class CountEvenNumbers extends React.Component {

  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2)
  }

  render() {
    return (
      <Text style={styles.count}>{this.props.count}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },

  count: {
    fontSize: 48
  }
});