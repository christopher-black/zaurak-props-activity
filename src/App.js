import React, { Component } from 'react';
import './App.css';
import EnterNumber from './components/EnterNumber.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Props Activity</h1>
        </header>
        <EnterNumber />
      </div>
    );
  }
}

export default App;
