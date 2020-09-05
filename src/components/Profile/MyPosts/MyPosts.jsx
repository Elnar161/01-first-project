import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/State';

const MyPosts = (props) => {
    let arrProsts = props.profilePageState.postsData.map(p => <Post message={p.message} likeCount={p.likeCount}/>);


    let addPost = () => {        
        props.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (event) => {
        debugger;
         props.dispatch(updateNewPostTextActionCreator(event.target.value)); 
    };

    return(
        <div>
            <h2>MyPosts</h2>
            <div>
                <textarea id='textPost' onChange={updateNewPostText} value={props.profilePageState.newPostText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {arrProsts} 
            </div>            
        </div>
    );
}

export default MyPosts;