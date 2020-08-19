import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer'
import shopReducer from './shop/shop-reducer'
import directoryReducer from './directory/directory.reducer'
import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage'  //locaalstorage from redux
const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']     ///only reducer which we want to persist 
}
const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})
export default persistReducer(persistConfig,rootReducer) ;  ///modifying our rootreducer to take local storage from redux