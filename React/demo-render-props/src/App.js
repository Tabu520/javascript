import React from 'react';

import './App.css';
import List from './components/List';
import Counter from './components/Counter';
import NumberContext from './context/NumberContext';
import NumberProvider from './context/NumberProvider';

const arr = ["A", "B", "C"];

// Provider Consumer

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <NumberContext.Consumer>
          {({ number, updateNumber }) =>
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update number</button>
            </div>
          }
        </NumberContext.Consumer>
        <hr></hr>
        <Counter>
          {({ count }) =>
            <h1>{count}</h1>}
        </Counter>
      </div>
    </NumberProvider>
  );
}

export default App;
