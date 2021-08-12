import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, StatusBar, Switch } from "react-native";

let id = 0;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  addTodo() {
    id++;
    const text = `Todo number ${id}`;
    this.setState({
      todos: [...this.state.todos, { id: id, text: text, checked: false }],
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        };
      }),
    });
  }

  render() {
    return (
      <View style={[styles.container, styles.fill]}>
        <Text> Todo count: {this.state.todos.length}</Text>
        <Text>
          Unchecked todo count:
          {this.state.todos.filter((todo) => !todo.checked).length}
        </Text>
        <Button onPress={() => this.addTodo()} title="Add TODO" />
        <ScrollView style={styles.fill}>
          {this.state.todos.map((todo) => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    marginTop: StatusBar.currentHeight,
  },

  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },

  fill : {
    flex: 1
  }
});

const Todo = (props) => (
  <View style={styles.todoItem}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Text>{props.todo.text}</Text>
    <Button onPress={props.onDelete} title="delete" />
  </View>
);
