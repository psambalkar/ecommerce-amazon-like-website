import React, { Component } from 'react';
import './App.css';
import {Route,Switch,Redirect}  from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from './pages/sign-in and sign-up page/sign-in-and-up.component';
import  CheckoutPage from './pages/checkout/checkout.component'
import Header from "./components/header/header.component"
import {auth,createUserProfileDocument} from "./firebase/firebase.util"
import {connect} from'react-redux';
import {setCurrentUser} from './redux/user/user.actions' ;
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';

class App extends Component {
 
  unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(   //to make user data store in our state we use this method.
      async userAuth=>{
        if(userAuth){
          const userRef=await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot=>{ //returns the actual data by using snapshot.data()
            setCurrentUser({
              id:snapshot.id,
           ...snapshot.data()
          });

        });
      }
      setCurrentUser(userAuth);//so if the user is signedout we get null so we want to set state to null

  });
}
  componetWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header /> 
     <Switch>
      <Route  exact path="/" component={HomePage}></Route>
      <Route  path="/shop" component={ShopPage}></Route>
      <Route  exact path="/checkout" component={CheckoutPage}></Route>

      <Route exact path="/signin" render={()=>{return(this.props.currentuser? (<Redirect to="/" />):(<SignInAndSignUpPage/>))}}/>
      </Switch>
    </div>        
    );
  }
}

// const mapStateToProps=({user})=>({
//   currentuser:user.currentuser
// });
const mapStateToProps=createStructuredSelector({
  currentuser:selectCurrentUser,
});
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
