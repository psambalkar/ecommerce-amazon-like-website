import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component'
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';
import "./sign-up.styles.scss";
class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmpassword:""
        }
    }
   handleSubmit=async event=>{
       event.preventDefault();
       const {signUpStart} =this.props;
       const {displayName,email,password,confirmpassword}=this.state;
       if(password!==confirmpassword){
           alert("password don't match");
           return;
       }
       signUpStart({displayName,email,password});
    //    try{
    //    const {user}=await auth.createUserWithEmailAndPassword(email,password)//this will return us an userauth obj on succesfull sign in
    //    createUserProfileDocument(user,{displayName});//create the user profile based on email address store in firebase
    //    this.setState({   //make everything empty after storig in firebase
    //        displayName:'',
    //        email:'',
    //        password:'',
    //        confirmpassword:''
    //    })
    //    }catch(err){
    //    console.error(err);
    //    }

      
   }
   handlechange=event=>{
    const{name,value}=event.target;
    this.setState({
        [name]:value
    })
}
    render(){
        const {displayName,email,password,confirmpassword}=this.state;
        return(
            <div className="sign-up">
            <h2 className="title">I do not have a account </h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form'onSubmit={this.handleSubmit}>
            <FormInput name="displayName" type="text" value={displayName} onChange={this.handlechange} label='Display-name' required  ></FormInput>
            <FormInput name="email" type="email" value={email} onChange={this.handlechange} label='Email' required  ></FormInput>
            <FormInput name="password" type="password" value={password} onChange={this.handlechange} label='Password' required ></FormInput>
            <FormInput name="confirmpassword" type="password" value={confirmpassword} onChange={this.handlechange} label='Confirm password' required></FormInput>
            <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(SignUp);
