import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPageActionCreator as setCurrentPage, 
         getUsersThunkCreator, onFollowThunkCreator, onUnFollowThunkCreator } from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader.jsx';

class UsersApiComponent extends React.Component{
    
    //если конструктор просто прокидывает пропсы в конструктор родителя
    //тогда его можно опустить. это произойдет автоматом
    constructor(props){
        super(props);        
    }

    componentDidMount(){
        //вызывается сразу после монтирования (то есть, вставки 
        //компонента в DOM). В этом методе должны происходить действия, 
        //которые требуют наличия DOM-узлов. 
        //Это хорошее место для создания сетевых запросов.
        this.props.getUsersThunkCreator(1, 100);
        // this.props.toggleIsFetching(true);
        // if (this.props.users.length === 0) {
        //     usersAPI.getUsers(1, 100).then(data => 
        //           { debugger; this.props.setUsers(data.items, data.totalCount); 
        //             this.props.toggleIsFetching(false); })
        // }
    }

    onPageChanged = (pageNumber) => {  
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, 100);      
    }

    onFollow = (userId) => {
        this.props.onFollowThunkCreator(userId);                          
    }

    onUnFollow = (userId) => {
        this.props.onUnFollowThunkCreator(userId);                           
    }

    //метод render обязателен
    render(){

        return (   
            <div>   
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
                   followingInProgress={this.props.followingInProgress}/>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress 
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         setUsers: (users, totalCount) => {
//             dispatch(setUsersActionCreator(users, totalCount)); 
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageActionCreator(currentPage)); 
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching)); 
//         }               
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);
export default connect(mapStateToProps, 
    {
        setCurrentPage, getUsersThunkCreator, onFollowThunkCreator, onUnFollowThunkCreator
    }
    )(UsersApiComponent);