import React from 'react';
import './checkout-item.styles.scss'
import {connect} from 'react-redux';
import {clearItemFromCart,addItem,removeItem} from '../../redux/cart/cart.actions';

const CheckoutItem=({CartItem,clearItem,addItem,removeItem})=>
{    const {name,imageUrl,price,quantity}=CartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl}alt="item"/>
        </div>
<span className="name">{name}</span>
<span className="quantity">
    <div className="arrow" onClick={()=>removeItem(CartItem)}>&#10094;</div>
    <span className="value">{quantity}</span>
    <div className="arrow" onClick={()=>addItem(CartItem)}>&#10095;</div></span>
<span className="price">{price}</span>
<div className="remove-button" onClick={()=>clearItem(CartItem)}> &#10005;</div>
</div>
);
}


const mapDispatchToProps=dispatch=>(
    {
        clearItem:item=>dispatch(clearItemFromCart(item)),
        addItem:item=>dispatch(addItem(item)),
        removeItem:item=>dispatch(removeItem(item))
    }
)
export default connect(null,mapDispatchToProps)(CheckoutItem);