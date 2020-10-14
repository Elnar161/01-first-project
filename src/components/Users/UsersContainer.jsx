import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator, setCurrentPageActionCreator } from '../../redux/UsersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users, totalCount) => {
            dispatch(setUsersActionCreator(users, totalCount)); 
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage)); 
        }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);