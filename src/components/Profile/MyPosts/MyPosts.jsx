import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    debugger;
    return(
        <div>
            
            <div>
                <textare></textare>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)} 
            </div>            
        </div>
    );
}

export default MyPosts;