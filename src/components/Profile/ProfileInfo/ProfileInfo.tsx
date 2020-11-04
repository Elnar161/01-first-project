import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';
import userPhoto from '../../../assets/images/user.png'
import { Input } from '../../Common/FormsControls/FormsControls';
import ProfileDataForm from './ProfileDataForm';
import { ProfileType } from '../../../types/types';

type PropsType = {
    profileInfo: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => any
    saveProfile: (profileInfo: ProfileType) => any
}

const ProfileInfo: React.FC<PropsType> = ({profileInfo, status, updateStatus, isOwner, savePhoto, saveProfile}) =>{

    let[editMode, setEditMode] = useState(false);
    

    // useEffect( () => {
    //     setStatus(props.status);
    // }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: any) => {
        //console.log(formData);
        saveProfile(formData).then( () => setEditMode(false))
        
        //setEditMode(false);
    }

    return(
        
        <div>
            <div className={s.description_block}>
                <img src={profileInfo.photos.large || userPhoto} className={s.ava}></img>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>             
                
                {editMode ? <ProfileDataForm initialValues={profileInfo} profileInfo={profileInfo} onSubmit={onSubmit}/> 
                          : <ProfileData profileInfo={profileInfo} isOwner={isOwner} activateEditMode={activateEditMode}/>}
                

            </div>
        </div>
    );
}


type ProfileDataPropsType = {
    profileInfo: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profileInfo, isOwner, activateEditMode}) => {
    return  <div>
                {
                    isOwner && <div><button onClick={activateEditMode}>Edit</button> </div>                    
                }

                <div> 
                    <b>Full name: </b>: {profileInfo.fullName}
                </div>  
                <div>
                    <b>Looking for a job</b>: {profileInfo.lookingForAJob ? "Yes" : "No"}
                </div>
                
                {
                profileInfo.lookingForAJob &&                    
                <div>
                    <b>My professional skills</b>: {profileInfo.lookingForAJobDescription}
                </div>
                }
                
                <div> 
                    <b>About me</b>: {profileInfo.aboutMe}
                </div> 
                <div> 
                    <b>Contacts</b>: {Object.keys(profileInfo.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profileInfo.contacts[key]}/>
                    })}
                </div>                     
            </div>
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string | null
}
export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}: </b>{contactValue}
    </div>
}


export default ProfileInfo;