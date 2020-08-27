import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    return(
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/get-pdb/477388/8ea85076-5274-4d1e-b4b8-5577191e5d25/s1200?webp=false" className={s.ava}></img>
            </div>

            <div className={s.description_block}>
                description
            </div>
        </div>
    );

}

export default ProfileInfo;