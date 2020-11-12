import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/API";
import { UserType } from "../types/types";
import { AppStateType, InferActionsTypes } from "./reduxStore";


let initialState = {
    users:[] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [] as Array<number> 
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            
            return {
                ...state,          
               users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: true}
                   }

                   return u;
               })
            };

        case 'UNFOLLOW':
            return {
                ...state,
               users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: false}
                   }
                   
                   return u;
               })
            };

        case "SET_USERS":
                return {
                    ...state,
                    users: [...action.users],
                    totalUsersCount: action.totalCount
                };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            };  
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };    
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.inProgress ? [...state.followingInProgress, action.userId] :  [...state.followingInProgress.filter(id => id != action.userId)]
            };                      
                          
        
        default: return state;
    }
}
type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {


followActionCreator: (userId: number) => 
    ({ type: 'FOLLOW', userId } as const),


unfollowActionCreator: (userId: number) => 
    ({ type: 'UNFOLLOW', userId } as const),

setUsersActionCreator: (users: Array<UserType>, totalCount: number) =>
    ({ type:'SET_USERS', users, totalCount } as const),    


setCurrentPageActionCreator: (currentPage: number) => 
    ({ type: 'SET_CURRENT_PAGE', currentPage }) as const,    


toggleIsFetching: (isFetching: boolean) => 
    ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),

   
toggleFollowingInProgress: (inProgress: boolean, userId: number) => 
    ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', inProgress, userId } as const)

}
//1 варик ThunkAction используется для типизации санки
//2 варик (pageNumber: number):(dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType)


export const getUsersThunkCreator = (currentPage: number, pageSize: number): 
        ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        
        let data = await usersAPI.getUsers(currentPage, pageSize);
       
        dispatch(actions.setUsersActionCreator(data.items, data.totalCount));
        dispatch(actions.toggleIsFetching(false));        
    }
}

export const onPageChangedThunkCreator = (pageNumber: number) => {  
    return (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {    
        dispatch(actions.setCurrentPageActionCreator(pageNumber));
        getUsersThunkCreator(pageNumber, 100);  
    }
}    
//вынисем ThunkType в отдельный тип
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
type DispatchType = Dispatch<ActionsTypes>;

const _followUnfollowFlow = async (dispatch: DispatchType, 
    userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
   
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.toggleFollowingInProgress(true, userId));
 
    let data = await apiMethod(userId);
    
    if (data.resultCode === 0)
    {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleIsFetching(false)); 
    dispatch(actions.toggleFollowingInProgress(false, userId));
}

export const onFollowThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), actions.followActionCreator);
    }
}

export const onUnFollowThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.deleteFollow.bind(usersAPI), actions.unfollowActionCreator);    
    }
}


export default usersReducer;