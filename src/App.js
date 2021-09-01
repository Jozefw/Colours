import Palette from './Palette';
import SeedColors from './seedColors';
import React, { Component } from 'react'
import {generatePalette} from './ColorHelpers';

export class App extends Component {
  render() {
   
    return (
      <div className="App">
      <Palette palette={generatePalette(SeedColors[4])} ></Palette>
    </div>
    )
  }
}

export default App

