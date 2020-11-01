import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';
import userPhoto from '../../../assets/images/user.png'
import { Input } from '../../Common/FormsControls/FormsControls';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profileInfo, status, updateStatus, isOwner, savePhoto, saveProfile}) =>{

    let[editMode, setEditMode] = useState(false);
    

    // useEffect( () => {
    //     setStatus(props.status);
    // }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
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



const ProfileData = ({profileInfo, isOwner, activateEditMode}) => {
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
export const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}: </b>{contactValue}
    </div>
}


export default ProfileInfo;