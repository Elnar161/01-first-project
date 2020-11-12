import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';
import {logInUserThunkCreator, logOutUserThunkCreator} from './../../redux/AuthReducer';
import Login, { LoginFormValuesType } from './Login';

type PropsType = MapStatePropsType & MapDispatchPropsType

class LoginContainer extends React.Component<PropsType> {

    onLogIn = (formData: LoginFormValuesType) => {
        this.props.logInUserThunkCreator(formData.login, formData.password, formData.rememberMe);
    }

    onLogOut = () => { 
        this.props.logOutUserThunkCreator();
    }

    render(){
        return (                    
            <div>
                <Login {...this.props} onLogIn={this.onLogIn}/>
            </div>
        );
    }
}

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

type MapDispatchPropsType = {
    logInUserThunkCreator: (login: string, password: string, rememberMe: boolean) => void
    logOutUserThunkCreator: () => void 
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps,
        { logInUserThunkCreator, logOutUserThunkCreator }
        )
)(LoginContainer)    