import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { requeredField } from '../utils/validators';

import style from './../Common/FormsControls/FormsControls.module.css'

export type LoginFormValuesType = {
    login:string 
    password: string 
    rememberMe: boolean
}

type LoginFormValuesTypeKeys = keyof LoginFormValuesType

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} placeholder='Login' name="login" validate={[requeredField]}/>
            </div>    
            <div>
                <Field component={Input} placeholder='Password' name="password" validate={[requeredField]}/>
            </div>
            <div>
                <Field component={Input} type='checkbox' name="rememberMe"/>remember me
            </div>
            { error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>    
}

const LoginReduxForm = reduxForm<LoginFormValuesType>({
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    isAuth: boolean
    onLogIn: (formData: LoginFormValuesType) => void
}
const Login: React.FC<LoginPropsType> = ({isAuth, onLogIn}) => {
   
    if (isAuth){
        return <Redirect to='/profile'/>
    }

    return(
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onLogIn}/>
        
    </div>
    );
    
}

export default Login;