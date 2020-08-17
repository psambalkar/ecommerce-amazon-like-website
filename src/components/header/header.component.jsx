import React from 'react';
import "./header.styles.scss";
import {ReactComponent as Logo} from '../../assests/4.3 crown.svg.svg'
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.util"
import {connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdwon.component'
const Header=({currentuser,hidden})=>(
    <div className='header'>
    <Link to='/' className='logo-container'>
        <Logo className="logo"></Logo>
    </Link>
    <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>
         {
             currentuser ? <div className='option' onClick={()=>(auth.signOut())}>SIGN OUT</div>:
             <Link className='option' to='/signin'>SIGN IN</Link>
         }
    <CartIcon/>

    </div>
    
    {hidden? null:  <CartDropdown/> }

    </div>
);
const mapStateToProps=({user:{currentuser},cart:{hidden}})=>({
    currentuser,
    hidden
})
export default connect(mapStateToProps)(Header);
