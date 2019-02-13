import React, { Component } from "react";
import "./App.css";
import ListofAdsContainer from "./components/listofAdsContainer";
import {Provider} from 'react-redux'
import store from './store.js'
import { Route } from 'react-router-dom'
import AdsDetailContainer from './components/adsDetailContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header className="App-header">
            <h2>Buy Stuff!</h2>
          </header>
          <Route path="/products" exact component={ListofAdsContainer} />
          <Route path="/products/:id" exact component={AdsDetailContainer} />
        </div>
      </Provider>
    );
  }
}


export default App;
