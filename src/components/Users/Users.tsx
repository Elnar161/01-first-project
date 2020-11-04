import React from 'react';
import { UserType } from '../../types/types';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize:number
    currentPage: number
    followingInProgress: Array<number>
    
    onUnFollow: (UserId: number) => void
    onFollow: (UserId: number) => void    
    onPageChanged: (pageNumber: number) => void  
}

let Users: React.FC<PropsType> = (props) => {
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
                           currentPageNumber={props.currentPage}
                           onPageChanged={props.onPageChanged}/>
                <div>
                    {arrUsers}
                </div>
            </div>
        );
}

export default Users;