import { stopSubmit } from "redux-form";
import { authAPI } from "../api/API";

const SET_USER_DATA = '/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false   
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            
            return {
                ...state,
                ...action.data         
            };                                    
        
        default: return state;
    }
}


export const setUserDataActionCreator = (userId, email, login, isAuth) =>
    ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} })   
    
export const getUserDataThunkCreator = () => (dispatch) => {
    return authAPI.getMe()
    .then(data => {         
        if (data.resultCode === 0) {
            //userId, email, login
            let {id, email, login} = data.data;//деструктуризация
            dispatch(setUserDataActionCreator(id, email, login, true));
        }
        
    })
}

export const logInUserThunkCreator = (login, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.logIn(login, password, rememberMe)

    if (data.resultCode === 0){
        dispatch(getUserDataThunkCreator());
    }
    else{
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        let action = stopSubmit('login', {_error: message});     
        dispatch(action);   
    }    
}

export const logOutUserThunkCreator = () => async (dispatch) => {
    let data = await authAPI.logOut();

    if (data.resultCode === 0){
        dispatch(setUserDataActionCreator(null, null, null, false));
    }
}

 

export default authReducer;