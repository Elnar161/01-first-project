import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/types';
import cn from 'classnames';

type PropsType = {
    user: UserType 
    onFollow: (userId: number) => void
    onUnFollow: (userId: number) => void
    followingInProgress: Array<number>
}

let User: React.FC<PropsType> = ({user, onFollow, onUnFollow, followingInProgress}) => {                
        return (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed ? 
                        <button onClick={() => onUnFollow(user.id)} disabled={followingInProgress.some(id => id === user.id)}>Unfollow</button>                     
                        :
                        <button onClick={() => onFollow(user.id)} disabled={followingInProgress.some(id => id === user.id)}>Follow</button>                     
                    }
                    
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {"u.location.country"}
                    </div>
                    <div>   
                        {"u.location.city"}                                         
                    </div>
                </span>
            </span>
        </div>
        
        );
}

export default User;