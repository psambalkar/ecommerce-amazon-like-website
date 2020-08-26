import {createSelector} from 'reselect';
const selectCart=state=>state.cart;
export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.CartItems
);
export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    CartItems=>CartItems.reduce((accumulatedquantity,cartItem)=>accumulatedquantity + cartItem.quantity,0)
    
)
export const selectCartTotal=createSelector(
    [selectCartItems],
    CartItems=>CartItems.reduce((accumulatedquantity,cartItem)=>accumulatedquantity + cartItem.quantity*cartItem.price,0)


)