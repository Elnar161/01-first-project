import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
    debugger;


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let addPost = () => {        
                    store.dispatch(addPostActionCreator());
                };
            
                let updateNewPostText = (text) => {    
                     store.dispatch(updateNewPostTextActionCreator(text)); 
                };

                return <MyPosts addPost={addPost} 
                    updateNewPostText={updateNewPostText} 
                    posts={store.getState().profilePage.postsData}
                    newPostText={store.getState().profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;