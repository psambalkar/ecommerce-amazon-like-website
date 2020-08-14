import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route}  from 'react-router-dom';
import ShopPage from "./pages/shoppage/shop.component"
   
class App extends Component {
  render() {
    return (
    <div>
      <Route exact={true} path="/" component={HomePage}></Route>
      <Route exact={false} path="/shop" component={ShopPage}></Route>
    </div>        
    );
  }
}

export default App;
