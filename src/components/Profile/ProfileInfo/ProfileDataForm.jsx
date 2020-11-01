import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../Common/FormsControls/FormsControls';
import { requeredField } from '../../utils/validators';
import {Contact} from './ProfileInfo';
import style from './../../Common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({handleSubmit, profileInfo, error}) => {
    return  <form onSubmit={handleSubmit}>FORM
                 <div><button>Save</button> </div>  

                { error && <div className={style.formSummaryError}>
                    {error}
                    </div>}                                   
                
                <div> 
                
                    <b>Full name: </b>: <Field component={Input} placeholder='Full name' name="fullName"/>
                </div>  
                <div>
                    <b>Looking for a job</b>: <Field component={Input} type='checkbox' name='lookingForAJob'/>
                </div>
                                            
                <div>
                    <b>My professional skills</b>: <Field component={Textarea} placeholder='professional skills' name="lookingForAJobDescription"/>
                </div>                
                
                <div> 
                    <b>About me</b>: <Field component={Textarea} placeholder='About me' name="aboutMe"/> 
                </div> 
                <div> 
                    <b>Contacts</b>: {
                        Object.keys(profileInfo.contacts).map(key => {
                            return <div><b>{key}</b>: <Field component={Input} placeholder={key} name={"contacts." + key}/></div>
                        })
                    }
                </div>  

            </form>
}

const ProfileDataReduxForm = reduxForm({
    form: 'profile'
})(ProfileDataForm)

export default ProfileDataReduxForm;