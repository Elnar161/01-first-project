import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    debugger;
    return (
        
        <div>
            <ProfileInfo />                                 
            <MyPosts profilePageState={props.profilePageState} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>        
        </div>
    );
}

export default Profile;