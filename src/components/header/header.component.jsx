import React from 'react';
import "./header.styles.scss";
import {ReactComponent as Logo} from '../../assests/4.3 crown.svg.svg'
import {signOutStart} from '../../redux/user/user.actions';
import {connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdwon.component'
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import{HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'
const Header=({currentuser,hidden,signOutStart})=>(
      <HeaderContainer>
       <LogoContainer to='/'>
           <Logo className='logo'></Logo>
           </LogoContainer>    
     <OptionsContainer>
          <OptionLink to='/shop'>SHOP</OptionLink>
          <OptionLink to='/contact'>CONTACT</OptionLink>

        
         {
             currentuser ? <OptionLink as='div'  onClick={signOutStart}>SIGN OUT</OptionLink >:
             <OptionLink  to='/signin'>SIGN IN</OptionLink>
         }
    <CartIcon/>

   </OptionsContainer>
    
    {hidden? null:  <CartDropdown/> }

      </HeaderContainer>
);
// const mapStateToProps=(state)=>({
//     currentuser:selectCurrentUser(state),
//     hidden:selectCartHidden(state)
// })second method to do this is below
const mapStateToProps=createStructuredSelector({
    currentuser:selectCurrentUser,
    hidden:selectCartHidden
});
const mapDispatchToProps=dispatch=>({
    signOutStart:()=>dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);
