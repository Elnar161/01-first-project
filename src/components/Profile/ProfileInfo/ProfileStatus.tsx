import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}


class ProfileStatus extends React.Component<PropsType, StateType>{
    state = {
        editMode: false,
        status: this.props.status
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
    
    componentDidUpdate(prevProps: PropsType, prevState: StateType){
        if (prevProps.status !== this.props.status)
        {   //если вызываем setState то обязательно условие а то войдет в бесконечный цикл
            this.setState({
                status: this.props.status
            });
        }
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.status);
    }
    
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                        <input onChange={this.onStatusChange} 
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}  
                            value={this.state.status}></input>
                    </div>
                }           
            </div>
        );
    }
}

export default ProfileStatus;