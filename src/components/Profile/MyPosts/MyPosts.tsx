import React, { PureComponent } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { maxLengthCreator, requeredField } from '../../utils/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Textarea} from './../../Common/FormsControls/FormsControls';
import { Component } from 'react';
import { PostType } from '../../../types/types';

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}


const MyPosts: React.FC<PropsType> = React.memo((props) => { 

    let arrProsts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let addPost = (data: any) => {                 
        props.addPost(data.newPostText);} 
    

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
})



let maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props: any) => {
    return  <Form onSubmit={props.handleSubmit}>    
                <Field component={Textarea} name="newPostText" 
                validate={[requeredField, maxLength10 ]} placeholder='Post message'/>
                <button>Add post</button>
            </Form>
}

const AddNewPostFormRedux = reduxForm({
    form: "myPostsAddNewPostForm"
})
(AddNewPostForm)

export default MyPosts;