import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/14/multfilm_Futurama_Bender_13773.jpg"></img>
            {props.message}
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>            
        </div>
    );
}

export default Post;