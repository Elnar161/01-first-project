import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://secrets-fitness.ru/images/u/pages/gym-cover-10.jpg"></img>
            </div>

            <div>
                ava + description
            </div>

            <div>
                My posts
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;