import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {logInUserThunkCreator, logOutUserThunkCreator} from './../../redux/AuthReducer';
import Login from './Login';


class LoginContainer extends React.Component {

    onLogIn = (formData) => {
        this.props.logInUserThunkCreator(formData.login, formData.password, formData.rememberMe);
    }

    onLogOut = () => { 
        this.props.logOutUserThunkCreator();
    }

    render(){
        return (                    
            <div>
                <Login onLogIn={this.onLogIn}/>
            </div>
        );
    }
}



export default compose(
    connect(null,
        { logInUserThunkCreator, logOutUserThunkCreator }
        )
)(LoginContainer)    