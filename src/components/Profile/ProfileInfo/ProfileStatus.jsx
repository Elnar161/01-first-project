import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    state = {
        editMode: false
    }

    activateEditMode = () => {
    //console.log(this.state.editMode);//false
        this.setState({
            editMode: true
        });
    //console.log(this.state.editMode);//false
        //ВНИМАНИЕ setState асинхронный
        //и выполнится после завершения этой функции
        //this.state.editMode = true;
        //this.forceUpdate();//говорит реакрту что мы изменили state. но лучше не использовать
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }
    
    render(){
        return(
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus='true' onBlur={this.deactivateEditMode}  value={this.props.status}></input>
                    </div>
                }           
            </div>
        );
    }
}

export default ProfileStatus;