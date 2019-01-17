import React, { Component } from 'react';
import './App.css';
import EnterNumber from './components/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal.js';
import History from './components/History.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      history: [{value: 5}, {value: 2}],
    }
  }

  updateTotal = (inputNumber) => {
    console.log('Updating total with ', inputNumber);
    this.setState({
      total: this.state.total + inputNumber,
    });
  }

  addToHistory = (itemToAdd) => {
    this.setState({
      history: [...this.state.history, itemToAdd],
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Props Activity</h1>
        </header>
        App State: {JSON.stringify(this.state)}
        <EnterNumber updateTotal={this.updateTotal} />
        <hr />
        {/* Pass currentTotal as an integer via props,
        currentTotal will available as this.props.currentTotal */}
        <CurrentTotal addToHistory={this.addToHistory} 
                      currentTotal={this.state.total} />
        <History history={this.state.history} />
      </div>
    );
  }
}

export default App;
