import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Clone twitter</h1>
        <Tweet />
      </div>
    );
  }
}

export default App;
