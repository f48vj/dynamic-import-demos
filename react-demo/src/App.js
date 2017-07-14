import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LazilyLoad from './LazilyLoad';
import WrappedHelloWolrd from './WrappedHelloWolrd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <LazilyLoad modules={{HelloWorld: () => import(/* webpackChunkName: "helloworld" */'./HelloWorld')}}>
          {
            ({HelloWorld}) => <HelloWorld />
          }
          </LazilyLoad>
          <WrappedHelloWolrd />
        </p>
      </div>
    );
  }
}

export default App;
