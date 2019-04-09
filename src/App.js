import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Radio from './components/Radio'


class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Radio />
      </div>

    );
  }
}

export default App;
