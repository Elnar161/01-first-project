import { ResultCodesCaptcha } from './../api/API';
import { AppStateType } from './reduxStore';
import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authAPI, ResultCodesEnum } from "../api/API";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    isFetching: false as boolean   
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: AuthReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            
            return {
                userId: "123",
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


export type AuthReducerActionsTypes = SetUserDataActionType

type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetUserDataActionPayloadType
}
export const setUserDataActionCreator = 
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType =>
     ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })   
    

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthReducerActionsTypes | FormAction>;     
export const getUserDataThunkCreator = (): ThunkType => (dispatch) => {
    return authAPI.getMe()
    .then(data => {         
        if (data.resultCode === ResultCodesEnum.Success) {
            //userId, email, login            
            let {id, email, login} = data.data;//деструктуризация
            dispatch(setUserDataActionCreator(id, email, login, true));
        }
        
    })
}

export const logInUserThunkCreator = (login: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    let data = await authAPI.logIn(login, password, rememberMe)

    if (data.resultCode === ResultCodesEnum.Success){
        dispatch(getUserDataThunkCreator());
    }
    else{
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        let action = stopSubmit('login', {_error: message});     
        dispatch(action);   
    }    
}

export const logOutUserThunkCreator = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logOut();

    if (data.resultCode === 0){
        dispatch(setUserDataActionCreator(null, null, null, false));
    }
}

 

export default authReducer;