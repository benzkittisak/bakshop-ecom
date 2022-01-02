import userActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser:null,
    error:null
}

const userReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case userActionTypes.SIGN_IN_SUCCESS:
        case userActionTypes.UPDATE_USER_SUCCESS:
        case userActionTypes.UPDATE_USER_PROFILE_IMAGE_SUCCESS:
            return {
                ...state,
                currentUser:action.payload,
                error:null
            }
        case userActionTypes.SIGN_OUT_START:
            return{
                ...state,
                currentUser:null,
                error:null
            }
        case userActionTypes.UPDATE_USER_FAILURE:
        case userActionTypes.UPDATE_USER_PROFILE_IMAGE_FAILURE:
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        default: return state;
    }
}

export default userReducer;

