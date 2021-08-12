import './App.css';
import List from './components/List';
import Counter from './components/Counter';

const arr = ["A", "B", "C"];

function App() {
  return (
    <div className="App">
      <List data={arr} render={item => <p>{item}</p>} />
      <List data={arr} render={item => <p>--{item}--</p>} />
      <List data={arr} render={item => <p>++{item}++</p>} />
      <hr></hr>
      <Counter>
        {({ count }) =>
          <h1>{count}</h1>}
      </Counter>

    </div>
  );
}

export default App;
