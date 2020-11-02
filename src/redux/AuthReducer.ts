import { stopSubmit } from "redux-form";
import { authAPI } from "../api/API";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    isFetching: false as boolean   
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            
            return {
                userId: "1sdf23",
                ...state,
                ...action.payload         
            };                                    
        
        default: return state;
    }
}

type SetUserDataActionPayloadType  = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean  
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetUserDataActionPayloadType
}

export const setUserDataActionCreator = 
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType =>
     ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })   
    
export const getUserDataThunkCreator = () => (dispatch: any) => {
    return authAPI.getMe()
    .then(data => {         
        if (data.resultCode === 0) {
            //userId, email, login
            let {id, email, login} = data.data;//деструктуризация
            dispatch(setUserDataActionCreator(id, email, login, true));
        }
        
    })
}

export const logInUserThunkCreator = (login: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
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

export const logOutUserThunkCreator = () => async (dispatch: any) => {
    let data = await authAPI.logOut();

    if (data.resultCode === 0){
        dispatch(setUserDataActionCreator(null, null, null, false));
    }
}

 

export default authReducer;