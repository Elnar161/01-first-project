import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div>
            
            <div>
                <textare></textare>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how a you'/>
                <Post message="It's my firs post"/>
            </div>            
        </div>
    );
}

export default MyPosts;