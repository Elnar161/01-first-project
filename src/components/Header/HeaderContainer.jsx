import React from 'react';
import Header from './Header';

import { setUserDataActionCreator as setUserData} from '../../redux/AuthReducer';
import Axios from 'axios';
import { connect } from 'react-redux';

import {getAuthMe} from '../../api/API';

class HeaderContainer extends React.Component{

    componentDidMount(){
        getAuthMe()
            .then(data => { 
                debugger; 
                if (data.resultCode === 0) {
                    //userId, email, login
                    let {id, email, login} = data.data;//деструктуризация
                    this.props.setUserData(id, email, login);
                }
                
            })        
    }

    render(){
        debugger;
        return(
            <Header {...this.props}/>
        )
    }
}



let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(
    mapStateToProps,
    { setUserData }
    ) (HeaderContainer);