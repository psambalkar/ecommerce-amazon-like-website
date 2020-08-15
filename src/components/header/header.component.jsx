import React from 'react';
import "./header.styles.scss";
import {ReactComponent as Logo} from '../../assests/4.3 crown.svg.svg'
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.util"
const Header=({currentuser})=>(
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
    </div>
    </div>
);
export default Header;
