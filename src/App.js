import Palette from './Palette';
import SeedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Palette {...SeedColors[4]} ></Palette>
    </div>
  );
}

export default App;
