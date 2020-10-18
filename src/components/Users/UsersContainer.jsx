import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator as follow, 
         setUsersActionCreator as setUsers, 
         unfollowActionCreator as unfollow, 
         setCurrentPageActionCreator as setCurrentPage, 
         toggleIsFetching } from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader.jsx';


class UsersApiComponent extends React.Component{
    
    //если конструктор просто прокидывает пропсы в конструктор родителя
    //тогда его можно опустить. это произойдет автоматом
    constructor(props){
        super(props);        
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            debugger;
            //setTimeout(
            //    () => {
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,            
            { withCredentials: true, 
              headers: { "API-KEY": "12437860-4bfb-442d-b610-ad5936303546"}})
                //.then(response => {console.log(response.data.items);})
                .then(response => { this.props.setUsers(response.data.items, response.data.totalCount); this.props.toggleIsFetching(false); })
            //}, 5000)
        }
    }

    componentDidMount(){
        //вызывается сразу после монтирования (то есть, вставки 
        //компонента в DOM). В этом методе должны происходить действия, 
        //которые требуют наличия DOM-узлов. 
        //Это хорошее место для создания сетевых запросов.
        this.props.toggleIsFetching(true);
        this.getUsers();
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        //.then(response => {console.log(response.data.items);})
        .then(response => { this.props.setUsers(response.data.items, response.data.totalCount); this.props.toggleIsFetching(false); })        
    }

    onFollow = (userId) => {
        this.props.toggleIsFetching(true);
        Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, 
            { withCredentials: true, 
              headers: { "API-KEY": "12437860-4bfb-442d-b610-ad5936303546"}})        
        .then(response => { 
            if (response.data.resultCode === 0)
            {
                this.props.follow(userId);
            }
            this.props.toggleIsFetching(false); 
        })                        
    }

    onUnFollow = (userId) => {
        this.props.toggleIsFetching(true);
        Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, 
            { withCredentials: true, 
              headers: { "API-KEY": "12437860-4bfb-442d-b610-ad5936303546"}})        
        .then(response => { 
            if (response.data.resultCode === 0)
            {
                this.props.unfollow(userId);
            }
            this.props.toggleIsFetching(false); 
        })                  
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
                   onPageChanged={this.onPageChanged}/>
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
        isFetching: state.usersPage.isFetching
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
        follow, unfollow, setUsers, setCurrentPage,
        toggleIsFetching
    }
    )(UsersApiComponent);