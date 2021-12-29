import React, { Component } from 'react';
import './App.sass';

// import Home from './comp/Home/Home' 
// import Soon from './comp/Soon'
import Portfolio from './comp/portfolio/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Portfolio />
      </div>
    );
  }
}

export default App;
