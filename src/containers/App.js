import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Loading from '../components/Loading';
import Header from '../components/Header'

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Loading />
      </div>
    );
  }
}

export default App;
