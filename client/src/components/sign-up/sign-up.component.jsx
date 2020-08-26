import React ,{useState} from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component'
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';
import "./sign-up.styles.scss";
const SignUp =({signUpStart})=>{
    const [userCredentials,setCredentials]=useState({
        displayName:'',
        email:'',
        password:'',
        confirmpassword:''})
        const {displayName,email,password,confirmpassword}=userCredentials;

const   handleSubmit=async event=>{
       event.preventDefault();
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
  const handlechange=event=>{
    const{name,value}=event.target;
    setCredentials({
        ...userCredentials,
        [name]:value
    })
}
      return(
            <div className="sign-up">
            <h2 className="title">I do not have a account </h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form'onSubmit={handleSubmit}>
            <FormInput name="displayName" type="text" value={displayName} onChange={handlechange} label='Display-name' required  ></FormInput>
            <FormInput name="email" type="email" value={email} onChange={handlechange} label='Email' required  ></FormInput>
            <FormInput name="password" type="password" value={password} onChange={handlechange} label='Password' required ></FormInput>
            <FormInput name="confirmpassword" type="password" value={confirmpassword} onChange={handlechange} label='Confirm password' required></FormInput>
            <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
            </div>
        )
    
}
const mapDispatchToProps=dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(SignUp);
