import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';
import userPhoto from '../../../assets/images/user.png'
import { Input } from '../../Common/FormsControls/FormsControls';

const ProfileInfo = ({profileInfo, status, updateStatus, isOwner, savePhoto}) =>{
    
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    return(
        
        <div>
            <div className={s.description_block}>
                <img src={profileInfo.photos.large || userPhoto} className={s.ava}></img>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <h1>{profileInfo.fullName}</h1>
                <h2>{profileInfo.aboutMe}</h2>
            </div>
        </div>
    );

}

export default ProfileInfo;