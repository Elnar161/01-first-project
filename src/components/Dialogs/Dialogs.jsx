import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <div className={s.dialog + ' ' + s.active}>                        
                        <NavLink to="/dialogs/1">Artem</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">Artur</NavLink>                        
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">Natalia</NavLink>                        
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/4">Zhenia</NavLink>                        
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you</div>
                    <div className={s.message}>ok</div>
                </div>                
            </div>
    );
}

export default Dialogs;