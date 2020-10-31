import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';


let Users = (props) => {
        let arrUsers = props.users.map((u) => 
            <User user={u} 
                  onUnFollow={props.onUnFollow} 
                  onFollow={props.onFollow} 
                  followingInProgress={props.followingInProgress}/>
        );
    
        return (                           
            <div>
                <Paginator totalCount={props.totalUsersCount} 
                           pageSize={props.pageSize}
                           currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}/>
                <div>
                    {arrUsers}
                </div>
            </div>
        );
}

export default Users;