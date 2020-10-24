import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { requeredField } from '../utils/validators';


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
            <div>
                <button>Login</button>
            </div>
        </form>    
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    return(
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={props.onLogIn}/>
        
    </div>
    );
    
}

export default Login;