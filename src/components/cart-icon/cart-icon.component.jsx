import React from 'react';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import{connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assests/shoping-bag.svg';
import './cart-icon.styles.scss';
const CartIcon=({toggleCartHidden})=>{
  return( <div className='cart-icon' onClick={toggleCartHidden}>
     <ShoppingIcon className="shopping-icon"></ShoppingIcon>
     <span className="item-count">0</span>
    </div>)
}
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);