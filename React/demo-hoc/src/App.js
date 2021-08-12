import './App.css';
import AwesomeImage from './components/AwesomeImage';
import WithHoverOpacity from './components/WithHoverOpacity';

const HoverOpacityAwesomeImage = WithHoverOpacity(AwesomeImage, 0.8)

function App() {
  return (
    <div className="App">
      <HoverOpacityAwesomeImage src="https://loremflickr.com/320/240" />
    </div>
  );
}

export default App;
