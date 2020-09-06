import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    debugger;
    let addPost = () => {        
        props.store.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (text) => {    
         props.store.dispatch(updateNewPostTextActionCreator(text)); 
    };

    return (
        <MyPosts addPost={addPost} 
                 updateNewPostText={updateNewPostText} 
                 posts={props.store.getState().profilePage.postsData}
                 newPostText={props.store.getState().profilePage.newPostText}/>
    );
}

export default MyPostsContainer;