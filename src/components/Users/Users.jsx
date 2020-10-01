import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    let arrUsers = props.users.map((u) => 
    <div key={u.id}>
        <span>
            <div>
                <img src={u.photoURL} alt="" className={s.userPhoto}/>
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
                    {u.fullName}
                </div>
                <div>
                    {u.status}
                </div>
            </span>
            <span>
                <div>
                    {u.location.country}
                </div>
                <div>   
                    {u.location.city}                                         
                </div>
            </span>
        </span>
    </div>);

    return (
        <div>
            {arrUsers}
        </div>
    );
}

export default Users;