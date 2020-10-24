import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { maxLengthCreator, requeredField } from '../../utils/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Textarea} from './../../Common/FormsControls/FormsControls';


const MyPosts = (props) => {
    let arrProsts = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    let addPost = (data) => { 
        debugger;        
        props.addPost(data.newPostText); 
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

let maxLength10 = maxLengthCreator(10);
debugger;
const AddNewPostForm = (props) => {
    return  <Form onSubmit={props.handleSubmit}>    
                <Field component={Textarea} name="newPostText" 
                validate={[requeredField, maxLength10 ]}/>
                <button>Add post</button>
            </Form>
}

const AddNewPostFormRedux = reduxForm({
    form: "myPostsAddNewPostForm"
})
(AddNewPostForm)

export default MyPosts;