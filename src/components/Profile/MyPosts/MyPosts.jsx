import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    debugger;
    let arrProsts = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    let updateNewPostText = (event) => { props.updateNewPostText(event.target.value); }
    return(
        <div>
            <h2>MyPosts</h2>
            <div>
                <textarea id='textPost' onChange={updateNewPostText} value={props.newPostText}></textarea>
                <button onClick={props.addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {arrProsts} 
            </div>            
        </div>
    );
}

export default MyPosts;