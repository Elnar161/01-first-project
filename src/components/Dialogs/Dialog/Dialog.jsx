import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    debugger;
    return(
        <div className={s.dialog}>                            
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}><img src={props.avaUrl} className={s.ava}/>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;