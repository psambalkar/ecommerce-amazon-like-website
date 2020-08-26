import React from 'react';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import{connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assests/shoping-bag.svg';
import './cart-icon.styles.scss';
import {createStructuredSelector} from 'reselect';

import{selectCartItemsCount} from '../../redux/cart/cart.selectors'
const CartIcon=({toggleCartHidden,itemCount})=>{
  return( <div className='cart-icon' onClick={toggleCartHidden}>
     <ShoppingIcon className="shopping-icon"></ShoppingIcon>
<span className="item-count">{itemCount}</span>
    </div>)
}
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
const mapStateToProps=createStructuredSelector(
 {
     itemCount:selectCartItemsCount
 }
)

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);