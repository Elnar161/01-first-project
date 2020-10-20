import { authAPI } from "../api/API";

const SET_USER_DATA = 'SET_USER_DATA';

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
                ...action.data,
                isAuth: true            
            };                                    
        
        default: return state;
    }
}


export const setUserDataActionCreator = (userId, email, login) =>
    ({ type: SET_USER_DATA, data: {userId, email, login} })   
    
export const getUserDataThunkCreator = () => (dispatch) => {
    authAPI.getMe()
    .then(data => {         
        if (data.resultCode === 0) {
            //userId, email, login
            let {id, email, login} = data.data;//деструктуризация
            dispatch(setUserDataActionCreator(id, email, login));
        }
        
    })
}

 

export default authReducer;