import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/API";
import { UserType } from "../types/types";
import { AppStateType } from "./reduxStore";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



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
        case FOLLOW:
            
            return {
                ...state,          
               users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: true}
                   }

                   return u;
               })
            };

        case UNFOLLOW:
            return {
                ...state,
               users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: false}
                   }
                   
                   return u;
               })
            };

        case SET_USERS:
                return {
                    ...state,
                    users: [...action.users],
                    totalUsersCount: action.totalCount
                };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };  
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };    
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.inProgress ? [...state.followingInProgress, action.userId] :  [...state.followingInProgress.filter(id => id != action.userId)]
            };                      
                          
        
        default: return state;
    }
}

type ActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType |
    SetCurrentPageActionType | ToggleIsFetchingType | ToggleFollowingInProgressType

type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followActionCreator = (userId: number): FollowActionType => 
    ({ type: FOLLOW, userId })

type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowActionCreator = (userId: number): UnfollowActionType => 
    ({ type: UNFOLLOW, userId })

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
    totalCount: number
}
export const setUsersActionCreator = (users: Array<UserType>, totalCount: number): SetUsersActionType =>
    ({ type: SET_USERS, users, totalCount })    

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPageActionCreator = (currentPage: number): SetCurrentPageActionType => 
    ({ type: SET_CURRENT_PAGE, currentPage })    

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}   
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => 
    ({ type: TOGGLE_IS_FETCHING, isFetching })

type ToggleFollowingInProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    inProgress: boolean
    userId: number
}   
export const toggleFollowingInProgress = (inProgress: boolean, userId: number): ToggleFollowingInProgressType => 
    ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, inProgress, userId })


//1 варик ThunkAction используется для типизации санки
//2 варик (pageNumber: number):(dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType)


export const getUsersThunkCreator = (currentPage: number, pageSize: number): 
        ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true));
        
        let data = await usersAPI.getUsers(currentPage, pageSize);
       
        dispatch(setUsersActionCreator(data.items, data.totalCount));
        dispatch(toggleIsFetching(false));        
    }
}

export const onPageChangedThunkCreator = (pageNumber: number) => {  
    return (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {    
        dispatch(setCurrentPageActionCreator(pageNumber));
        getUsersThunkCreator(pageNumber, 100);  
    }
}    
//вынисем ThunkType в отдельный тип
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
type DispatchType = Dispatch<ActionsTypes>;

const _followUnfollowFlow = async (dispatch: DispatchType, 
    userId: number, apiMethod: any, actionCreator: (userId: number) => FollowActionType | UnfollowActionType) => {
   
    dispatch(toggleIsFetching(true));
    dispatch(toggleFollowingInProgress(true, userId));
 
    let data = await apiMethod(userId);
    
    if (data.resultCode === 0)
    {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFetching(false)); 
    dispatch(toggleFollowingInProgress(false, userId));
}

export const onFollowThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), followActionCreator);
    }
}

export const onUnFollowThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.deleteFollow.bind(usersAPI), unfollowActionCreator);    
    }
}


export default usersReducer;