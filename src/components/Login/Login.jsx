import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { requeredField } from '../utils/validators';

import style from './../Common/FormsControls/FormsControls.module.css'


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder='Login' name="login" validate={[requeredField]}/>
            </div>    
            <div>
                <Field component={Input} placeholder='Password' name="password" validate={[requeredField]}/>
            </div>
            <div>
                <Field component={Input} type='checkbox' name="rememberMe"/>remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>    
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    debugger;
    if (props.isAuth){
        return <Redirect to='/profile'/>
    }

    return(
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={props.onLogIn}/>
        
    </div>
    );
    
}

export default Login;