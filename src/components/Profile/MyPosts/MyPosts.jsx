import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {id:1, message: 'Hi, how a you', likesCount: 10},
    {id:2, message: 'It`s my firs post', likesCount: 14}
]

const MyPosts = () => {
    return(
        <div>
            
            <div>
                <textare></textare>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>            
        </div>
    );
}

export default MyPosts;