import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    debugger;
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
        let arrPages = [];
        
        for (let i = 1; i <= pagesCount; i++) {
            let el = <span className={props.currentPage === i && s.selectedPage} 
                           onClick={(e) => { props.onPageChanged(i); }}>{i}</span>;
            arrPages.push(el);
        }

        let arrUsers = props.users.map((u) => 
        <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        u.followed ? 
                        <button onClick={() => props.unfollow(u.id)}>Unfollow</button>                     
                        :
                        <button onClick={() => props.follow(u.id)}>Follow</button>                     
                    }
                    
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
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
        </div>);
    
        return (                           
            <div>
                <div>
                    {arrPages}
                </div>
                <div>
                    {arrUsers}
                </div>
            </div>
        );
}

export default Users;