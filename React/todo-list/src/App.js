import { Component } from 'react';
import checkAll from './img/check-all.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {

  constructor() {
    super();
    this.state = {
      newItem: '',
      currentFiller: '', // all | active | completed
      todoItems : [
        { title: 'Mua bim bim', isCompleted: true },
        { title: 'Đi đổ xăng', isCompleted: false  },
        { title: 'Chơi dota', isCompleted: false }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      console.log(item);
      const isCompleted = item.isCompleted;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      console.log(index);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isCompleted: !isCompleted
          },
          ...todoItems.slice(index + 1)
        ]
        // todoItems: this.state.todoItems.map(i => i !== item ? {...i} : {...i, isCompleted: !item.isCompleted})
      });
    }
  }

  onKeyUp(event) {
    if (event.keyCode === 13) { // enter key
      const text = event.target.value;
      text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newItem: '',
        todoItems: [
          {
            title: text,
            isCompleted: false
          },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { todoItems, newItem } = this.state;
    if(todoItems.length) {
      return(
        <div className="App">
          <div className="Header">
            <img src={checkAll} width={32} />
            <input
              type="text"
              value={newItem}
              onChange={this.onChange}
              placeholder="Add a new todo..."
              onKeyUp={this.onKeyUp} />
          </div>
          {todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoItem 
              key={index}
              item={item}
              onClick={this.onItemClicked(item)} />
          )}
          <div className="Footer">
            <span className="TodoCount">
              <span id="ItemCount">2</span>
              <span> </span>
              <span id="ItemText">items</span>
              <span> left</span>
            </span>
            <div className="FilterButtons">
              <button className="FilterButton">All</button>
              <button className="FilterButton">Active</button>
              <button className="FilterButton">Completed</button>
            </div>
          </div>
        </div>
      );
    } else {
      <div className="App">Nothing here!</div>
      
    }
  }
  
}

export default App;
