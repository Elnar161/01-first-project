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
                <Login {...this.props} onLogIn={this.onLogIn}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps,
        { logInUserThunkCreator, logOutUserThunkCreator }
        )
)(LoginContainer)    