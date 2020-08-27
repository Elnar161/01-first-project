import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let arrProsts = props.postsData.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    return(
        <div>
            
            <div>
                <textare></textare>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {arrProsts} 
            </div>            
        </div>
    );
}

export default MyPosts;