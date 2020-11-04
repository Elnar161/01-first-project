import React from 'react';
import { ProfileType } from '../../types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropsType = {
    profileInfo: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (        
        <div>
            <ProfileInfo profileInfo={props.profileInfo} 
                         status={props.status} 
                         updateStatus={props.updateStatus} 
                         isOwner={props.isOwner} 
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>                                 
            <MyPostsContainer />        
        </div>
    );
}

export default Profile;