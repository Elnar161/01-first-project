import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/reduxStore';
import { PostType } from '../../../types/types';


type MapStatePtopsType = {
    posts: Array<PostType>
    newPostText: string
}

let mapStateToProps = (state: AppStateType): MapStatePtopsType => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

type MapDispatchPtopsType = {
    addPost: (message: string) => void
    updateNewPostText: (text: string) => void
}


let mapDispatchToProps = (dispatch: any): MapDispatchPtopsType => {
    return {
        addPost: (message: string) => {
            dispatch(addPostActionCreator(message))
        },
        updateNewPostText: (text: string) => {
             dispatch(updateNewPostTextActionCreator(text))}
    }
}

const MyPostsContainer = connect<MapStatePtopsType, MapDispatchPtopsType>(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;