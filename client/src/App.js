import React, { Component } from 'react';
import './App.sass';

import Home from './comp/Home/Home'
import Soon from './comp/Soon'

class App extends Component {
  render() {
    return (
      <div className="app">
    <Soon />
      </div>
    );
  }
}

export default App;
