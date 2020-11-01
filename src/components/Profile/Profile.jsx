import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return (        
        <div>
            <ProfileInfo profileInfo={props.profile} 
                         status={props.status} 
                         updateStatus={props.updateStatus} 
                         isOwner={props.isOwner} 
                         savePhoto={props.savePhoto}/>                                 
            <MyPostsContainer store={props.store}/>        
        </div>
    );
}

export default Profile;