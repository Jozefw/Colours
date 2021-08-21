import Palette from './Palette';
import SeedColors from './seedColors';
import React, { Component } from 'react'
import {generatePalette} from './ColorHelpers';

export class App extends Component {
  render() {
    console.log(generatePalette(SeedColors[4]));
    return (
      <div className="App">
      <Palette {...SeedColors[4]} ></Palette>
    </div>
    )
  }
}

export default App

