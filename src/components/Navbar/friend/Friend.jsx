import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return(        
            <img src={props.avaUrl} alt={props.name} className={s.ava}/>        
    );
}

export default Friend;