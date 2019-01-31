import React, { Component } from 'react';
import './App.css';

import Loading from '../components/Loading';
import Header from '../components/Header';
import StartPage from '../components/StartPage';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <StartPage />
      </div>
    );
  }
}

export default App;
