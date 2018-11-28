import React, { Component } from 'react';
import './App.scss';
import DataItems from './containers/DataItems/DataItems'

class App extends Component {
  render() {
    return (
      <div className="App">
          <DataItems /> 
      </div>
    );
  }
}

export default App;
