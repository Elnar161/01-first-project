import { AppStateType } from './reduxStore';
import { ThunkAction } from "redux-thunk";
import { getUserDataThunkCreator, AuthReducerActionsTypes } from "./AuthReducer";


const INITIALIZED_SUCCESS = 'AUTH/INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean  
}

let initialState: InitialStateType = {
    initialized: false  
};

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            
            return {
                ...state,
                initialized: true            
            };                                    
        
        default: return state;
    }
}


type ActionsTypes = InitializedSuccessActionType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS //'AUTH/INITIALIZED_SUCCESS'
}

export const initializedSuccess = (): InitializedSuccessActionType =>
    ({ type: INITIALIZED_SUCCESS })   
    

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getUserDataThunkCreator());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer;