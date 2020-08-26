import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import{selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom'; 
import {toggleCartHidden} from '../../redux/cart/cart.actions'


import './cart-dropdown.styles.scss';
const CartDropdown=({CartItems,history,dispatch})=>{
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {CartItems.length?(CartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}/>))):
            (<span className="empty-message">YOUR CART IS EMPTY</span> )}
        </div>
        <CustomButton onClick={
            
            ()=>{history.push('/checkout');
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
    </div>
    )
}
const mapStateToProps=createStructuredSelector(
 { CartItems:selectCartItems}
)
export default withRouter( connect(mapStateToProps)( CartDropdown));