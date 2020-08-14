import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route}  from 'react-router-dom';
   const HatsPage=(props)=>{
     console.log(props);
     return(
       <div>
         HATS PAGE
       </div>
     )
   }
class App extends Component {
  render() {
    return (
    <div>
      <Route exact={true} path="/" component={HomePage}></Route>
      <Route exact={false} path="/shop/hats" component={HatsPage}></Route>
    </div>        
    );
  }
}

export default App;
