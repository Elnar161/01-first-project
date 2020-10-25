//WARNING!!! если селектор возвращает новый объект то компонента будет перересовываться
//напримен фильтрация массива из state вернет новый массив
//и в след раз в mapStateToProps массивы будут отличаться и опять перерисовка

import { createSelector } from 'reselect'


//для сложных селекторов с логикой использовать RESELECT
export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}


export const getUsersSelector =  (state) => {
    return getUsers(state).filter(u => true)
}

//если селектор зависит от нескольких примитивных селекторов
//то перечислить через , createSelector(getUsers, getIsFetching, (users, isFetching)
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})



export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}


export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress ;
}