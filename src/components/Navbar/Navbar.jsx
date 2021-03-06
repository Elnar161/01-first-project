import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './friend/Friend';


const Navbar = (props) => {
    let friendsList = props.friends.map((f) => <Friend avaUrl={f.avaUrl} name={f.name} key={f.id}/>)
    return (
        <div>
            <nav className={s.nav}>
                <div className={`${s.item}`}>
                    <NavLink to='/Login' activeClassName={s.active}>Login</NavLink>                
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>                
                </div>
                <div className={s.item}>
                    <NavLink to='/Dialogs' activeClassName={s.active}>Message</NavLink>                
                </div>
                <div className={s.item}>
                    <NavLink to='/News' activeClassName={s.active}>News</NavLink>            
                </div>
                <div className={s.item}>
                    <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>                
                </div>
                <div className={s.item}>
                    <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>                
                </div>
                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>                
                </div>
                <div className={s.friends}>
                    {friendsList}
                </div>
            </nav>


        </div>
    );
}

export default Navbar;