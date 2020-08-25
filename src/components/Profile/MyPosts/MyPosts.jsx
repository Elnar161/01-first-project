import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {id:1, message: 'Hi, how a you', likesCount: 10},
    {id:2, message: 'It`s my firs post', likesCount: 14}
]

let postsElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

const MyPosts = () => {
    return(
        <div>
            
            <div>
                <textare></textare>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>            
        </div>
    );
}

export default MyPosts;