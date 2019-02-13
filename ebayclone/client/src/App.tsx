import React, { Component } from "react";
import "./App.css";
import ListofAdsContainer from "./components/listofAdsContainer";
import {Provider} from 'react-redux'
import store from './store.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header className="App-header">
            <h2>Buy Stuff!</h2>
          </header>
          <ListofAdsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
