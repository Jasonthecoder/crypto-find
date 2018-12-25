import React, { Component } from 'react';

import Tickers from './components/Tickers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h2>CryptoFind</h2>
        </div>
        <Tickers/>
      </div>
    );
  }
}

export default App;
