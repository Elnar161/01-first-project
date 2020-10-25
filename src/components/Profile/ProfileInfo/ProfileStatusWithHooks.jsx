import React from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';




const ProfileStatusWithHooks = (props) => {

        //закидываем в useState значение по умолчанию
        //let stateWitgSetState = useState(false);
        //useState возвращает массив из 2-х элементов
        //let arr = [false, () => {}];
        //let [a, setA] = arr;      
          
        //let editMode = stateWitgSetState[0];//переменная 
        //let setEditMode = stateWitgSetState[1];//функция с помощью которой менять это значение
        let[editMode, setEditMode] = useState(false);
        let[status, setStatus] = useState(props.status);

        const activateEditMode = () => {
            setEditMode(true);
        }

        const deactivateEditMode = () => {
            setEditMode(false);
            props.updateStatus(status);
        }

        const onStatusChange = (e) => {
            setStatus(e.currentTarget.value) 
        }

        return(
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input autoFocus='true' onBlur={deactivateEditMode} 
                        onChange={onStatusChange}
                        value={status}></input>
                    </div>
                }           
            </div>
        );
}

export default ProfileStatusWithHooks;