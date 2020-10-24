import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let arrProsts = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    let addPost = (message) => {         
        props.addPost(message.newPostText); 
    }

    return(
        <div>
            <h2>MyPosts</h2>
            <div>
                <AddNewPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {arrProsts} 
            </div>            
        </div>
    );
}


const AddNewPostForm = (props) => {
    return  <Form onSubmit={props.handleSubmit}>    
                <Field component="textarea" name="newPostText" />
                <button>Add post</button>
            </Form>
}

const AddNewPostFormRedux = reduxForm({
    form: "myPostsAddNewPostForm"
})
(AddNewPostForm)

export default MyPosts;