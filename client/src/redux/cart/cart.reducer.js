import CartActionTypes from './cart.types'
import{addItemToCart} from './cart.utils';
import{removeItemFromCart} from './cart.utils';
const INITIAL_STATE={
    hidden:true,
    CartItems:[]
}
const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                CartItems:addItemToCart(state.CartItems,action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                CartItems:state.CartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM:
             return{
            ...state,
            CartItems:removeItemFromCart(state.CartItems,action.payload)
         }
         case CartActionTypes.CLEAR_CART:
             return{
                 ...state,
                 CartItems:[]
             }
        default:
            return state;
    }
};
export default cartReducer;