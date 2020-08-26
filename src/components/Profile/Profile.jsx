import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    debugger;
    return (
        
        <div>
            <ProfileInfo />                                 
            <MyPosts postsData={props.profilePageState.postsData}/>        
        </div>
    );
}

export default Profile;