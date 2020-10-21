import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    debugger;
    debugger;
    return (        
        <div>
            <ProfileInfo profileInfo={props.profileInfo}/>                                 
            <MyPostsContainer store={props.store}/>        
        </div>
    );
}

export default Profile;