import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    state = {
        editMode: false
    }

    activateEditMode = () => {
    //console.log(this.state.editMode);//false
        this.setState({
            editMode: true,
            status: this.props.status
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

        this.props.updateStatus(this.state.status);
    }
    
    onStatusChange = (e) => {
        debugger;
        this.setState({
            status:e.currentTarget.value
        }) 
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
                        <input onChange={this.onStatusChange} autoFocus='true' onBlur={this.deactivateEditMode}  value={this.state.status}></input>
                    </div>
                }           
            </div>
        );
    }
}

export default ProfileStatus;