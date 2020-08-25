import UserActionTypes from './user.types'

const INITIAL_STATE={
    currentuser:null,
    error:null
}
const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
        return{
            ...state,
            currentuser:action.payload,
            error:null
        }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentuser:null,
                error:null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        
        
        return{
            ...state,
            error:action.payload
        }

        default:
            return state;
    }
}
export default userReducer;