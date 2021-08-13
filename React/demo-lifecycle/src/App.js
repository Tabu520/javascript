import React, { Component } from 'react';

import './App.css';
import Count from './components/Count';
import Counter from './components/Counter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    }
  }

  removeCounter() {
    this.setState({
      showCounter: !this.state.showCounter
    });
  }

  render() {
    console.log('App render');
    return (
      <div className="App">
        <button onClick={() => this.removeCounter()}>Remove Counter</button>
        {this.state.showCounter && <Counter />}
      </div>
    );
  }

  componentDidMount() {
    console.log('App did mount')
  }

  componentDidUpdate() {
    console.log('App did update')
  }

  componentWillUnmount() {
    console.log('App will unmount')
  }

}

export default App;
