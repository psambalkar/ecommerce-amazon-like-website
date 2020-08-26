export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity +1}: cartItem)
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
} 

export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id)
if(existingCartItem.quantity===1){
return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)      //bcoz filter keeps the vale of which the condition returns true so if their id does not match we want to keep in cart and if it does matches we want to remove it from cart
}
return cartItems.map(
    cartItem=>
    cartItem.id===cartItemToRemove.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem  //decreases the quantity if id are euals else keep all the cartitems
)
}