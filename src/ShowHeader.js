import React, { Component } from 'react';
import logo from './logo.svg';

class ShowHeader extends Component {
  render () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Escalation Preparation</h1>
      </header>
    );
  }
}

export default ShowHeader;
