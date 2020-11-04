import { initializeApp } from './AppReducer';
//WARNING!!! если селектор возвращает новый объект то компонента будет перересовываться
//напримен фильтрация массива из state вернет новый массив
//и в след раз в mapStateToProps массивы будут отличаться и опять перерисовка

import { createSelector } from 'reselect'
import { AppStateType } from './reduxStore';
import {UserType} from "../types/types";


//для сложных селекторов с логикой использовать RESELECT
export const getUsers = (state: AppStateType): Array<UserType> => {
    return state.usersPage.users;
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}


export const getUsersSelector =  (state: AppStateType) => {
    return getUsers(state).filter(u => true)
}

//если селектор зависит от нескольких примитивных селекторов
//то перечислить через , createSelector(getUsers, getIsFetching, (users, isFetching)
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})



export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}


export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress ;
}