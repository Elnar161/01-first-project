import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    debugger;
    return (        
        <div>
            <ProfileInfo />                                 
            <MyPosts profilePageState={props.profilePageState} dispatch={props.dispatch}/>        
        </div>
    );
}

export default Profile;