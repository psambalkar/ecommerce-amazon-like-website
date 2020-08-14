import React, { Component } from 'react';
import './App.css';
import {Route,Switch}  from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from './pages/sign-in and sign-up page/sign-in-and-up.component';
import Header from "./components/header/header.component"
   
class App extends Component {
  render() {
    return (
    <div>
      <Header/> 
     <Switch>
      <Route exact={true} path="/" component={HomePage}></Route>
      <Route  path="/shop" component={ShopPage}></Route>
      <Route  path="/signin" component={SignInAndSignUpPage}></Route>

      
      </Switch>
    </div>        
    );
  }
}

export default App;
