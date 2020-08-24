import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/14/multfilm_Futurama_Bender_13773.jpg"></img>
           post1
            <div>
                <span>like</span>
            </div>            
        </div>
    );
}

export default Post;