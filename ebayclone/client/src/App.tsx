import React, { Component } from 'react';
import './App.css';
import ListofAdsContainer from './components/listofAdsContainer'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
            <h2>Buy Stuff!</h2>
        </header>
        <ListofAdsContainer />
      </div>
    );
  }
}

export default App;
