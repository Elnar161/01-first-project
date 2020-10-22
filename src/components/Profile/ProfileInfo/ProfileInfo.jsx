import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';

const ProfileInfo = (props) =>{
    debugger;
    return(
        
        <div>
            {/* <div>
                <img src="https://avatars.mds.yandex.net/get-pdb/477388/8ea85076-5274-4d1e-b4b8-5577191e5d25/s1200?webp=false" className={s.ava1}></img>
            </div> */}

            <div className={s.description_block}>
                <img src={props.profileInfo.photos.large} className={s.ava}></img>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <h1>{props.profileInfo.fullName}</h1>
                <h2>{props.profileInfo.aboutMe}</h2>
            </div>
        </div>
    );

}

export default ProfileInfo;