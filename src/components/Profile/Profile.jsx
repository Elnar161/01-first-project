import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let postsData = [
    {id:1, message: 'Hi, how a you', likesCount: 10},
    {id:2, message: 'It`s my firs post', likesCount: 14}
  ]
  

const Profile = () => {
    return (
        <div>
            <ProfileInfo />                                 
            <MyPosts postsData={postsData}/>        
        </div>
    );
}

export default Profile;