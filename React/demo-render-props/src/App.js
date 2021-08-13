import React from 'react';

import './App.css';
import Counter from './components/Counter';
import { NumberProvider } from './context/NumberContext';
import RandomNumber from './components/RandomNumber';

const arr = ["A", "B", "C"];

// Provider Consumer

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <RandomNumber />
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
