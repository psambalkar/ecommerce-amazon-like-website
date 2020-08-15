import React, { Component } from 'react';
import './App.css';
import {Route,Switch}  from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from './pages/sign-in and sign-up page/sign-in-and-up.component';
import Header from "./components/header/header.component"
import {auth,createUserProfileDocument} from "./firebase/firebase.util"
   
class App extends Component {
  constructor(){
    super();
    this.state={
      currentuser:null
    };
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(   //to make user data store in our state we use this method.
      async userAuth=>{
        if(userAuth){
          const userRef=await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot=>{ //returns the actual data by using snapshot.data()
            this.setState({
              currentuser:{
                id:snapshot.id,
           ...snapshot.data()}
          });
        console.log(this.state);

        });
      }
      this.setState({currentuser:userAuth});//so if the user is signedout we get null so we want to set state to null

  });
}
  componetWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header currentuser={this.state.currentuser}/> 
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
