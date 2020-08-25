import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/get-pdb/477388/8ea85076-5274-4d1e-b4b8-5577191e5d25/s1200?webp=false"></img>
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