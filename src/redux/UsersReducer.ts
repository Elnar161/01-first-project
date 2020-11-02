import { usersAPI } from "../api/API";
import { UserType } from "../types/types";

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

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);
       
        dispatch(setUsersActionCreator(data.items, data.totalCount));
        dispatch(toggleIsFetching(false));        
    }
}

export const onPageChangedThunkCreator = (pageNumber: number) => {  
    return (dispatch: any) => {    
        dispatch(setCurrentPageActionCreator(pageNumber));
        getUsersThunkCreator(pageNumber, 100);  
    }
}    


const followUnfollowFlow = async (dispatch: any, 
    userId: number, apiMethod: any, actionCreator: any) => {
   
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

export const onFollowThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), followActionCreator);
    }
}

export const onUnFollowThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.deleteFollow.bind(usersAPI), unfollowActionCreator);    
    }
}


export default usersReducer;