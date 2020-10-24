import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
// import StoreContext from '../../../StoreContext';

// const MyPostsContainer = (props) => {
//     debugger;


//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let addPost = () => {        
//                     store.dispatch(addPostActionCreator());
//                 };
            
//                 let updateNewPostText = (text) => {    
//                      store.dispatch(updateNewPostTextActionCreator(text)); 
//                 };

//                 return <MyPosts addPost={addPost} 
//                     updateNewPostText={updateNewPostText} 
//                     posts={store.getState().profilePage.postsData}
//                     newPostText={store.getState().profilePage.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            debugger;
            dispatch(addPostActionCreator(message))
        },
        updateNewPostText: (text) => {
             dispatch(updateNewPostTextActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;