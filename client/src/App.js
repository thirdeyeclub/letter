import React, { Component } from 'react';
import './App.sass';
// import Soon from "./comp/Soon"
import Home from './comp/Home/Home'


class App extends Component {
  render() {
    return (
      <div className="app">
    <Home />
      </div>
    );
  }
}

export default App;
