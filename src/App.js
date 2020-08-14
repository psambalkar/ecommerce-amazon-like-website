import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch}  from 'react-router-dom';
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component"
   
class App extends Component {
  render() {
    return (
    <div>
      <Header/> 
     <Switch>
      <Route exact={true} path="/" component={HomePage}></Route>
      <Route  path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>        
    );
  }
}

export default App;
