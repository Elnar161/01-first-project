import React from 'react';
import { connect } from 'react-redux';
import { onPageChangedThunkCreator, actions,
         getUsersThunkCreator, onFollowThunkCreator, onUnFollowThunkCreator } from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import {getUsers, getPageSize, getTotalUsersCount, 
        getCurrentPage, getIsFetching, getFollowingInProgress, 
        getUsersSuperSelector} from '../../redux/UsersSelectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';


type MapStatePropsType = {
    totalUsersCount: number
    isFetching: boolean
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number)  => void
    onPageChanged: (pageNumber: number) => void 
    onFollow: (userId: number) => void
    onUnFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void 
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersApiComponent extends React.Component<PropsType>{

    componentDidMount(){
        this.props.getUsers(1, 100);
    }

    onPageChanged = (pageNumber: number) => {  
        //this.props.onPageChanged(pageNumber)
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, 100);      
    }

    onFollow = (userId: number) => {
        this.props.onFollow(userId);                          
    }

    onUnFollow = (userId: number) => {
        this.props.onUnFollow(userId);                           
    }

    render(){
        return (   
            <div>
                <h2>{this.props.pageTitle}</h2>
                {this.props.isFetching ?
                    <Preloader />
                    : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onUnFollow={this.onUnFollow}
                    onFollow={this.onFollow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress} />
            </div>
        );
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{        
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state) 
    }
}


export default compose(
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, 
        {
            setCurrentPage: actions.setCurrentPageActionCreator,
            onPageChanged: onPageChangedThunkCreator,
            getUsers: getUsersThunkCreator, 
            onFollow: onFollowThunkCreator, 
            onUnFollow: onUnFollowThunkCreator
        }),
    withAuthRedirect
)(UsersApiComponent);